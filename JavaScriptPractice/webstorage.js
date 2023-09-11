import localStorage from localStorage;
/******** Using localStorage *********/
localStorage.setItem('name', "John Smith");
console.log(localStorage.getItem('name')); // "John Smith"
localStorage.removeItem('name');
console.log(localStorage.getItem('name')); // null


var players = [{ name: "Tyler", score: 22 }, { name: "Ryan", score: 41 }];
localStorage.setItem('players', JSON.stringify(players));
console.log(JSON.parse(localStorage.getItem('players')));
// [ Object { name: "Tyler", score: 22 }, Object { name: "Ryan", score: 41 } ]

/********* sessionStorage **********/
//Save data to sessionStorage
sessionStorage.setItem('key', 'value');
//Get saved data from sessionStorage
var data = sessionStorage.getItem('key');
//Remove saved data from sessionStorage
sessionStorage.removeItem('key')

