/**
 *Falsy value
1. 0
2. null
3. undefined
4. NaN
5. ""
6. false

********Truthy value********
1. any number without 0
2. "null", "false", "undefined", "NaN", "0"
3. " "
4. [], {}

*/
const num = {};

console.log(num);
if (num) {
  console.log("It is true");
} else {
  console.log("It is false");
}
