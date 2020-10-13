const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

// --------------------------
// Opdracht 1: Check hoeveel studenten hun studie cum laude hebben gehaald (8 of hoger) en log dit in de console.
// verwacht antwoord: 6
// --------------------------

// maak een variabele die buiten de scope van de for-loop (anders kan de console.log er niet bij)
// dit is de "teller" die we telkens willen verhogen als de for-loop een 8 of hoger tegenkomt
let cumLaude = 0;

for (let i = 0; i < grades.length; i++) {
  if (grades[i] >= 8) {
    cumLaude = cumLaude + 1;
    // dit mag ook: cumLaude += 1;
    // dit mag ook: cumLaude++;
  }
}

console.log(cumLaude);

// --------------------------
// Opdracht 2: Check welke waarde in de array het hoogste is, en log dit in de console
// verwacht antwoord: 9
// --------------------------

// maak een variabele die buiten de scope van de for-loop (anders kan de console.log er niet bij)
// dit is de "container" waarin we telkens de hoogste waarde in opslaan, tot we een hogere waarde tegenkomen

let highest = 0;

for (let i = 0; i < grades.length; i++) {
  // als de huidige waarde van grades (grades[i]) hoger is dan mijn huidige opgeslagen waarde
  // sla dan dat nieuwe cijfer op als hoogste waarde
  if (grades[i] > highest) {
    highest = grades[i];
  }
}

console.log(highest);


// --------------------------
// Opdracht 3: Tel alle waardes van de array bij elkaar op en bereken het gemiddelde. Log dit in de console.
// verwacht antwoord: 6.642857142857143
// --------------------------

// maak een variabele die buiten de scope van de for-loop (anders kan de console.log er niet bij)
// dit is de "container" waarbij we elke waarde in de array willen optellen.
let average = 0;

for (let i = 0; i < grades.length; i++) {
  // tel telkens de waarde van de entry uit de array bij wat we daarvoor al hebben opgetelt
  average = average + grades[i];
}

console.log(average / grades.length);
// dit mag ook:
// const calculatedAverage = average / grades.length;
// console.log(calculatedAverage);

// UITLEG
// eerste iteratie met i = 0 ---> average = 0 (de huidige waarde van average) + 9;
// tweede iteratie met i = 1 ---> average = 9 (de huidige waarde van average) + 8;
// derde iteratie met i = 2 ---> average = 17 (de huidige waarde van average) + 5;
// vierde iteratie met i = 3 ---> average = 22 (de huidige waarde van average) + 7;
// etc.




