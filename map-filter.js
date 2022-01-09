/** 
 * Basic way to get elements square

const array = [34, 243, 643, 432, 273, 868, 985];
const numSquare = [];

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  const square = element * element;
  numSquare.push(square);
}
console.log(numSquare);
 */

//Same calculation using advance js & easiest way

const array = [3, 8, 7, 6, 5, 2];
// const square = array.map(function (element) {
//   return element * element;
// });

//More simple way
const square = array.map((x) => x * x);

const bigger = array.filter((x) => x > 5); //Output = [ 8, 7, 6 ]

const isThere = array.find((x) => x > 5); //Output = 8
console.log(isThere);
