// 1. Write a code to convert celsius to fahrenheit
// ○ Example: 60 Celcius → 140 Fahrenheit

//  Formula :  NumberF = (9/5 NumberC) + 32
let derCelcius = 60;
let f = 0;
   
if (derCelcius >=0 && derCelcius<=100) {
    f = (9/5*derCelcius) + 32;
    console.log(`${derCelcius} Celcius -> ${f} farhenheit`);
}
// 1 END


// 2. Write a code to check whether the number is odd or even
// ○ Example: 25 → odd number, 2 → even number

// jika habis dibagi 2 = genap
// jika tidak habis dibagi 2 = ganjil
let number = 3301;

if (number%2 == 0){
    console.log(`${number} adalah angka genap`);
} else{
    console.log(`${number} adalah angka ganjil`);
}
//  2 END


// 3. Write a code to check whether the number is prime number or not
// ○ Example: 7 → 7 is a prime number
// ○ Example: 6 → 6 is not a prime number

let number1 = 4;
let prime = `${number1} is a prime number` ;
let notPrime = `${number1} is not a prime number`;
let devider = 0;

// bil prima cuma bs dibagi 2x(1 && bil. itu sendiri)
// cek (i=2 ; i<=number1 ; ++)
// diveder++

// if(devider)

console.log(devider)
// 4. Write a code to find the sum of the numbers 1 to N
// ○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// ○ Example: 3 → 1 + 2 + 3 = 7

// 5. Write a code to find factorial of a number
// ○ Example: 4! → 4 x 3 x 2 x 1 = 24
// ○ Example: 6! → 6 x 4 x 3 x 2 x 1 = 720

// 6. Write a code to print the first N fibonacci numbers
// ○ Example: 15 → 610