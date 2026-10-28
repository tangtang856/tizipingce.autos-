import fs from 'fs';
import path from 'path';

const blogDir = 'src/content/blog';
const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));

console.log(`Found ${files.length} blog markdown files to process.`);

let modifiedCount = 0;

const sectionToAdd = `

---

### 📚 延伸阅读与选购指南

在进行网络环境调优与客户端分流配置时，底层连接的稳定度与延迟表现至关重要。如果您正在寻找高可用出海服务，建议重点参考本站的实测数据与专题：
- **权威选型**：参考全网权威的 [机场推荐](/ranking/overall/) 与深度实测 [梯子推荐](/recommend/) 综合实力榜单；
- **预算兼顾**：对比真实每GB流量成本的 [性价比机场](/ranking/value/) 测算排行；
- **节点与架构**：深入了解专线与中继的区别，优选低抖动 [机场节点](/glossary/node-types/) 与全区原生解锁的 [VPN节点](/glossary/what-is-vpn-node/)；
- **抗封锁保障**：优先选购基于 BGP 优质入口与物理专线的高可用 [VPN机场](/recommend/stable/)，获取最新的 [VPN推荐](/ranking/overall/) 深度实测评测报告。
`;

for (const file of files) {
  const filePath = path.join(blogDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Check if the section is already added
  if (!content.includes('延伸阅读与选购指南')) {
    // Also enhance tags in frontmatter if present
    content = content.replace(/tags:\s*\[(.*?)\]/, (match, tagsStr) => {
      const existingTags = tagsStr
        .split(',')
        .map((t) => t.trim().replace(/^['"]|['"]$/g, ''))
        .filter(Boolean);

      const targetTags = ['机场推荐', '性价比机场', '梯子推荐', 'VPN节点', 'VPN机场'];
      targetTags.forEach((tag) => {
        if (!existingTags.includes(tag)) {
          existingTags.push(tag);
        }
      });

      return `tags: [${existingTags.map((t) => `"${t}"`).join(', ')}]`;
    });

    content = content.trimEnd() + sectionToAdd;
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedCount++;
  }
}

console.log(`Successfully updated ${modifiedCount} blog markdown files with keywords and links.`);
