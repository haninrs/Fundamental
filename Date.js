// Date Data Type

// now
let now = new Date();
console.log(now);   // 2024-02-06 |tgl saat ini dan jam waktu UTC (-7 dr kita)
console.log(typeof now);   // object

// 0
let data = new Date(0);
console.log(data);  //waktu kelahiran js 1970an

// Costum Date
let data2 = new Date('2024-12-01'); // tahun-bulan-hari
console.log(data2); //2024-12-01


// Get tahun, bulan, tanggal, hari
console.log(now.getFullYear()); //2024
console.log(now.getMonth());    // 2 | bulan januari 0, feb 1, dst
console.log(now.getDate());     // tgl 6
console.log(now.getDay());      // hari 2 | minggu 0, senin 1 dst
console.log(now.getTime());     //Mengembalikan timestamp untuk tanggal – sebuah angka dari milidetik yang telah terlewat sejak 1 Januari 2970 | PER-MILIDETIK
/*
.getHours
.getMinutes
.getSeconds
.getMiliSeconds
.getTime
Date.now
Date.parse


Set Method
setDate
setFullYear
dll
*/

console.log(now.toLocaleTimeString());  //jam lokal komp kita
console.log(now.toDateString());        //hari tgl lokal komp kita | format inggris | Tue feb 06 2024
console.log(now.toLocaleDateString());  //hari tgl lokal komp kita | format angka | 2/6/2024

