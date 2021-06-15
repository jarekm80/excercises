/*
const joinElements = arr => {
    return arr.join() + '\n' + arr.join() + '\n' + arr.join('+');
}
myColor = ["Red", "Green", "White", "Black"];
console.log(joinElements(myColor));
*/

/*

const isEven = value => {
    return value%2 == 0 ? true : false;
} 
let modified = [];
const ifTwoEven = (element,index,array) => {
    if (isEven(array[index]) && isEven(array[index+1])){
        modified.push(array[index] + '-');
    } else {
        modified.push(array[index]);
    }    
}

let num = '025468';
let arr = num.split('');
console.log(arr);
arr.forEach(ifTwoEven);
console.log(modified);
*/
/*
const str = '025468';
const result = [str[0]];  
for(let x=1; x<str.length; x++)
  {
    ((str[x-1]%2 === 0)&&(str[x]%2 === 0)) ? result.push('-', str[x]) : result.push(str[x]);
  }
console.log(result.join(''));
//czemu działają działania na znakach ?

const sortArr = arr => {
    return arr.sort();
}
var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
console.log(sortArr(arr1));
*/

/*
let frequencyObject = {};
const FindTheMostFrequent = (item) => {
    frequencyObject[item] ? frequencyObject[item]++ : frequencyObject[item]=1; 
}
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
arr1.forEach(FindTheMostFrequent);
console.log(frequencyObject);

let sortable = [];

for (let item in frequencyObject){
    sortable.push([item, frequencyObject[item]]);
}
console.log(sortable);
sortable.sort((a,b) => b[1]-a[1]);
console.log(sortable);

let frequencyArray = [];
const FindTheMostFrequentInArray = (item) => {
    frequencyArray[item] ? frequencyObject[item]++ : frequencyObject[item]=1; 
}
//da sie zrobić elegancko frequencyArray bezpośrednio ??
*/
/*
let swapped = '';
const swapCase = letter => {
    let cc = letter.charCodeAt(0)
    if (65 <= cc && cc <= 90) {
        swapped += letter.toLowerCase();
    } else if (97 <= cc && cc <= 122) {
        swapped += letter.toUpperCase();
    } else {
        swapped += letter;
    }
}
let input = 'The Quick Brown Fox';
[...input].forEach(swapCase);
console.log(swapped);
*/

/*
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
a.forEach((arr,index) => {
    console.log("row ",index);
    arr.forEach(elem => console.log(elem));
});
*/
/*
let sum = 0;
const sum_sq = elem => {
    sum += Math.pow(elem,2);
}
[1,2].forEach(sum_sq);
console.log(sum);
*/
/*
let diffrent = [];
const diffrentOut = item => {
    diffrent.indexOf(item)>=0 ? true : diffrent.push(item);
}
[1,1,2,3,2,5,'a','a'].forEach(diffrentOut);
console.log(diffrent);

let min = 1900;
let max = 2020;
let leap = [];
for (let i = min ; i <= max ; i++ ) {
    if ((i % 4 === 0 && i % 100 !== 0) || (i % 400 === 0)) {
        leap.push(i);
    }
}
console.log(leap);  
*/

/*
var items = [1, 2, 3, 4, 5, 7, 8, 9];
let shuffled = [];
while (items.length > 0) {
    let flored = Math.floor(Math.random()*items.length);
    shuffled.push(items[flored]);
    items.splice(flored,1);
}
console.log(shuffled);
*/
/*
let array1 = [1,0,2,3,4];
let array2 = [3,5,6,7,8,13];
let sum = [];
if (array1.length > array2.length)  {
    long = array1,
    short = array2
} else {
    long = array2,
    short = array1
}
long.forEach((e,i) => {
    i<short.length ? sum[i] = short[i] + long[i] : sum[i] = long[i];
});
console.log(sum);
//problem z (array1.length > array2.length) ? {} : {}
*/

/* 
function stringItUp(arr){
    return arr.map(item => {
        return item.toString();
    });
}
console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
*/
/*
function namesOnly(arr){
    return arr.map(item => item.name);
}

function makeStrings(arr){
    return arr.map(item =>{
        if (item.age >= 18)
            return item.name + ' can go to The Matrix';
        else
            return item.name + ' is under age!!';
    })
}

function readyToPutInTheDOM(arr){
    return arr.map(item => "<h1>" + item.name + "</h1>" + "<h2>" + item.age + "</h2>");
  }

namesArray = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];
  console.log(readyToPutInTheDOM(namesArray)); 
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
 */

// Write a function capitalize that takes a string and uses .map to return the same string in all caps. 
// ex. capitalize('whoop') // => 'WHOOP'
// ex. capitalize('oh hey gurl') // => "OH HEY GURL"
var capitalize = function(string){
    return [string].map(char => char.toUpperCase()).join('');
}
//console.log(capitalize('oh hey gurl'));

// Now write a new function called swapCase that takes a string of words and uses .map and your newly written capitalize() 
// function to return a string where every other word is in all caps. 
// Hint: look up Array.prototype.map on MDN and see what arguments the .map callback can take. 
// ex: swapCase('hey gurl, lets javascript together sometime') // => "HEY gurl, LETS javascript TOGETHER sometime"
var swapCase = function(string){
    return string.split(' ').map((word,index) => index % 2 === 0 ? capitalize(word) : word);
}
//console.log(swapCase('hey gurl, lets javascript together sometime'));

// Write a function shiftLetters that takes a string and uses .map to return an encoded string with each letter shifted down the 
// alphabet by one. Hint: Use Look up the JS functions String.fromCharCode() and String.CharCodeAt() and see if you can use
// Ascii code to acomplish this.
// ex. shiftLetters('hello') // => 'ifmmp'
// ex. (shiftLetters('abcxyz') // => "bcdyz{"
var shiftLetters = function(string){
    let temp = [...string].map(char => char.charCodeAt()-1);
    return String.fromCharCode(...temp);
}
console.log(shiftLetters('hello'));

// Write a function that takes a string and returns an object representing the character 
// count for each letter. Use .reduce to build this object. 
// ex. countLetters('abbcccddddeeeee') // => {a:1, b:2, c:3, d:4, e:5}
let initialValue = [];
var countLetters = function(string){
    return [...string].reduce((total, currentValue) => {
        total+=currentValue;
        console.log(total);
    }, initialValue);
};
countLetters('abbcccddddeeeee');