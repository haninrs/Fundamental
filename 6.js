// Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
// ○ Example : 400 days → 1 year, 1 month, 5 days
// ○ Example: 366 days → 1 year, 0 month, 1 day

/**
 PSEUDOCODE
0. const days = 400
 1. convert all to milisecond
 2. Hitung jumlah tahun nya (400 / 365)
 3. Hitung SISA hari setelah dihitung dalam tahun
 4. Hitung Jumlah Bulan (400/30)
 5. Hitung SISA hari setelah dihitung dlm bulan
 6. total result $tahun, $bulan, $hari
 7.console.log(result)

 */

// 0. const days = 400
const days = 200 ; 

// 1. convert all to milisecond

    // // 1 hari berapa milisecond
    // const ms1Hari = 1000 *60*60*24 ;  //86.400.000 milisecond/hari
    // // 1 bulan berapa milisecond
    // const ms1Bulan = ms1Hari * 30;    //2.592.000.000/bulan
    // // 1 tahun berapa milisecond
    // const ms1Tahun = ms1Hari * 12;   //31.536.000.000/tahun

// 2. Hitung jumlah tahun nya (400 / 365)
    const tahun = Math.floor(days / 365);   // 1,blbala | floor => 1 | kan 1tahun,35hari ya

// 3. Hitung SISA hari setelah dihitung dalam tahun (400 % 365)
    const sisaHsetelahTahun = days - (tahun*365);  // 400-365 = 35day

// 4. Hitung Jumlah Bulan dr sisa tahun(35/30)
    const bulan = Math.floor(sisaHsetelahTahun / 30);  //35/30 => 1 bulan

// 5. Hitung SISA hari setelah dihitung dlm bulan (35 % 30)
    const sisaHari= sisaHsetelahTahun % 30;  // 5 hari

// 6. total result $tahun, $bulan, $hari
    const hasil = `${tahun} tahun${tahun >1 ? 's' : ''}, ${bulan} bulan${bulan > 1 ? 's' : ''}, ${sisaHari} day${sisaHari > 1 ? 's' : ''}}`
// 7.console.log(result)
    console.log(hasil);
    

console.log(tahun);
console.log(sisaHsetelahTahun);
console.log(bulan);
console.log();