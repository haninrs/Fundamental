// 1. code to convert celcius to farhenheit
var celsius = 60;
var fahrenheit;

if (celsius >= 0 && celsius <= 100) {
    fahrenheit = (celsius * 9/5) + 32;
    console.log(celsius + " Celsius = " + fahrenheit + " Fahrenheit");
} else {
    console.log("Suhu Celsius harus berada dalam rentang 0 hingga 100.");
}


// 2. code to check wether the number is odd or even
var Angka = 474;

// if statement
if (Angka % 2 == 0) {
    console.log(Angka + ' adalah bilagan genap');
}

else if (Angka % 2 == 1 || Angka % 2 == -1){
    console.log(Angka + ' adalah bilangan ganjil');
}

else {
    console.log('Yang anda masukan bukan angka');
}


// 3. code to check wether the number is prime number or not
/* 
Mulai dari sebuah bilangan bulat.

Jika bilangan tersebut kurang dari atau sama dengan 1, maka bilangan tersebut bukanlah bilangan prima. Tampilkan pesan yang menyatakan hal ini.

Jika bilangan tersebut lebih besar dari 1, maka kita akan memeriksa(for) apakah bilangan tersebut bisa dibagi oleh bilangan lain selain 1 dan dirinya sendiri.

    Untuk setiap bilangan dari 2 hingga bilangan sebelumnya:
        Jika bilangan tersebut bisa dibagi dengan sisa 0 oleh bilangan lain, maka bilangan tersebut bukanlah bilangan prima. Tampilkan pesan yang menyatakan hal ini dan berhenti.

    Jika setelah melalui semua bilangan dari 2 hingga bilangan sebelumnya, tidak ada yang bisa membagi bilangan tersebut dengan sisa 0, maka bilangan tersebut adalah bilangan prima. Tampilkan pesan yang menyatakan hal ini.

Selesai.
*/
const angka = 31;
let isPrime = true;

if (angka <= 1){
    isPrime = false;
} else {
    for ( let i = 2 ; i<angka ; i++ ){
        if(angka% i === 0) {
            isPrime = false; break;
        }
    }
}

if (isPrime){
    console.log(`${angka} is a prime number`);
} else{
    console.log(`${angka} is not a prime number`);
}

// CARA 2
// =======================================
// prima cuma punya dua pembagi habis yaitu 1 dan diri dia
const angka1= 30 ;
let bisaDibagi = 0 ;

for (let i=0 ; i<= angka1; i++){
    if (angka1 % i === 0){
        bisaDibagi++;
    }
}
console.log(`${angka1}` ,bisaDibagi== 2 ?  'adalah bilangan prima' : 'bukan bilangan prima');
console.log(bisaDibagi);



// 4. Write a code to find the sum of the numbers 1 to N
// ○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// ○ Example: 3 → 1 + 2 + 3 = 6

let N = 5;
let sum = 0;
let  desc = ''

for (let i = 1; i <= N; i++) {
    sum += i;

    // desc += i;
}
console.log("Jumlah angka dari 1 hingga", N, "adalah:", sum);
// console.log(`${desc}`)
//  1+2+3+4+5


// 5. Write a code to find factorial of a number
// ○ Example: 4! → 4 x 3 x 2 x 1 = 24
// ○ Example: 6! → 6 x 4 x 3 x 2 x 1 = 720

// ===========================================
let n = 6;
let fac = 1;

for (let a=1; a<=n; a++){
    fac *= a;
}

console.log(fac);

// 6. Write a code to print the first N fibonacci numbers
// ○ Example: 15 → 610

// fibbonaci = 1+1+2+3+5+8+13+21
// rumus === Fn + 1 = Fn – 1 + Fn

let Nfibb = 10;
let x = 1;
let y = 1;
let z = 0;

for (let i = 1; i>=Nfibb ; Nfibb++){
    z = x + y;
    y = x;
    x = z;
    console.log(x);
}









