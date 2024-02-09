// 1. Find Area Of Rectangle
/* 
Pseudocode
1. Find out how to count area of rectangle
2. length * width = area rectangle (formula)
3. code
4. define variable and assign value to variable
    const rectangleLength = 10
    const rectangleWidth = 5
5. define variable to keep the result and implement the formula area of rectangle
    const rectangleArea = rectangleLength * rectangleWidth

*/

const length = 5;
const width = 3;

// 1. Area
const areaR = length * width;
console.log(`Area of Rectangle is = ${areaR}`);

//2. Perimeter
const perimeterR = length*2 + width*2;
console.log(`Perimeter of Rectangle is = ${perimeterR}`);



// 3. Find Diameter, circumference, area of circle
//  radius = 5

// FORMULA
// Dimeter = 2r
// circumference = 2.pi.r
// area = pi.r**

const rC = 5;

//  diameter
const dC = 2*rC;

// circumference = 2.pi.r
// pi
const pi = Math.PI;
// formula
const cfC = 2*pi*rC;


// area = pi.r**
const areaC = pi * rC**2;

// cetak no 3
console.log(`Diamter of Cirle is = ${dC}
Circumference of Circle is = ${cfC.toFixed(4)}
Area of Circle is = ${areaC.toFixed(4)}`);

//  4.to find angles of triangle if two angles are given
const sudutA = 80;
const sudutB = 65;
const sudutC = 180 - sudutA - sudutB;
console.log(`Sudut segitiga adalah = ${sudutC}`);

// 5. 2024-02-06 berapa hari lagi menuju tahun baru


//  JAWABAN CHATGPT
//  VERSI MILISECOND

/* Psedocode
MULAI
    // Dapatkan tanggal saat ini
    today = DapatkanTanggalSaatIni()

    // Tetapkan tanggal target ke Tahun Baru 2025
    targetDate = BuatTanggal('2025-01-01')

    // Hitung selisih waktu dalam milidetik antara dua tanggal
    selisihWaktu = targetDate - today

    // Konversi selisih waktu dari milidetik menjadi hari
    hariSisa = BulatkanKeAtas(selisihWaktu / (1000 * 60 * 60 * 24))

    // Tampilkan hasilnya
    Tampilkan("Hari yang tersisa menuju Tahun Baru 2025:", hariSisa, "hari")
AKHIR
*/


// Get the current date
const today = new Date();

// Set the target date to New Year's Day 2025
const targetDate = new Date('2025-01-01');

// Calculate the difference in milliseconds between the two dates
const timeDifference = targetDate.getTime() - today.getTime();

// Convert the time difference from milliseconds to days
const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

// Output the result
console.log(`Days remaining until New Year's Day 2025: ${daysRemaining} days`);
// console.log(targetDate.getTime());
// console.log(today);



// VERSI DETIK

/* PSUDOCODENYA
1. Dapatkan tanggal saat ini.
2. Tetapkan tanggal target ke Tahun Baru 2025.
3. Hitung selisih waktu dalam milidetik antara tanggal saat ini dan tanggal target.
4. Konversi selisih waktu dari milidetik menjadi hari.
5. Tampilkan hasilnya
 */
// Mendapatkan tanggal hari ini
var today1 = new Date();

// Mendapatkan tanggal tahun baru 2025
var newYear = new Date('2025-01-01');

// Menghitung selisih waktu dalam detik
var timeDiffInSeconds = Math.floor((newYear - today1) / 1000);

// Menghitung jumlah hari dari selisih waktu dalam detik
var daysDiff = Math.floor(timeDiffInSeconds / (60 * 60 * 24));

console.log("Hari yang tersisa menuju Tahun Baru 2025: " + daysDiff + " hari.");




// no 6 jawaban gpt
const days = 900;

const millisecondsInDay = 1000 * 60 * 60 * 24;
const millisecondsInYear = millisecondsInDay * 365;
const millisecondsInMonth = millisecondsInDay * 30;

// Hitung jumlah tahun
const years = Math.floor(days / 365);

// Hitung sisa hari setelah dihitung dalam tahun
const remainingDaysAfterYears = days % 365;

// Hitung jumlah bulan
const months = Math.floor(remainingDaysAfterYears / 30);

// Hitung sisa hari setelah dihitung dalam bulan
const remainingDays = remainingDaysAfterYears % 30;

const result = `${years} year${years !== 1 ? 's' : ''}, ${months} month${months !== 1 ? 's' : ''}, ${remainingDays} day${remainingDays !== 1 ? 's' : ''}`;

console.log(result); // Output: 1 year, 1 month, 5 days



// 6.2 CARA PAKE FUNCTION
function convertDays(days) {
    const millisecondsInDay = 1000 * 60 * 60 * 24;
    const millisecondsInYear = millisecondsInDay * 365;
    const millisecondsInMonth = millisecondsInDay * 30;

    // Hitung jumlah tahun
    const years = Math.floor(days / 365);

    // Hitung sisa hari setelah dihitung dalam tahun
    const remainingDaysAfterYears = days % 365;

    // Hitung jumlah bulan
    const months = Math.floor(remainingDaysAfterYears / 30);

    // Hitung sisa hari setelah dihitung dalam bulan
    const remainingDays = remainingDaysAfterYears % 30;

    return `${years} year${years !== 1 ? 's' : ''}, ${months} month${months !== 1 ? 's' : ''}, ${remainingDays} day${remainingDays !== 1 ? 's' : ''}`;
}

// Contoh penggunaan:
console.log(convertDays(400)); // Output: 1 year, 1 month, 5 days
console.log(convertDays(366)); // Output: 1 year, 0 months, 1 day


// fibonacci

function fibonacci(n) {
    let a = 1;
    let b = 1;
    let fib = [a, b];

    for (let i = 2; i < n; i++) {
        let nextFib = a + b;
        fib.push(nextFib);
        a = b;
        b = nextFib;
    }

    return fib;
}

// Contoh penggunaan:
const n = 15; // Jumlah angka Fibonacci yang ingin dibuat
const fibSequence = fibonacci(n);
console.log("Deret Fibonacci pertama", n, "adalah:", fibSequence);

