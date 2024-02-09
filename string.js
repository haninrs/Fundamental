// String Method

let word = 'Purwadhika';
console.log(word);

//.toUpperCase
console.log(word.toUpperCase());    //PURWADHIKA

//.toLowerCase
let wordKecil = word.toLowerCase();
console.log(wordKecil);             //purwadhika

// concat == gabungin 2 kata 
let wordConcat = word.concat(wordKecil);
console.log(wordConcat);            //Purwadhikapurwadhika


let nama = 'David';
let massage = 'hallo '.concat(nama);
console.log(massage);


// `backtick`
let massage2 = `'Hallo 
${nama}'`;
console.log(massage2);
// ctrl enter buat lgsg enter ke bawah