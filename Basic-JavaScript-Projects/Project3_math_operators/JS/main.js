
function OperatorFunction() { //Function demostrating the addition operator and displaying it with an event handler.
    var math = (4 + 4); 
    document.getElementById("Math").innerHTML = "4 + 4 = " + math; 
}

function subtraction_Function() { //Function demonstrating the subtraction operator and displaying it with an event handler.
    var Subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication() { //Function demonstrating the multiplication operator and displaying it with an event handler.
    var simple_Math = 6 * 8;
    document.getElementById("Math3").innerHTML = "6 x 8 = " + simple_Math;
}

function quickmaths() { //Function demonstrating multiple operators and displaying it with an event handler.
    var maths = (5 + 5) * 8 / 10 - 4 + 3;
    document.getElementById("Math4").innerHTML = "(5 + 5) * 8 / 10 - 4 + 3 = " + maths;

}

function modulus_Operator() { //Function demonstrating the modulus operator and displaying it with an event handler.
    var modulusmaths = 25 % 6;
    document.getElementById("Math5").innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulusmaths;
}

function negation_Operator() { //Function demonstrating the negation operator and displaying it with an event handler.
    var x = 10
    document.getElementById("Math6").innerHTML = "The negation operator made this variable negative." + -x;
}
   
function increment_Operator() { //Function demonstrating the increment operator and displaying it with an event handler.
    var O = 5;
    O++;
    document.getElementById("Math7").innerHTML = O
}

function decrement_Operator() { //Function demonstrating the decrement operator and displaying it with an event handler.
    var U = 5.25;
    U--;
    document.getElementById("Math8").innerHTML = U
}

function Random_Number() { //Function generating a random number between 0 and 100 then displaying it with an event handler.
    Rand = (Math.random() * 100);
    document.getElementById("Math9").innerHTML = Rand
}

function math_Object() { //Function demonstrating a math object method being used to calculate the square root of 25, then displaying it with an event handler.
    K = Math.sqrt(25);
    document.getElementById("Math10").innerHTML = K
}

