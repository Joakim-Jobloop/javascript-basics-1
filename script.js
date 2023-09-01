console.log("Hello world!");

let x = 10;
let y = 9;

console.log(x + y);

x = x * 2; // x er 20
y = y * 2;

console.log(x);

x = 40; // x er 40

console.log(x);

if (x === 40) {
  console.log("x er 40");
} else if (x < 40) {
  console.log("x er mindre enn 40");
} else if (x > 40) {
  console.log("x er større enn 40");
} else {
  console.log("x er ikke et tall");
}

///////////////////////////////////////

let tall = 1;

if (tall === 1) {
  console.log("tallet er 1");
} else {
  console.log("tallet er ikke 1");
}

tall === 1 ? console.log("tallet er 1") : console.log("tallet er ikke 1");

///////////////////////

let ord = "Hello";
let ord2 = "World!";
let setning = "Setningen er: " + ord + " " + ord2;
console.log(setning);
let tempLiSetning = `Setningen er: ${ord} ${ord2}`;

console.log(tempLiSetning);

//////////////////////

let bilettPris;
let age = 16;

if (age >= 16) {
  bilettPris = 100;
} else {
  bilettPris = 90;
}

console.log(`bilettprisen for personen er: ${bilettPris} `)

////////////////////////

let randomNumber = (Math.random() * 5) + 1
let roundedNumber = Math.round(randomNumber)

if (roundedNumber > 3) {
console.log("Nice terningskast! " + roundedNumber)
} else {
    console.log("Omg for en dritterning! " +  roundedNumber)
}

////////////////////////

function enFunction() {
    let variabel = 1;
    return console.log(variabel)
}

//kjøre funksjonen:
enFunction()

//////////////////

function addTwoNumbers(a, b) {
    return a+b
}
console.log(addTwoNumbers(1,321))

let a = 1
let b = 321

let sum = a + b

console.log(sum)

////////////////////////////

function getRandomNumber(maxNumber) {
    return console.log(Math.round(Math.random() * maxNumber + 1))
}

getRandomNumber(1000)

/////////////////////////////////

function giveInsult() {
    const insultsArray = [
        "Du er en dritt",
        "Faen se på deg a!",
        "Tryne ditt!",
        "Kan du bare drite 24 øl?",
        "Morra di!",
    ]

    const randomNumber = Math.floor((Math.random() * insultsArray.length))
    const insult = insultsArray[randomNumber]
    return insult
}

console.log(giveInsult())






