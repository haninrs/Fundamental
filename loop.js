//  1. FOR
// for (let i = 1 ; i<=20 ; i++){
//     console.log(`halo ke-${i}`);
// }

//  2. While
// Klo While  Mikir dulu (i<5), baaru kerja i++
let i = 0;
while(i<5){                 //mikir
    console.log(`hello!`);  //kerja
    i++;                    //kerja
}

// 3. DO WHILE

// kalo DO WHILE kerjain j++ dulu, baru mikir (j<3)

let j = 1
do {
    console.log(`hello ke-${j}`);   //kerja
    j++;                            //kerja
} while (j<3);                      //mikir


// 4. BREAK
// ONLY CAN USE DI WHILE, FOR BISA SIH
let a = 0;
while(a<5){                 //mikir
    if (a===3);             //break
    console.log(`hello!`);  //kerja
    a++;                    //kerja
}

// break
let sum = 0;

while(true){
    let value =1;

    if (sum === 5) break;

    sum += value ; 
}
console.log(`sum : ${sum}`);


// 5. Continue
for (let o = 0; o <5 ; o++){

    // jika o adalah 3 dia bakal skip 3 nya dan lanjut angka selanjutnya
    if (o===3) continue;

    console.log(o); //0,1,2,4,5 ==> 3 nya di skip lanjut 4
}


// break vs continue :
// break buat stop perulangan       continue buat skip(parameter), trus lanjut ke next perulangan
