/* 

+
-
*
/
%
**  => ekspoensial

*/

//inget js dr atas ke bawah kiri ke kanan

console.log('1' - '10');    // -9  =>string
console.log('1' + '1');     // 11  => string
console.log( 1 + '1');        // 11 => string
console.log( 1 + 1  + '1');   // 21 => string
console.log( '1' + 1  + 1);   // 111 => string

console.log('1' + 1 *10);     //110 => string

console.log('purwadhika' - 'a');    //NaN
console.log('081234567910');    //dipakai untuk phone number
// console.log(081234567910);    // 812345678910  | 0 nya ga ikut |eror juga


//  INCREMENT & DECREMENT

let n = 2;
n += 5; // n = n + 5 | n = 2 + 5 = 7
n *= 2; // n = n * 2 | n = 7 * 2 = 14

console.log(n); //14


let c = 2
c++ // c+1 => 2+1 = 3
console.log(c); // 3
c--  // c-1 => 3-1 = 2
console.log(c) //2




// POSTFIX & PREFIX
// kaya struktur data pa deev

let preC = 0;
console.log(++preC);  //0+1 = 1

let postC = 0;
console.log(postC++);  // 0 
// ingat js atas ke bawah, kiri ke kanan



// COMPARISON OPERATORS     KOMPER | MEMBANDINGKAN
/* 
==  > bandingiin nilainya
=== > bandingin tipe datanya
!=  > tidak sama dgn
!== > tipe data juga dibandingin
>
<
>=
<=
*/

let x = 5 ;
console.log(x == 5);    // true
console.log(x == '5');  //true
console.log(x === '5');  //false
console.log(++x == 6);   // true

console.log(Boolean(x));  //true
console.log(!true);  // false | ganjil false
console.log(!!true);  // true | genap true
console.log(!!!!!!!!!!true);  // true

