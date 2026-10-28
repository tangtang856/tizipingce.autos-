import fs from 'fs';

const html = fs.readFileSync('dist/index.html', 'utf-8');
const regex = /<td class="py-4 px-4 text-center">[\s\S]*?<span[^>]*>\s*(\d+)\s*<\/span>[\s\S]*?<div class="font-bold text-slate-900">\s*<a href="\/airport\/[^"]+\/"[^>]*>\s*([^<]+)\s*<\/a>/g;

const matches = [...html.matchAll(regex)];
console.log('Homepage Table Rows Found:', matches.length);
matches.slice(0, 15).forEach(m => {
  console.log(`Rank ${m[1]}: ${m[2].trim()}`);
});
