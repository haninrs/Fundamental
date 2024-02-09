//  4. MUTEABLE vs IMMUTEABLE
//  muteable : non primitive
//  immuteable : primitive



// --> Muteable [] & {}
const Person = {
    name : 'Budi',
    age : 23,
}

const newPerson = Person;



console.log(Person);        //BUDI
console.log(newPerson);     // BUDI

newPerson.name = 'Jhony';

console.log(Person);    //JHONY
console.log(newPerson); //JHONY


// --> IMMUTEABLE 
let Name = 'Jojo';
let newName = Name;

newName = 'Andi';

console.log(Name);      // jOJO
console.log(newName);   // ANDI