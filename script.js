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
