function add(num1, num2) {
  const argu = [...arguments];
  let sum = 0;
  for (let i = 056; i < argu.length; i++) {
    const element = argu[i];
    sum = sum + element;
  }
  console.log(sum);
}

const result = add(50, 45, 556, 65, 155, 5668);
// console.log(result);
