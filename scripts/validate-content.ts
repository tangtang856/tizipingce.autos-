/**
 * Content Validation Script
 * Checks for missing metadata, empty content, unreplaced variables, and data consistency.
 */

import fs from 'fs';
import path from 'path';
import { AIRPORTS } from '../src/data/airports';

let errorsCount = 0;
let warningsCount = 0;

function logError(msg: string) {
  console.error(`❌ [ERROR] ${msg}`);
  errorsCount++;
}

function logWarn(msg: string) {
  console.warn(`⚠️ [WARN] ${msg}`);
  warningsCount++;
}

function logPass(msg: string) {
  console.log(`✅ [PASS] ${msg}`);
}

console.log('====================================================');
console.log('   STEP 1: 验证机场数据库数据完整性 (airports.ts)');
console.log('====================================================');

if (!AIRPORTS || AIRPORTS.length === 0) {
  logError('机场数据库为空！');
} else {
  logPass(`已加载 ${AIRPORTS.length} 家机场品牌。`);
  const slugs = new Set<string>();

  AIRPORTS.forEach((airport) => {
    if (!airport.id || !airport.name || !airport.slug) {
      logError(`机场数据缺少必要字段: ${JSON.stringify(airport)}`);
    }
    if (slugs.has(airport.slug)) {
      logError(`发现重复的机场 slug: ${airport.slug}`);
    }
    slugs.add(airport.slug);

    if (!airport.startingPrice || airport.startingPrice <= 0) {
      logError(`机场 ${airport.name} 的起步价格不合法: ${airport.startingPrice}`);
    }

    if (!airport.plans || airport.plans.length === 0) {
      logError(`机场 ${airport.name} 没有配置任何套餐`);
    } else {
      airport.plans.forEach((plan) => {
        if (!plan.name || !plan.price || !plan.trafficGB) {
          logError(`机场 ${airport.name} 的套餐存在缺失关键属性: ${JSON.stringify(plan)}`);
        }
      });
    }

    if (!airport.lineType) {
      logError(`机场 ${airport.name} 缺少线路类型说明`);
    }

    if (!['tested', 'official-data', 'unverified'].includes(airport.testStatus)) {
      logError(`机场 ${airport.name} 的测试状态 testStatus 不符合规范: ${airport.testStatus}`);
    }
  });

  logPass('机场数据库字段校验完成。');
}

console.log('\n====================================================');
console.log('   STEP 2: 验证 Markdown 内容文件规范性');
console.log('====================================================');

const contentDirs = [
  path.resolve(process.cwd(), 'src/content/blog'),
  path.resolve(process.cwd(), 'src/content/guides'),
  path.resolve(process.cwd(), 'src/content/glossary'),
];

let totalMdFiles = 0;
const titles = new Map<string, string>();

contentDirs.forEach((dir) => {
  if (!fs.existsSync(dir)) {
    logError(`内容目录不存在: ${dir}`);
    return;
  }

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));
  files.forEach((file) => {
    totalMdFiles++;
    const fullPath = path.join(dir, file);
    const content = fs.readFileSync(fullPath, 'utf-8');

    // Check for unreplaced placeholder variables
    if (content.includes('{{') || content.includes('}}')) {
      logError(`文件包含未替换的模板参数 {{ }}: ${file}`);
    }

    if (content.includes('localhost') || content.includes('127.0.0.1:4321')) {
      logError(`文件包含本地开发测试地址: ${file}`);
    }

    // Check frontmatter
    const frontmatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!frontmatterMatch) {
      logError(`文件缺少合法的 Frontmatter 头部: ${file}`);
      return;
    }

    const fm = frontmatterMatch[1];
    const titleMatch = fm.match(/title:\s*["']?([^"'\r\n]+)["']?/);
    const descMatch = fm.match(/description:\s*["']?([^"'\r\n]+)["']?/);

    if (!titleMatch || !titleMatch[1].trim()) {
      logError(`文件缺少 title 字段: ${file}`);
    } else {
      const title = titleMatch[1].trim();
      if (titles.has(title)) {
        logError(`发现重复标题 "${title}": 已存在于 ${titles.get(title)} 与 ${file}`);
      } else {
        titles.set(title, file);
      }
    }

    if (!descMatch || !descMatch[1].trim()) {
      logError(`文件缺少 description 字段: ${file}`);
    }

    // Check body length
    const body = content.replace(/^---\r?\n[\s\S]*?\r?\n---/, '').trim();
    if (body.length < 150) {
      logWarn(`文件正文内容过短 (<150字)，可能有薄弱内容风险: ${file}`);
    }
  });
});

logPass(`共核验 ${totalMdFiles} 篇 Markdown 文章与百科文件。`);

console.log('\n====================================================');
console.log('   STEP 3: 检查必须存在的页面与合规文件');
console.log('====================================================');

const requiredFiles = [
  'public/robots.txt',
  'public/0d4957e8492040689b7c8449c258d4a1.txt',
  'docs/keyword-map.csv',
  'docs/bing-webmaster-tools.md',
  'docs/deployment.md',
  'src/pages/index.astro',
  'src/pages/about/index.astro',
  'src/pages/editorial-policy/index.astro',
  'src/pages/contact/index.astro',
  'src/pages/privacy-policy/index.astro',
  'src/pages/disclaimer/index.astro',
  'src/pages/compare/index.astro',
  'src/pages/ranking/overall/index.astro',
  'src/pages/ranking/value/index.astro',
  'src/pages/ranking/budget/index.astro',
  'src/pages/ranking/stable/index.astro',
];

requiredFiles.forEach((rf) => {
  const p = path.resolve(process.cwd(), rf);
  if (!fs.existsSync(p)) {
    logError(`缺失关键必须文件: ${rf}`);
  } else {
    logPass(`关键文件已就绪: ${rf}`);
  }
});

console.log('\n====================================================');
console.log(`内容与数据校验总结: ${errorsCount} 个错误, ${warningsCount} 个告警`);
console.log('====================================================');

if (errorsCount > 0) {
  process.exit(1);
} else {
  console.log('🎉 所有数据模型与内容验证通过！');
  process.exit(0);
}
