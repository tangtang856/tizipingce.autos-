/**
 * Internal Link Integrity Checker
 * Verifies that all internal links referenced in content and pages resolve to valid routes.
 */

import fs from 'fs';
import path from 'path';
import { AIRPORTS } from '../src/data/airports';

console.log('====================================================');
console.log('   内链完整性检测 (check-links.ts)');
console.log('====================================================');

// Known route set
const validRoutes = new Set<string>([
  '/',
  '/recommend/',
  '/recommend/budget/',
  '/recommend/premium/',
  '/recommend/beginner/',
  '/recommend/stable/',
  '/recommend/ai/',
  '/recommend/streaming/',
  '/ranking/overall/',
  '/ranking/value/',
  '/ranking/budget/',
  '/ranking/stable/',
  '/compare/',
  '/review/',
  '/guides/',
  '/guides/windows/',
  '/guides/android/',
  '/guides/ios/',
  '/guides/macos/',
  '/guides/appletv-router/',
  '/blog/',
  '/blog/vpn-vs-airport-guide/',
  '/blog/how-to-choose-airport/',
  '/blog/subscription-security/',
  '/blog/clients-comparison/',
  '/blog/airport-speed-test-truth/',
  '/glossary/',
  '/glossary/node-types/',
  '/glossary/what-is-vpn-node/',
  '/glossary/protocols/',
  '/glossary/subconverter/',
  '/glossary/gfw-dpi/',
  '/about/',
  '/contact/',
  '/editorial-policy/',
  '/privacy-policy/',
  '/disclaimer/',
  '/404/',
  '/sitemap-index.xml',
]);

// Add dynamic routes from airports
AIRPORTS.forEach((a) => {
  validRoutes.add(`/airport/${a.slug}/`);
  validRoutes.add(`/review/${a.slug}/`);
});

let linkErrors = 0;
let checkedLinksCount = 0;

function checkUrl(url: string, source: string) {
  // Ignore external links, mailto, tel, anchor hashes
  if (url.startsWith('http://') || url.startsWith('https://')) {
    if (url.startsWith('https://tizipingce.autos/')) {
      const internalPath = url.replace('https://tizipingce.autos', '');
      const normalized = internalPath.endsWith('/') ? internalPath : `${internalPath}/`;
      checkedLinksCount++;
      if (!validRoutes.has(normalized) && !normalized.includes('#')) {
        console.error(`❌ [DEAD LINK] ${source} 引用了未知的绝对站内链接: ${url}`);
        linkErrors++;
      }
    }
    return;
  }

  if (url.startsWith('mailto:') || url.startsWith('tel:') || url.startsWith('#') || url.startsWith('data:')) {
    return;
  }

  // Normalize internal path
  let cleanUrl = url.split('#')[0].split('?')[0];
  if (!cleanUrl.endsWith('/')) {
    cleanUrl = `${cleanUrl}/`;
  }

  checkedLinksCount++;
  if (!validRoutes.has(cleanUrl)) {
    console.error(`❌ [DEAD LINK] ${source} 链接失效: ${url} (规范化为: ${cleanUrl})`);
    linkErrors++;
  }
}

// 1. Scan all markdown files
const contentDirs = [
  path.resolve(process.cwd(), 'src/content/blog'),
  path.resolve(process.cwd(), 'src/content/guides'),
  path.resolve(process.cwd(), 'src/content/glossary'),
];

contentDirs.forEach((dir) => {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const content = fs.readFileSync(fullPath, 'utf-8');

    // Match markdown links [text](url)
    const mdLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match;
    while ((match = mdLinkRegex.exec(content)) !== null) {
      const href = match[2];
      checkUrl(href, file);
    }
  });
});

// 2. Scan Astro pages
function scanAstroPages(dir: string) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanAstroPages(fullPath);
    } else if (entry.name.endsWith('.astro')) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      const hrefRegex = /href=["']([^"']+)["']/g;
      let m;
      while ((m = hrefRegex.exec(content)) !== null) {
        const href = m[1];
        // Skip template interpolations like href={`/airport/${airport.slug}/`}
        if (href.includes('${') || href.includes('{')) continue;
        checkUrl(href, path.basename(fullPath));
      }
    }
  }
}

scanAstroPages(path.resolve(process.cwd(), 'src/pages'));

console.log(`\n已检测站内链接总数: ${checkedLinksCount}`);
if (linkErrors > 0) {
  console.error(`❌ 发现 ${linkErrors} 个失效内链，请修复后再行构建！`);
  process.exit(1);
} else {
  console.log('🎉 所有站内链接均可正确解析，无死链或孤岛路由！');
  process.exit(0);
}
