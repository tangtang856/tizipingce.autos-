import fs from 'fs';

const sampleSlugs = ['yinxingren', 'muguang', 'feimaoyun', 'dalaocloud', 'wavenet'];

console.log('=== 检查深度评测页 (/review/) TDK ===');
sampleSlugs.forEach((slug) => {
  const html = fs.readFileSync(`dist/review/${slug}/index.html`, 'utf8');
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const desc = html.match(/<meta name="description" content="(.*?)"/)?.[1];
  const kw = html.match(/<meta name="keywords" content="(.*?)"/)?.[1];
  console.log(`\n【${slug}】`);
  console.log('Title:', title);
  console.log('Desc:', desc);
  console.log('Keywords:', kw);
});

console.log('\n=== 检查品牌档案页 (/airport/) TDK ===');
sampleSlugs.forEach((slug) => {
  const html = fs.readFileSync(`dist/airport/${slug}/index.html`, 'utf8');
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const desc = html.match(/<meta name="description" content="(.*?)"/)?.[1];
  const kw = html.match(/<meta name="keywords" content="(.*?)"/)?.[1];
  console.log(`\n【${slug}】`);
  console.log('Title:', title);
  console.log('Desc:', desc);
  console.log('Keywords:', kw);
});
