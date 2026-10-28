import fs from 'fs';
import path from 'path';

const targetKeywords = [
  '机场推荐',
  '机场节点',
  '性价比机场',
  '梯子推荐',
  'vpn',
  'vpn机场',
  'vpn节点',
  'vpn推荐',
];

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const htmlFiles = walk('dist');
console.log('Total HTML files in dist:', htmlFiles.length);

const stats = {};
targetKeywords.forEach((k) => {
  stats[k] = { occurrences: 0, fileCount: 0, samplePages: [] };
});

htmlFiles.forEach((file) => {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative('dist', file).replace(/\\/g, '/');
  targetKeywords.forEach((k) => {
    const reg = new RegExp(k, 'gi');
    const matches = content.match(reg);
    if (matches && matches.length > 0) {
      stats[k].occurrences += matches.length;
      stats[k].fileCount += 1;
      if (stats[k].samplePages.length < 3) {
        stats[k].samplePages.push(relPath);
      }
    }
  });
});

console.log('=== 8 大主攻关键词在 dist/ 316 个页面中的覆盖情况 ===\n');
targetKeywords.forEach((k) => {
  const s = stats[k];
  const pct = ((s.fileCount / htmlFiles.length) * 100).toFixed(1);
  console.log(`【${k}】`);
  console.log(`- 出现总频次: ${s.occurrences} 次`);
  console.log(`- 覆盖页面数: ${s.fileCount} / ${htmlFiles.length} (${pct}%)`);
  console.log(`- 示例页面: ${s.samplePages.join(', ')}\n`);
});
