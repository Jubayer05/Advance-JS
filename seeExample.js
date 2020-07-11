const a = [[1], [2], [3]];
const b = [...a];

b.shift().shift();
console.log(a);
