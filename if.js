// IF 1 KONDISI
let age = 21;

if (age >= 17){
    console.log('you can create an ID card');
} else {
    console.log(`you are not old enaugh`)
}


//  IF 2 KONDISI or lebih
let grade = "B";

if (grade === "A"){
    console.log('Execelent Result!');
} else if (grade === "B"){
    console.log('Great Result!');
} else if (grade === 'C'){
    console.log('Avarage Result!');
}else {
    console.log('Invalid Grade');
}

// Execerise dulu
//  if getDay = 0 ==>  minggu

// ambil tanggal
let date = new Date('2024-02-14');
// ambil hari
let hari = date.getDay();
console.log(hari);

if (hari == 0){
    console.log('Hari ini adalah hari minggu');
} else if(hari == 1){
    console.log('Hari ini adalah hari Senin');
}else if(hari == 2){
    console.log('Hari ini adalah hari Selasa');
}else if(hari == 3){
    console.log('Hari ini adalah hari Rabu');
}else if(hari == 4){
    console.log('Hari ini adalah hari Kamis');
}else if(hari == 5){
    console.log(`Hari ini adalah hari Jum'at`);
}else if(hari == 6){
    console.log('Hari ini adalah hari Sabtu');
}else{
    console.log('Tidak ada dalam Hari');
}

// Switch Case
switch(hari){
    case 0 :
    console.log('Hari ini adalah hari Minggu');
    break;
    case 1 :
    console.log('Hari ini adalah hari Senin');
    break;
    case 2 :
    console.log('Hari ini adalah hari Selasa');
    break;
    case 3 :
    console.log('Hari ini adalah hari Rabu');
    break;
    case 4 :
    console.log('Hari ini adalah hari Kamis');
    break;
    case 5 :
    console.log('Hari ini adalah hari Jumat');
    break;
    case 6 :
    console.log('Hari ini adalah hari Sabtu');
    break;
    
}


// LOGICAL OPERATOR
// &&   DAN
// ||   ATAU
// !    NEGASI

        /* tabel kebenaran 

        true && true = true             true || true = true         != tidak sama 
        true && false = false           true || false = true
        false && true = false           false || true = true
        false && false = false          false || false = false
        
        */

let car = 'BMW';
let car2 = 'Toyota'

// contoh atau
if (car==='BMW' || car==='Toyota'){
    console.log('This car is awesome');
}

// contoh dan
if(car ==='BMW' && car2==='BMW'){
    console.log('Keren anjay!');
} else {
    console.log('This car just so so!');
}

console.log('\n')

// Ternary Operator
// klo pendek aja ya klo banyak pusing bacanya
const str = "JavaScript";
console.log(!(str==='JavaScript') ? 'Betul ini JavaScript' : 'Not JavaScript'); // contoh negasi



