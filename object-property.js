const student = [
  { id: 21, name: "Shakib" },
  { id: 41, name: "Mithun" },
  { id: 61, name: "Sabbir" },
  { id: 91, name: "Tamim" },
];

const nameArray = [];
for (let i = 0; i < student.length; i++) {
  const element = student[i];
  const onlyName = element.name;
  nameArray.push(onlyName);
}

console.log(nameArray);

//Using Map
const names = student.map((s) => s.name);
const ids = student.map((s) => s.id);

const ids2 = student.filter((s) => s.id > 30);
console.log(names);
console.log(ids2);
