import fs from 'fs';

const filePath = 'src/data/airports.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// There are 29 airports. We want ratingScore from 9.9 down to 8.5
let airportIndex = 0;
content = content.replace(/(ratingScore:\s*)([\d\.]+)/g, (match, prefix, oldVal) => {
  const newScore = (9.9 - airportIndex * (1.4 / 28)).toFixed(1);
  airportIndex++;
  return `${prefix}${newScore}`;
});

fs.writeFileSync(filePath, content, 'utf-8');
console.log(`Updated ${airportIndex} ratingScores in src/data/airports.ts`);
