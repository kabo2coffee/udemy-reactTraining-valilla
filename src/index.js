const info = {
  name: "知也",
  age: 26
};

const message = `私の名前は${info.name}です。年齢は${info.age}です`;
console.log(message);

const { name, age } = info;
const message2 = `私の名前は${name}です。年齢は${age}です`;
console.log(message2);

const infoArray = ["知也", 26];
const massage3 = `私の名前は${infoArray[0]}です。年齢は${infoArray[1]}です`;
console.log(message);

const [name4, age4] = infoArray;
const massage4 = `私の名前は${name4}です。年齢は${age4}です`;
console.log(message);
