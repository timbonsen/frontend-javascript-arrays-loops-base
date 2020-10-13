// --------------------------
// Opdracht 1
// --------------------------
// Verander de waardes van de array dusdanig dat er -"je" achter iedere naam wordt geplakt
// Wanneer je de volledige array logt, zie je alle nieuwe waardes
// console.log(names) geeft: ["Henkje", "Pietje", "Fredje", "Joopje"]

let names = ["Henk", "Piet", "Fred", "Joop"];

for (let i = 0; i < names.length; i++) {
  names[i] = names[i] + 'je';
}

console.log(names);

// UITLEG
// eerste iteratie met i = 0 ---> names[0] = names[0] + "je";
// tweede iteratie met i = 1 ---> names[1] = names[1] + "je";
// derde iteratie met i = 2 ---> names[2] = names[2] + "je";
// vierde iteratie met i = 3 ---> names[3] = names[3] + "je";



// --------------------------
// Opdracht 2
// --------------------------
// Verander de waardes van de array dusdanig dat iedere waarde met 3 vermenigvuldigd wordt
// Wanneer je de volledige array logt zie je alle nieuwe waardes
// console.log(numbers) geeft: [ 6, 12, 15, 87, 114 ];

const numbers = [2, 4, 5, 29, 38];

for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] * 3;

  // als je alleen de uitkomst logt (zoals hieronder) zou je de array niet veranderen:
  // console.log(numbers[i] * 3);
}

console.log(numbers);

// UITLEG
// eerste iteratie met i = 0 ---> numbers[0] = numbers[0] * 3;
// tweede iteratie met i = 1 ---> numbers[1] = numbers[1] * 3;
// derde iteratie met i = 2 ---> numbers[2] = numbers[2] * 3;
// vierde iteratie met i = 3 ---> numbers[3] = numbers[3] * 3;
// vijfde iteratie met i = 4 ---> numbers[4] = numbers[4] * 3;



// --------------------------
// Opdracht 3
// --------------------------

// Verander de waardes van de array dusdanig dat er 3 bij iedere waarde wordt opgetelt
// Wanneer je de volledige array logt zie je alle nieuwe waardes
// console.log(figures) geeft: [ 7, 9, 15, 37, 4 ]

const figures = [4, 6, 12, 34, 1];

for (let i = 0; i < figures.length; i++) {
  figures[i] = figures[i] + 3;
}

console.log(figures);

// UITLEG
// eerste iteratie met i = 0 ---> figures[0] = figures[0] + 3;
// tweede iteratie met i = 1 ---> figures[1] = figures[1] + 3;
// derde iteratie met i = 2 ---> figures[2] = figures[2] + 3;
// vierde iteratie met i = 3 ---> figures[3] = figures[3] + 3;
// vijfde iteratie met i = 4 ---> figures[4] = figures[4] + 3;