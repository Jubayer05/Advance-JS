Undefined;
let number;

let number = undefined;

function add(num1, num2) {
  console.log(num1 + num2);
  //If I pass parameter & don't set return inside a function then it show undefined by default
}

function add(num1, num2) {
  console.log(num1, num2);
  //If you pass parameter inside a function and not call those parameter then it shows undefined
}

const result = add(23);
console.log(result);

const array = [2324, 324, 5432, 1234];
console.log(array[11]);
//If I want to see the index of any element inside an array and if the index position is not situated in the array then it shows undefined

const object = {
  name: "Kimson",
  phone: 322324,
};

const phone = object.address;
// If I want to see property in side an object and if the property isn't consist in the object then it shows undefined
console.log(phone);

// null = if the variable is absent then it is null...
