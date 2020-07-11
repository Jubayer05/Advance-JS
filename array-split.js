const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newArray = number.slice(0, 3);
console.log(newArray);
console.log(number);

const remove = number.splice(3, 3);
console.log(remove);
console.log(number);

const join = number.join(" tomSawar    ");
console.log(join);
