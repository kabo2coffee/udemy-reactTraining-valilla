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

/**
 * デフォルト値
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
sayHello();

/**
 * スプレッド構文
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー,結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
arr6[0] = 100;
console.log(arr6);
console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7)

// 参照コピーなので元配列も影響を受ける
// const arr8 =  arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr8[0])
// console.log(arr4[0])
