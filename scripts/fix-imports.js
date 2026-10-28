import fs from 'fs';
import path from 'path';

function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDir(full);
    } else if (entry.name.endsWith('.astro')) {
      let content = fs.readFileSync(full, 'utf-8');
      const updated = content
        .replace(/from\s+['"][./]+layouts\/BaseLayout\.astro['"]/g, "from '@/layouts/BaseLayout.astro'")
        .replace(/from\s+['"][./]+components\/([^'"]+)['"]/g, "from '@/components/$1'")
        .replace(/from\s+['"][./]+data\/([^'"]+)['"]/g, "from '@/data/$1'");
      if (updated !== content) {
        fs.writeFileSync(full, updated, 'utf-8');
        console.log('Updated:', path.relative(process.cwd(), full));
      }
    }
  }
}

processDir(path.resolve(process.cwd(), 'src/pages'));
