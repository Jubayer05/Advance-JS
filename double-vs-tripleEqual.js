const first = 234;
const second = "234";

//Double equal doesn't check the type just check the value
if (first == second) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}

const first = 1;
const second = true;

//Triple equal check both type and value
if (first === second) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}
