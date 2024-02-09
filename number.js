// Number built-in Method
const count = 123;

console.log(typeof count);              // number

// .toString
console.log(typeof count.toString());   // string

// .toExponensial
console.log(count.toExponential(0));  //RANGE 0-20 | 1e+2

// .toFixed
const num = 5.6785344
console.log(num.toFixed(2));     // 6 | pembulatan ke atas

// .toPrecision
const numb = 0.0026102;
console.log(numb.toPrecision(1)); // 0.003 | ya begitulah



// TYPE OF CONVERSION

// string conversion
const num2 = 1234;
console.log(typeof String(num2));  //string

//misal
const data = 'budi';
console.log(Number(data));  //NaN (not a number), tpi typeof nya number



// bolean conversion
console.log(Boolean(0));   //false
console.log(Boolean(''));  // false
console.log(Boolean(-1));   //true
console.log(Boolean(' '));  //true
console.log(Boolean(data));  //true







