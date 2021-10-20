let names = ["Lisa", "Kaitlin", "Jan"];
const event = "surprise";
let newArray = []

function writeCards(names, event) {

    for (let i = 0; i < 3; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }

    return newArray;

}

let number = 10;

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}
