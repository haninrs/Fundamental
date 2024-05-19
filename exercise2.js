// 1. Write a code to find area of rectangle.
// ○ Example : length = 5, width = 3 → 15

let lengthRectangle = 5;
let widthRectangle = 3;
let areaRectangle = lengthRectangle * widthRectangle;
console.log(`1. area of rectangle is ${areaRectangle}`);
//  1 Finish


// 2. Write a code to find perimeter of rectangle.
// ○ Example : length = 5, width = 3 → 16

// formula perimeter = 2*length + 2*width
let perimeterRectangle = 2*lengthRectangle + 2*widthRectangle;
console.log(`2. Perimeter of rectangle is ${perimeterRectangle}`);
// 2 finish


// 3. Write a code to find diameter, circumference and area of a circle.
// ○ Example : radius = 5
// ○ Output : diameter = 10, circumference = 31.4159, area = 78.539

// diameter = 2 * radius
// circumference = 2.pi.r
// area = pi.r.r

// DECLAIR PREPARATION
let radiusCircle = 5;
let pi = Math.PI;
// console.log(pi);

// PROSES
//diameter = 2*radius
let diameterCircle = 2 * radiusCircle;
// circumfrence = 2 * pi * r
let circumferenceCircle = (2*pi*radiusCircle).toFixed(4);
// area = pi * r**2
let areaCircle = (pi*radiusCircle**2).toFixed(4);

// CETAK
console.log(`3. Diameter, Circumference, Area :
(a) Diameter of Circle is ${diameterCircle}cm.
(b) Circumference of circle is ${circumferenceCircle}cm
(c) Area of circle is ${areaCircle}cm`);
//  3 END


// 4. Write a code to find angles of triangle if two angles are given.
// ○ Example : a = 80, b = 65 → 35

// angles of a triangle = 180
//  a=80 , b=65 , c=35

const anglesTriangle = 180;
const a = 80, b = 65;
const c = anglesTriangle - (a+b);
console.log(`4. an angles of triangle is ${c}`);
// 4 END


// 5. How many day from now to new years 2025
// ○ Example : 08/02/2024 -> 01/01/2025 => .... days

// Declair 
let now = new Date();
let newYear = new Date('2025-01-01');

// PROSES
// console.log(now.getTime());      | 1707367270760ms
// console.log(newYear.getTime());  |1735689600000ms

// perbedaan waktu
let diff = newYear.getTime() - now.getTime()   // 1735689600000-1707367270760 = 28322228812ms

// konversi ms ke day
let diff2 = diff / (1000*60*60*24);

// cetak
console.log(`5. Day remains before 2025 is ${Math.floor(diff2)} days`);
// 5 END


// ● Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
// ○ Example : 400 days → 1 year, 1 month, 5 days
// ○ Example: 366 days → 1 year, 0 month, 1 day

// DECLAIR
const day = 400;

// PROCCES

// cari berapa tahun, bulatkan kebawah 
// cari berapa bulan dari sisa tahun ,bulatkan kebawah
// cari berapa hari dr sisa bulan, bulatkan kebawah

let tahun = Math.floor(day/365);    // 1 tahun

let bulan = Math.floor((400 - (tahun*365)) / 30);  // (400 - (1*365)) / 30 -->> 35/30 = 1 bulan
// atau pakai modulus
let bulan1 = Math.floor((day % 365) / 30);    //(400 % 365) / 30 -->> 35 / 30 = 1 bulan

let hari = Math.floor((day%365) - 30);   // (400 % 365)-30 -->> 35-30 = 5 hari

// console.log(tahun);
// console.log(bulan);
// console.log(bulan1);
// console.log(hari);

//  Cetak
console.log(`6. ${day} hari --> ${tahun} tahun, ${bulan1} bulan, ${hari} hari.`)