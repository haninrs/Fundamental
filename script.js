// 1. INTRO
// console.log('Hello Word'); // 1. ini untuk menampilkan hello word

// 2. Komentar 
// ini adalah komentar

/* 

this is
multiline
commentar

h
e
l
l
o

w
o
r
d

END INTRO
*/



// 2. VARIABLE
console.log('VARIABLE');

let massage;        // declaration
massage = 'Hello'; // operand (=) | string 'Hello'

console.log(massage);   // cetak var


// ->> Variable Declaration
// 3 ways to declare variable [var, let , const]
var GlobalVar = 'Hello Purwadhika'; // var

let replaceable = 'this is value replace able'; // let
console.log(replaceable);
replaceable = 'i lov javascsript';

const constan = 'This value not replaceable (konsisten)';  // const
// constan = 'coba';        ini eror

// cetak
console.log(GlobalVar);
console.log(replaceable);
console.log(constan);


// ->> Variable Naming  --> [contain letters, digit, symbol $ _]
// giniBolehBanget
// 2gakboleh
// boleh1
console.log('\n' + 'End Variable' + '\n');
// END VARIABLE


// 3. DATA TYPES

// -> Primitive
/* 

1.String = "ini huruf"
2. Number & int = 1 
3. Boolean = true | false
4. Null = null
5. Undifined = tak terdefinisikan

*/

// -> Non-primitive
// Object & Array

//  let's try it
console.log("TIPE DATA" + '\n');

const pesan = 'JavaScript';                 // STRING
const count = 1;                            // NUMBER disarankan gak lebih dr 3 angka (biar lebih akurat)
const bigNumber = 90900892358728956829n;    //BIGINT dikasi n biar lebih akurat
const isTrue = true ;   // BOLEAN
const noData = null;    // object
let noAssigned ;        // undifined
const person = {        // object
    name : 'budi',
    age : 23
}


console.log(typeof count);
console.log(typeof bigNumber);
console.log(typeof isTrue);
console.log(typeof noData);
console.log(typeof noAssigned);
console.log(typeof person);



// tes git day-3