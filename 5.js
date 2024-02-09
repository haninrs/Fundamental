// 5. 2024-02-06 berapa hari lagi menuju tahun baru
/*
Pseodocode

MULAI
    // Dapatkan tanggal saat ini
    today = DapatkanTanggalSaatIni()
    
    // Tetapkan tanggal target ke Tahun Baru 2025
    targetDate = BuatTanggal('2025-01-01')

    // Hitung selisih waktu dalam MILIDDETIK antara dua tanggal
    selisihWaktu = targetDate - today

    // Konversi selisih waktu dari milidetik menjadi hari
    hariSisa = BulatkanKeAtas(selisihWaktu / (1000 * 60 * 60 * 24))

    // Tampilkan hasilnya
    Tampilkan("Hari yang tersisa menuju Tahun Baru 2025:", hariSisa, "hari")
AKHIR
*/


// MULAI
     // Dapatkan tanggal saat ini
        const hariIni = new Date();     //2024-02-06

     // Tetapkan tanggal target ke Tahun Baru 2025
        const tahunBaru = new Date('2025-01-01');   //2025-01-01

     // Hitung selisih waktu dalam milidetik antara dua tanggal
        const selisihWaktums = tahunBaru.getTime() - hariIni.getTime();  // hasil milisecond dr time tahun baru - time saat ini
        // getTime = total milisecond dari 1 januari 1970 - tgl terkait(tahunBaru.getTime) == 1735689600000


     // Konversi selisih waktu dari milidetik menjadi hari
//     hariSisa = BulatkanKeAtas(selisihWaktu / (1000 * 60 * 60 * 24))
        const sisaDetik= Math.floor(selisihWaktums / 1000);  // milidecond ke second /1000
        const sisaMenit = Math.floor(sisaDetik / 60);    // Detik ke menit
        const sisaJam = Math.floor(sisaMenit / 60);      // menit ke jam
        const sisaHari = Math.floor(sisaJam / 24);        // jam ke hari
        // diatas cara detail
        // dibawah ini cara jurus 1 baris
        const hariSisa = Math.floor(selisihWaktums / (1000*60*60*24));

      // Tampilkan hasilnya
//     Tampilkan("Hari yang tersisa menuju Tahun Baru 2025:", hariSisa, "hari")
        console.log(`Sisa Hari menuju tahun baru 2025 : ${sisaHari} hari`);
        console.log(`Ini cara gampang mencari sisa hari menuju 2025 yaitu tersisa ${hariSisa} hari`);
// AKHIR 

// console.log(hariIni.getTime());
// console.log(tahunBaru.getTime());
// console.log(selisihWaktums);
// console.log(sisaDetik);


