// =========================================
// Storing Values with the Assignment Operator
// =========================================

var a;
var b = 2;

console.log(a);

a = 7;
b = a;

console.log(a);

// =========================================
// Initialized Variables
// =========================================

var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + "String!";

console.log(a);
console.log(b);
console.log(c);

// =========================================
// Declaration
// =========================================

var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = "9000";

console.log(studlyCapVar);
console.log(properCamelCase);
console.log(titleCaseOver);

// =========================================
// Sum
// =========================================

var sum = 10 + 6;
console.log(sum);

// =========================================
// Difference
// =========================================

var difference = 36 - 20;
console.log(difference);

// =========================================
// Multiplication
// =========================================

var product = 8 * 2;
console.log(product);

// =========================================
// Division
// =========================================

var quotient = 32 / 2;
console.log(quotient);

// =========================================
// Incrementing Numbers
// =========================================

var myVar = 15;
myVar++;

console.log(myVar);

// =========================================
// Decrementing Numbers
// =========================================

myVar = 17;
myVar--;

console.log(myVar);

// =========================================
// Decimal Numbers
// =========================================

var ourDecimal = 16.16;
var myDecimal = 16.1616;

console.log(ourDecimal);
console.log(myDecimal);

// =========================================
// Math with Decimal Numbers
// =========================================

// Sum

sum = 10.5 + 5.5;
console.log(sum);

// Difference

difference = 20.5 - 3.5;
console.log(difference);

// Multiplication

product = 7.5 * 2;
console.log(product);

// Division

quotient = 33.5 / 2;
console.log(quotient);

// =========================================
// Finding a Remainder
// =========================================

var remainder;

remainder = 11 % 3;

console.log(remainder);

// =========================================
// Augmented Addition
// =========================================

a = 3;
b = 17;
c = 12;

a += 12;
b += 9;
c += 7;

console.log(a);
console.log(b);
console.log(c);

// =========================================
// Augmented Subtraction
// =========================================

a = 3;
b = 17;
c = 12;

a -= 12;
b -= 9;
c -= 7;

console.log(a);
console.log(b);
console.log(c);

// =========================================
// Augmented Multiplication
// =========================================

a = 3;
b = 17;
c = 12;

a *= 12;
b *= 9;
c *= 7;

console.log(a);
console.log(b);
console.log(c);

// =========================================
// Augmented Division
// =========================================

a = 3;
b = 17;
c = 12;

a /= 12;
b /= 9;
c /= 7;

console.log(a);
console.log(b);
console.log(c);

// =========================================
// Declare String Variables
// =========================================

var firstName = "Shahzaib";
var lastName = "Hassan";

console.log(firstName, lastName);

// =========================================
// Escaping Literal Quotes
// =========================================

var myString = "My name is \"Shahzaib\" \"Hassan\"";

console.log(myString);

// =========================================
// Using Single Quotes
// =========================================

myString = 'My name is "Shahzaib" "Hassan"';

console.log(myString);

// =========================================
// Using Single Quotes
// =========================================

var myString = '<a href="http://www.example.com" target="_blank">Link</a>';

console.log(myString);

// =========================================
// Quoting Strings with Single Quotes
// =========================================      

var myString = "I am a \"double quoted\" string inside \"double quotes\".";

console.log(myString);

// =========================================
// Quoting Strings with Single Quotes
// =========================================                                

var myString = '<a href="http://www.example.com" target="_blank">Link</a>';

console.log(myString);

// =========================================
// Escape Sequences in Strings
// =========================================

var myString = "FirstLine\n\t\\SecondLine\nThirdLine";

console.log(myString);

// =========================================
// Concatenating Strings with Plus Operator
// =========================================

var ourStr = "I come first. " + "I come second.";

console.log(ourStr);

// =========================================
// Concatenating Strings with the Plus Equals Operator
// =========================================

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

console.log(myStr);

// =========================================
// Constructing Strings with Variables
// =========================================

var ourName = "freeCodeCamp";
var ourStr = " Hello, Our name is " + ourName + ", how are you";
console.log(ourStr);

var myName = "Shahzaib";
var myStr = " My name is " + myName + ", how are you";
console.log(myStr);

// =========================================
// Appending Variable to Strings
// =========================================

var firstVariable = "Shahzaib";
var secondVariable = "Hassan";
firstVariable += secondVariable;
console.log(firstVariable);

// =========================================
// Find length of the Strings
// =========================================

var lastNameLength = 0;
var lastName = 'Shahzaib'
lastNameLength = lastName.length;
console.log(lastNameLength);

// =========================================
// Bracket Notation to find first character in the Strings
// =========================================

var firstLetterOfFirstName = "";
firstName = "Shahzaib";

 firstLetterOfFirstName = firstName[0];
 console.log(firstLetterOfFirstName);

 // =========================================
// String Immutability (Update)
// =========================================

var myStr = "Rhahzaib Hassan";
myStr = "Shahzaib Hassan";
console.log(myStr);

 // =========================================
// Bracket Notation to find Nth character in String
// =========================================

var firstName="Shahzaib";
var fifthLetterOfFirstName = firstName[4];
console.log(fifthLetterOfFirstName)

 // =========================================
// Bracket Notation to find Last character in String
// =========================================

var firstName="Shahzaib";
var lastLetterOfFirstName = firstName[firstName.length-1];
console.log(lastLetterOfFirstName)

 // =========================================
// Bracket Notation to find Nth to Last character in String
// =========================================

var firstName="Shahzaib";
var lastLetterOfFirstName = firstName[firstName.length-5];
console.log(lastLetterOfFirstName)

 // =========================================
// Word Blanks
// =========================================

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){

    var result = "";
    result += "The " + myAdjective+" " + myNoun+ " " + myVerb + " to the store " + myAdverb;

    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly" ));
console.log(wordBlanks("cat", "small", "jumps", "quickly" ));


// =========================================
// Store Multiple Values with Arrays
// =========================================

var ourArray = ["Shahzaib", 16, 16.16];
console.log(ourArray);

// =========================================
// Nested Arrays
// =========================================

var ourArray = [["Shahzaib", 16, 16.16], ["Shahzaib", 16, 16.16]]; 
console.log(ourArray);

// =========================================
// Access Array Data with Indexes
// =========================================

var ourArray = [50,60,70];
var ourData = ourArray[1];
console.log(ourData);


// =========================================
// Modify Array Data with Indexes
// =========================================

 var ourArray = [18,64,99];
 ourArray[1]= 45;
 console.log(ourArray);

// =========================================
// Access Multi-Dimentional Arrays with Indexes
// =========================================

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13,14]];
var myData = myArray[2][1];
console.log(myData);

// =========================================
// Manipulate Arrays with push ()
// =========================================

var ourArray = ["Shahzaib", " Hassan", "Dev"];
ourArray.push(["js", "Learning"]);
console.log(ourArray); 

// =========================================
// Manipulate Arrays with pop ()
// =========================================

var ourArray = [1,2,3];
var removedFromArray = ourArray.pop()
console.log(removedFromArray);

// =========================================
// Manipulate Arrays with Shift ()
// =========================================

var ourArray = [1,2,3];
var removedFromArray = ourArray.shift();
console.log(removedFromArray);

// =========================================
// Manipulate Arrays with unShift ()
// =========================================

var ourArray = [1,2,3];
ourArray.shift();
ourArray.unshift(16);
console.log(ourArray);

// =========================================
// Nested Array (Shopping List)
// =========================================

var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];

// =========================================
// Write Reusable Code with Functions
// =========================================

function ourReusableFunction(){
    console.log("Shahzaib Hassan");
}

ourReusableFunction();

// =========================================
// Passing Values to Functions with Arguments
// =========================================

function ourFunctionWithArgs(a, b){
    console.log(a - b);
}

ourFunctionWithArgs(19, 3);

// =========================================
// Global Scope and Functions
// =========================================

var myGlobal = 10;


function fun1(){
     oopsGlobal = 5;
}

function fun2(){

    var output = "";
    if(typeof myGlobal != "undefined")
    {
        output += "myGlobal: " + myGlobal;
    }

    if(typeof oopsGlobal != "undefined")
    {
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output)
}

fun1();
fun2();

// =========================================
// Local Scope and Functions
// =========================================

function myLocalScope(){
    var myVar = 5;
    console.log(myVar);
}

myLocalScope();

// =========================================
// Global vs Local Scope in Functions
// =========================================

var outerWear = "T-Shirt";
function myOutfit(){
    var outerWear = "sweater";
    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);


// =========================================
// Return a value from a Function with Return
// =========================================

function minusSeven(num)
{
    return num -7;
}
console.log(minusSeven(10));

function timesFive(num){
    return num*5;
}
console.log(timesFive(4));

// =========================================
// Understanding Undefined Value Returned from a Function
// =========================================

var sum=0;
function addThree(){
    sum = sum+3;
}
function addFive(){
    sum +=5;
}
addFive();
addThree();

// =========================================
//Assignment with a Returned Value
// =========================================

var changed = 0;

function change(num) {
    return (num + 5) / 3;
}
changed = change(10);

var processed =0;

function processArg(num){
    return (num + 3)/5;
}

processed = processArg(7);

// =========================================
//Stand in Line
// =========================================

function nextInLine (arr, item){
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// =========================================
//Boolean Values
// =========================================
 
function welcomeToBooleans(){
    return true;
}

// =========================================
//Conditional Logic with If Statements
// =========================================

function ourTrueOrFalse(isItTrue){
   if(isItTrue){
    return "Yes, It is true";
   }
   return "No, It is false";
}
console.log(ourTrueOrFalse(true));
console.log(ourTrueOrFalse(false));

// =========================================
//Comparison with the Equality Operator
// =========================================

function testEqual(val){
    if(val==12){
        return "Equal"
    }
    return "Not Equal";
}

console.log(testEqual(10));

// =========================================
//Comparison with the Strict Equality Operator
// =========================================

function testEqual(val){
    if(val===7){
        return "Equal"
    }
    return "Not Equal";
}

console.log(testEqual(7));

// =========================================
//Practice Comparing Different Values
// =========================================

function compareEquality(a, b){
    if(a === b){
        return "Equal"
    }
    return "Not Equal";
}

console.log(compareEquality(10, "10"));
console.log(compareEquality(10, 10));

// =========================================
//Comparing with the Inequality Operator
// =========================================

function testEqual(val){
    if(val !=99){
        return "Not  Equal"
    }
    return "Equal";
}

console.log(testEqual(7));

// =========================================
//Comparing with the strict Inequality Operator
// =========================================

 function testEqual(val){
    if(val !==99){
        return "Not  Equal"
    }
    return "Equal";
}

console.log(testEqual(7));

// =========================================
//Comparing with the Logical AND operator
// =========================================

function testGreaterThan(val){
    if(val>100) {
        return "Over 100";
    }

    if(val>10){
        return "over 10";
    }

    return "10 or Under";
}

console.log(testGreaterThan(99));

// =========================================
//Comparing with the Greater Than Or Equal To Operator
// =========================================

function testGreaterThan(val){
    if(val>=100) {
        return "100 or Over";
    }

    if(val>=10){
        return "10 or over";
    }

    return "Less than 10";
}

console.log(testGreaterThan(100));

// =========================================
//Comparing with the Less than Operator
// =========================================

function testLessThan(val){
    if(val<100) {
        return "Over 100";
    }

    if(val<10){
        return "over 10";
    }

    return "10 or Under";
}

console.log(testLessThan(99));

// =========================================
//Comparing with the Less than or Equal to Operator
// =========================================

function testLessOrEqual(val){
    if(val<=12) {
        return "Smaller Than or Equal to 12";
    }

    if(val<=24){
        return "Smaller Than or Equal to 24";
    }

    return " More than 24";
}

console.log(testLessOrEqual(10));


// =========================================
//Comparing with the Logical AND operator
// =========================================

function testLogicalAnd(val){
    if(val<=50 && val>=25){
        return "yes"
    }
    return "No";
}
console.log(testLogicalAnd(12));

// =========================================
//Comparing with the Logical OR operator
// =========================================

function testLogicalOr(val){
    if(val<50 || val>25){
        return "Outside"
    }
    return "Inside";
}
console.log(testLogicalOr(28));

// =========================================
//Else Statement
// =========================================

function testElse(val){
    var result = "";

    if(val>5){
        result = "Bigger than 5";
    }

    else{
        result = "5 or smaller";
    }
    return result;
}
console.log(testElse(6));

// =========================================
//Else If Statement
// =========================================

function testElseIf(val){

    if(val>10){
        return "Bigger than 5";
    }

    else if(val<5){
        return "Smaller than 5";
    } 

    else {
    return "Between 5 and 10";
    }
    
    
}
console.log(testElseIf(6));

// =========================================
//Logical Order in If Else Statements
// =========================================

function orderMyLogical(val){

    if(val<5){
         return "Smaller than 5";
    }

    else if(val<10){
        return "Less than 10 ";
    } 

    else {
    return "Greatet than or equal to 10";
    }
    
    
}
console.log(orderMyLogical(15));

// =========================================
//Changing If Else Statements
// =========================================

function testSize(num){
   
    if(num<5){
        return "Tiny"
    }
   
    else if(num<10){
        return "Small"
    }
   
    else if(num<15){
        return "Medium"
    }
   
    else if(num<20){
        return "Large"
    }
   
    else{
        return "Huge";
    }

}
console.log(testSize(4));
console.log(testSize(9));
console.log(testSize(14));
console.log(testSize(19));
console.log(testSize(25));

// =========================================
//Golf Code
// =========================================

var names = ["Hole-in-one!", "Eagle", "Bridie", "Par", "Bogey", "Double Bogey"]

function golfScore(par, strokes){
    if(strokes ==1){
        return names[0]
    }
    else if(strokes <= par - 2){
        return names[1]
    }
    else if(strokes == par -1){
        return names[2]
    }
    if(strokes == par){
        return names[3]
    }
    if(strokes == par +1){
        return names[4]
    }
    if(strokes == par + 2){
        return names[5]
    }
}

console.log(golfScore(5,4));
console.log(golfScore(5,2));
console.log(golfScore(5,1));
console.log(golfScore(5,0));

// =========================================
//Switch Statements
// =========================================

function caseInSwitch(val){
    var answer = "";
    switch(val){
      case 1:
        answer ="alpha";
        break;

       case 2:
        answer = "beta";
        break;
       
       case 3:
        answer = "gamma";
        break; 

       case 3:
        answer = "delta";
        break; 
    }
    return answer;
}
console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));

// =========================================
//Defult Option Switch Statements
// =========================================

function switchOfStuff(val){
    var answer = "";
    switch(val){
      case "a":
        answer ="alpha";
        break;

       case "b":
        answer = "beta";
        break;
       
       case "c":
        answer = "gamma";
        break; 

       case "d":
        answer = "delta";
        break; 

        default:
            answer = "stuff";
            break;
    }
    return answer;
}
console.log(switchOfStuff("a"));
console.log(switchOfStuff("b"));
console.log(switchOfStuff("c"));
console.log(switchOfStuff("d"));
console.log(switchOfStuff(1));

// =========================================
//Multiple Identical Options in Switch Statements
// =========================================

function sequentialSizes(val){
    var answer = "";
    switch(val){

        case 1:
        case 2:
        case 3:
         answer = "low";
         break;

        case 4:
        case 5:
        case 6:
            answer="Medium";
            break;

        case 7:
        case 8:
        case 9:
            answer="High";
            break;

        
    }
    return answer;
}
console.log(sequentialSizes(1));
console.log(sequentialSizes(4));
console.log(sequentialSizes(8));

// =========================================
//Replacing If else chains  Switch Statements
// =========================================

function chainToSwitch(val){
    var answer = "";

    if(val === "bob"){
        answer = " Marley";
    }

    else if(val === 42){
        answer = " The answer";
    }

    else if(val === 1){
        answer = " There is no #1";
    }

    else if(val === 99){
        answer = " Missed me by this much";
    }

    else if(val === 7){
        answer = " Ate Nine";
    }
    return answer;
}
console.log(chainToSwitch(1));

function chainToSwitch(val){
    var answer = "";
    
    switch(val){
      case "bob":
        answer = "Marley";
        break; 

      case 42:
        answer = "The Answer";
        break;  
      case 1:
        answer = "There is no #1";
        break;  

      case 99:
        answer = "Missed me by this much!";
        break;  

       case 7:
        answer = " Ate Nine"; 
    }
    return answer;
}
console.log(chainToSwitch(42));

// =========================================
//Returning Boolean Values from Functions
// =========================================

function isLess(a, b){

    return a < b;
}
console.log(isLess(10 , 15));

// =========================================
//Returning Early Pattern from Functions
// =========================================

function abTest(a,b){

    if (a<0 || b<0){
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2,2));
console.log(abTest(2,-2));

// =========================================
//Counting Cards  iski smgh nhi aee
// =========================================


// =========================================
//iski smgh nhi aee
// =========================================
var count = 0;

function cc(card){

    switch(card){

        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;

        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;   
        
    }

    var holdBet = "Hold"
     if(count> 0){
        holdBet = 'Bet'
     }

    return count + " " + holdBet;
}

cc(2); cc('K'); cc(10); cc('K'); cc('A');
console.log(cc(4));


// =========================================
//Build Javascript Objects
// =========================================

var ourDog = {
    "name":"Camper",
    "legs":"4",
    "tails":"1",
    "friends":[],
};

// =========================================
//Accessing Object Properties with Dot Notation
// =========================================

var testObj = {
    "hat":"ballcap",
    "shirt":"jersey",
    "shoes":"cleats"
};
var hatValue = testObj.hat
var shirtValue = testObj.shirt;

console.log(hatValue);
console.log(shirtValue);

// =========================================
//Accessing Object Properties with Bracket Notation
// =========================================

var testObj = {
    "hat":"ballcap",
    "shirt":"jersey",
    "shoes":"cleats"
};
var hatValue = testObj["hat"]
var shirtValue = testObj['shirt'];

console.log(hatValue);
console.log(shirtValue);

// =========================================
//Accessing Object Properties with Variables
// =========================================

var testObj = {
    "12":"ballcap",
    "16":"jersey",
    "19":"cleats"
};
var playerNumber =16;
var player = testObj[playerNumber];

console.log(player);

// =========================================
//Updating Object Properties
// =========================================

var ourDog = {
    "name":"Camper",
    "legs":"4",
    "tails":"1",
    "friends":["everything"],
};
ourDog.name = 'Happy Camper';
console.log(ourDog);

// =========================================
//Add New Properties to an Object
// =========================================

var ourDog = {
    "name":"Camper",
    "legs":"4",
    "tails":"1",
    "friends":["everything"],
};
ourDog.bark = 'meow meow';
console.log(ourDog);
ourDog["bark"]= "baw baw";
console.log(ourDog);


// =========================================
//Delete Properties from an Object
// =========================================

var ourDog = {
    "name":"Camper",
    "legs":"4",
    "tails":"1",
    "friends":["everything"],
    "bark" :'meow meow'
};
delete ourDog.tails;
console.log(ourDog);

// =========================================
//Using Objects for Lookups
// =========================================

function phoneticLookup(val){
   var result= "";

var lookup ={
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "Delta": "Denver",
    "echo": "Easy",
    "foctrot": "Frank",
};
 result = lookup[val];
 return result;
}
console.log(phoneticLookup('bravo'));

// =========================================
//Testing Objects for Properties
// =========================================

var ourDog = {
    "name":"Camper",
    "legs":"4",
    "tails":"1",
};
function checkObj(checkProp){
    if(ourDog.hasOwnProperty(checkProp)){
        return ourDog[checkProp];
    }
    else {
        return "Not Found"
         }
}
console.log(checkObj('name'));
console.log(checkObj(name));

// =========================================
//Manipulating Complex Objects
// =========================================


var myMusic = [
{
    "artist": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "formats":[ "CD", "8T", "LP"],
    "gold": true 
},
    {
        "artist": "Shahzaib Hassan",
        "title": "kuch bhi nhi",
        "release_year": "2006",
        "formats":["a"]
    }
];

// =========================================
//Accessing Nested Objects
// =========================================

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk":"jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents)

// =========================================
// Record Collection iski sahi sy smgh nahi aee
// =========================================

/* var Collection = {
    "2548": {
        "album": "Slippery when wet",
        "artist": "Bon Jovi",
        "tracks": ["let it rock", "You give love a bad name"]
    },
    "2000": {
        "album": "Slippery when ",
        "artist": "Bon Jovi",
        "tracks": ["let it rock", "You give love a bad name"]
    },
    "1239": {
        "album": "Slippery ",
        "artist": "Bon Jovi",
        "tracks": ["let it rock", "You give love a bad name"]
    },
    "9021": {
        "album": "Slippery  wet",
        "artist": "Bon Jovi",
        "tracks": ["let it rock", "You give love a bad name"]
    },
} 

var collectionCopy = JSON.parse(JSON.stringify(Collection));
function updateRecords (id, prop, value){
    if(value === ""){
        delete collection[id][prop];
    }

    else if (prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }
    else{
        collection[id][prop]=value;
    }

    return collection;
}

console.log(updateRecords(1239, "artist", "ABBA"));

 */

// =========================================
// Iterate with while loops
// =========================================
var myArray = [];

var i=0;
while(i < 5){
  
    myArray.push(i);
    i++;
}
console.log(myArray);

// =========================================
// Iterate with For loop
// =========================================


var ourArray= []

for( var i = 0 ; i<9; i++){
    ourArray.push(i);
}
console.log(ourArray);

// =========================================
// Iterate Odd/Even Numbers with a For loop
// =========================================


var ourArray= []

for( var i = 0 ; i<10; i+=2){
    ourArray.push(i);
}
console.log(ourArray);

var ourArray= []

for( var i = 1 ; i<10; i+=2){
    ourArray.push(i);
}
console.log(ourArray);

// =========================================
// Count Backwards with a For loop
// =========================================

var ourArray= []

for( var i = 10 ; i>0; i-=2){
    ourArray.push(i);
}
console.log(ourArray);

// =========================================
// Iterate Through an Array with a For loop
// =========================================

var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i <ourArr.length; i++){
    ourTotal +=ourArr[i];
}
console.log(ourTotal);

// =========================================
// Nesting For loop  thora difficult tha
// =========================================

function multiplyAll(arr){
    var product = 1;

    for (var i=0; i< arr.length; i++){
        for (var j=0; j< arr[i].length; j++){
            product *= arr[i][j];
        }
    }
          

    return product;
}

var product= multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);

// =========================================
// Do While Loop
// =========================================

var myArray = []
var i = 10;

do{
    myArray.push(i);
    i++
}
while(i<5)
     
console.log(i, myArray);