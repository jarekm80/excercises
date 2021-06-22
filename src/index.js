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

let sortable = [];

for (let item in frequencyObject){
    sortable.push([item, frequencyObject[item]]);
} 
sortable.sort((a,b) => b[1]-a[1]);
console.log(sortable);

let frequencyArray = [];
const FindTheMostFrequentInArray = (item) => {
    frequencyArray[item] ? frequencyObject[item]++ : frequencyObject[item]=1; 
}
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
(array1.length > array2.length) ? (
    long = array1,
    short = array2
) : (
    long = array2,
    short = array1
)
long.forEach((e,i) => {
    i<short.length ? sum[i] = short[i] + long[i] : sum[i] = long[i];
});
//console.log(sum);
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
//console.log(shiftLetters('hello'));

// Write a function that takes a string and returns an object representing the character 
// count for each letter. Use .reduce to build this object. 
// ex. countLetters('abbcccddddeeeee') // => {a:1, b:2, c:3, d:4, e:5}
//let initialValue = [];
var countLetters = function(string){
    return [...string].reduce((total, member) => {
        !(member in total) ? total[member] = 1 : total[member]++;
        return total;
    },{});
};
//console.log(countLetters('abbcccddddeeeee'));
/*
var capitalize2 = function(...strings){
    return strings.map(char => char.toUpperCase());
}
*/
//console.log(capitalize2('oh hey gurl','asfasdf sedfasdf'));

// Write a function that takes a string and a target, and returns true or false if the target is present in the string. Use
// .reduce to acomplish this.
// ex. isPresent('abcd', 'b') // => true
// ex. isPresent('efghi', 'a') // => false
var isPresent = function(string, target) {
    return [...string].reduce((total,char) => {
        if (char === target)  total = true;
        return total;
    },false)
  }

// PARTY WITH MAP AND REDUCE *AT THE SAME TIME*
// Write a function decode that will take a string of number sets and decode it using the following rules:
// When each digit of each set of numbers is added together, the resulting sum is the ascii code for a single letter.
// Convert each set of numbers into a letter and discover the secret message! 
// Try using map and reduce together to accomplish this task.
// ex. decode("361581732726247521644353 4161492813593986955 84654117917337166147521") // => "abc"
// ex. decode("584131398786538461382741 444521974525439455955 71415168525426614834414214 353238892594759181769 48955328774167683152 77672648114592331981342373 5136831421236 83269359618185726749 2554892676446686256 959958531366848121621517 4275965243664397923577 616142753591841179359 121266483532393851149467 17949678591875681")
// => "secret-message"
const decode = string => String.fromCharCode(...string.split(' ').map(chain => [...chain].reduce((sum,char) => sum + parseInt(char), 0)));
  
  a = "444689936146563731 2452966188592191874 52634311978613959924676311 4874232339 491973615889195397613151 64491375479568464397 2799868298847212752434 9464245911 84529438455334236247245 8131257451645317232949247 26471594451453281675411332 6631592725297745964837 616698332453173937881461 3311783543427862468268 385418321228899775431 4659867 73395213225525916984356 833792195426925124155181841 123388893 6941777837193213644325351 11353488912476869536954 61173937137292328237388335 5344692 452956158 31937616696951768494 584842118999165552436 8832121577139589884 15282516522883423742885 14713349724 6919979438697694 2252585676244745856486 5617683424485959291 547443594 2678324174797795449925 43753791352187862731151912 6875665565836721939262 35482977 84421878934473534291995 798457553821668942312 11114498238219156246883553 3599955 8831995953696776 8138759916933117676486 2388776737768787 37232647683297835458183 11318659392964788174775 683293746169875551252354 741545327395636643318531 38447974824822841161273 88768222547689886222 6345677462396774359 4942661761 1354569165 2553653936124138282 851786784517417366411515 42279319649497959785 5523951771 45941761289678527316294 37776454913244819275691 436669892715419465494342 682264111527 734681268219555989841131 882641896825571288724 382545666 12133138432672285179566156291 83644842221351483476411355532 9589336353993598224 184537669759184472427331 41851326945453796784 525783591 173773335961894524914465 47516715963756294236321 7296569497726217615 79487235 4931878519724923131437 31214731844284735237658435 1378458823933518466122 1241955123792435126557994 347427652476673662454 55596877477154112241923 9789414554758712319821 86228624276917113671233411 89659521 1352796469161477381192 69483824148396716861472 4766533634762298963245 5155973593459278561 1784478259974148659431 29583142566714785218623 244371427148584159487652 871836193187759591363 247956";
  console.log(decode(a));

let encode = function(string){
    return [...string].map(char => {
        let numFromChar = char.charCodeAt(0);
        let sumNumStr = '';
        while (numFromChar>=10) {
            let digit = Math.floor(Math.random()*9 + 1);
            numFromChar-=digit;
            sumNumStr += digit.toString();
        }
        sumNumStr += numFromChar.toString();
        return sumNumStr;
    }).join(' ')
 

}
//console.log(encode('ab'))
b = 'Yay-you-figured-it-out!-nice-job-you-win-everything.-Now-try-to-write-the-encoding-function!';

console.log(decode(encode(b)));