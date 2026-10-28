import fs from 'fs';
import path from 'path';

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
    let content = fs.readFileSync(fullPath, 'utf-8');

    // Remove the `# ...` header right after frontmatter
    const updated = content.replace(/^(---\r?\n[\s\S]*?\r?\n---\r?\n\r?\n)# [^\r\n]+\r?\n\r?\n/, '$1');
    if (updated !== content) {
      fs.writeFileSync(fullPath, updated, 'utf-8');
      console.log('Stripped duplicate H1 in markdown:', file);
    }
  });
});
