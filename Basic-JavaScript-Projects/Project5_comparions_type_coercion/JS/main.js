document.write("10" + 5);
document.write(0 / 0);

function NaN_True() {
    document.getElementById("Test").innerHTML = isNaN('This is a string'); //Uses isNaN method to display whether the string is a number or not.
}

function NaN_False() {
    document.getElementById("Test2").innerHTML = isNaN(15); //Uses isNaN method to display whether the number is a number or not.
}

function Negative_Infinity() {
    document.getElementById("Test3").innerHTML = -2E310; // Uses a number larger than javascript can display and the negator operator to display -Infinity
}

function Positive_Infinity() {
    document.getElementById("Test4").innerHTML = 2E310; //Uses a number larger than javascript can display to display Infinity.
}

function Boolean_Function() {
    var TF = (10 > 9);
    document.getElementById("Test5").innerHTML = TF //Uses Boolean logic to display whether 10 > 9.
}

function ConsoleLog() {
    console.log(10 > 11); //Shows the result of 10 > 11 using boolean logic in the console.
}

function DoubleEqual() {
    var double = (11 == 10);
    document.getElementById("Test6").innerHTML = double //Uses double equals to make a comparison between 11 and 10 and see if they are equal or not.
}

function TripleEqual() { //Uses the triple equals to see if "10" and 10 have the same value and are the same type of data.
    var triple = ("10" === 10);

    document.getElementById("Test7").innerHTML = triple
}

function BooleanOperators() { //Uses the OR (can plug in && as well) operator to display if 6 > 5 or 4 > 5, since 6 > 5 it displays as true.
   var booleanoperators = (6 > 5 || 4 > 5);
   document.getElementById("Test8").innerHTML = booleanoperators
}

function BooleanOperators2() { //Uses the AND operator to display true if both 2 < 4 and 6 < 5, if either aren't true the code displays false.
    var booleanoperators2 = (2 < 4 && 6 < 5);
    document.getElementById("Test10").innerHTML = booleanoperators2
}

function NotFunction() { // Uses the NOT operator to see if 5 > 10 is not greater than 10, since 5 is not greater than 10 it displays as true.
    document.getElementById("Test9").innerHTML = !(5 > 10);
}