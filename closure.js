function stopWatch() {
  let num = 0;
  return function () {
    num++;
    return num;
  };
}

const clock1 = stopWatch();
const clock2 = stopWatch();

console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock2());

console.log(clock2());
console.log(clock1());
console.log(clock2());
console.log(clock1());
