
/********** Ternary operators **********/
var animal = 'kitty';
var result = (animal === 'kitty') ? 'cute' : 'still nice';
console.log(result);

var animal = 'kitty';
//return (animal === 'kitty') ? 'meow' : 'woof';

/********** Switch statement **********/
var animal = 'Lion';
switch (animal) {
    case 'Dog':
        console.log('I will not run since animal !== "Dog"');
        break;
    case 'Cat':
        console.log('I will not run since animal !== "Cat"');
        break;
    default:
        console.log('I will run since animal does not match any other case');
}

/********** If / Else If / Else Control **********/
let i = 0;
if (i < 1) {
    console.log("i is smaller than 1");
} else {
    console.log("i was not smaller than 1");
}
//Ex2
if (i < 1) {
    console.log("i is smaller than 1");
} else if (i < 2) {
    console.log("i is smaller than 2");
} else {
    console.log("none of the previous conditions was true");

}

/**********  Strategy **********/
const AnimalSays = {
    dog() {
        return 'woof';
    },
    cat() {
        return 'meow';
    }, lion() {
        return 'roar';
    },
    // ... other animals
    default() {
        return 'moo';
    }
};
function makeAnimalSpeak(animal) {
    // Match the animal by type
    const speak = AnimalSays[animal] || AnimalSays.default;
    console.log(animal + ' says ' + speak());
}

makeAnimalSpeak('dog') // => 'dog says woof'
makeAnimalSpeak('cat') // => 'cat says meow'
makeAnimalSpeak('lion') // => 'lion says roar'
makeAnimalSpeak('snake') // => 'snake says moo'

//Using || and && 
var x = 10
x == 10 && alert("x is 10")
x == 10 || alert("x is not 10")
