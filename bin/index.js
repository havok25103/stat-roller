#!/usr/bin/env node

const rollFourDSixDropLowest = () => {
  const stats = [];

  for(let x = 0; x < 6; x++) {
    const rolls = [];
    
    for(let y = 0; y < 4; y++) {
      rolls.push(Math.floor((Math.random() * 6) + 1));
    }

    const lowest = Math.min(...rolls);
    const lowestIndex = rolls.findIndex(item => item === lowest);
    
    rolls.splice(lowestIndex, 1);
    
    const total = rolls.reduce((a, b) => a + b);

    stats.push(total);
  }

  return stats;
};

console.log('Standard Array:', [ 15, 14, 13, 12, 10, 8 ]);
console.log('4d6:', rollFourDSixDropLowest());
