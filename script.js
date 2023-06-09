'use strict';

const bookings = [];

const createBooking = function (flightNumberPassengers = 1, price = 199) {

    const booking = {
        flightNumberPassengers, price,
    };
    console.log(booking);
    bookings.push(booking);
}

createBooking('TZ123');
createBooking('TZ123', 2, 300);


const flight = 'TZ123';
const tasha = {
    name: 'Tasha Zitting',
    passport: 920394802, 
};

const checkIn = function (flightNum, passenger){
    flightNum = 'CS123';
    passenger.name = 'Miss. ' + passenger.name;

    if (passenger.passport === 920394802) {
        alert('Checked in :)')
    } else {
        alert('Wrong passport');
    }
};

checkIn(flight, tasha);
console.log(flight);
console.log(tasha);

const newPassport = function(person) {
    person.passport = Math.trunc(random() * 1000000000);
}

newPassport(tasha);
checkIn(flight, tasha);



const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);



const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet('Hey');
greeterHey('Tasha');
greeterHey('Clay');

greet('Hellloo')('Tasha');



const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'TZ',
    bookings: [],
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({flight : `${this.iataCode}${flightNum}`, name });
    },
};

lufthansa.book(239, 'Tasha Zitting');
lufthansa.nook(635, 'Clay Smith');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

//book(23, 'sara williams');

book.call(eurowings, 23, 'sara williams');
console.log(eurowings);

book.call(lufthansa, 239, 'mary cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
}

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

book.call(swiss, ...flightData);

//bind method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'serena williams')

const bookEW23 = book.bind(eurowings, 23);
bookEW23('clay smith');

// IIFE - will only run once
(function () {
    console.log('this will only run once');
})();

(() => console.log('this will also only run once'))();

//closers

const secureBooking = function() {
    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();

booker();
booker();


let f;

const g = function() {
    const a = 23;
    f = function () {
        console.log(a*2)
    };
};

const h = function() {
    const b = 777;
    f = function() {
        console.log(b*2);
    };
};

g();
f();
console.dir(f);

//re-assigning F function

h();
f();
console.dir(f);



//challenges



// Coding Challenge #1

/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this and the last section 😉
BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀
*/
/*

const poll = {
    question: 'what is your favorite programming language?',
    options: ['0: Javascript', '1: Python', '2: rust', '3:C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const answer = Number(
            prompt(
                `${this.question}\n${this.options.join('\n')}\n(write option number)`
            )
        );
        console.log(answer);

        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

        this.displayResults();
        this.displayResults('string');
    },
    displayResults(type = 'array') {
        if(type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            console.log(`poll results are ${this.answers.join(', ')}`);
        }
    }
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

*/


// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓
Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!
And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.
GOOD LUCK 😀
*/

/*
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click', function () {
      header.style.color = 'blue';
    });
  })();

  */
