const bonus = 500; //Global Scope

// function add(num1, num2) {
//   const sum = num1 + num2 + bonus;

//   if (sum > 20) {
//     const mood = "happy"; //Output = mood is not defined
//     console.log(mood);
//   }
//   console.log(mood);

//   return sum;
// }

function add(num1, num2) {
  const sum = num1 + num2 + bonus;

  if (sum > 20) {
    var mood = "happy"; //output = happy
    console.log(mood);
  }
  console.log(mood);

  return sum;
}

const result = add(34, 66);
console.log(bonus);
console.log(result);
