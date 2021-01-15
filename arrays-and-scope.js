
const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
let cumLaude = 0;
let highestGrade = 0;
let totalValue = 0;

// --------------------------
// Opdracht 1: Check hoeveel studenten hun studie cum laude hebben gehaald (8 of hoger) en log dit in de console.
// verwacht antwoord: 6
// --------------------------
for (let i = 0; i < grades.length; i++) {
    if (grades[i] > 7) {
        cumLaude = cumLaude + 1;
    }
}
console.log(cumLaude)

// --------------------------
// Opdracht 2: Check welke waarde in de array het hoogste is, en log dit in de console
// verwacht antwoord: 9
// --------------------------
for (let i = 0; i < grades.length; i++) {
    if (grades[i] > highestGrade) {
        highestGrade = grades[i];
    }
}
console.log(highestGrade)

// --------------------------
// Opdracht 3: Tel alle waardes van de array bij elkaar op en bereken het gemiddelde. Log dit in de console.
// verwacht antwoord: 6.642857142857143
// --------------------------
for (let i = 0; i < grades.length; i++) {
    totalValue = totalValue + grades[i];
}
let totalAverage = totalValue / grades.length;
console.log(totalAverage)





