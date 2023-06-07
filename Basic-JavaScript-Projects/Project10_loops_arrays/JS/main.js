function Call_Loop() { //This function loops and displays each digit until the while condition is no longer met.
    var Digit="";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
   
}

function String_Function() { //Displays the string length of the text variable
    let text = "Four";
    let length = text.length;
    document.getElementById("stringlength").innerHTML = length;
}

function for_Loop() { //Displays each car until the cars.length condition is exceeded, which ends the loop.
    var cars = ["Toyota", "Honda", "Nissan", "Dodge", "Acura", "Lexus"];
    var info = "";
    var Y;
    for (Y = 0; Y < cars.length; Y++) {
        info += cars[Y] + "<br>";
    }
    document.getElementById("List_of_cars").innerHTML = info;

}

function array_Function() { //Creates an array and then displays it using an HTML call.
    var Revenue = [];
    Revenue[0] = "Monday we made $25!";
    Revenue[1] = "Tuesday we made $32!";
    Revenue[2] = "Wednesday we made $16!";
    Revenue[3] = "Thursday we made $53!";
    document.getElementById("Array").innerHTML = "On " +
        Revenue[0];
}

function constant_function() { //Creates a constant, and changes 1 characteristic then displays a description of the constant.
    const Element = {type:"Water", State:"Liquid"};
    Element.State = "Vapor";
    Element.molecules ="2 Hydrogen 1 Oxygen";
    document.getElementById("Constant").innerHTML = "The state of the " +
        Element.type + " is currently " + Element.State + " and is made up of " +
            Element.molecules + " molecules."
}

var P = 15;
 //This block of code demonstrates how the let function works with scope.
function let_function() {
    let P = "pie";
    document.getElementById("let").innerHTML = P;
}   

function let_function2() {
    document.getElementById("let2").innerHTML = P;
}

function greeting() { //Takes whatever the user inputs and displays Hello, (their name).
    var Name = "";
    Name = document.getElementById("name").value;
    document.getElementById("hello").innerHTML = "Hello, " + Name + ".";
}
function dog_function() { //Uses a method with the variable dog to display the dog object's characteristics.
let dog = {
    name: "Booger ",
    breed: "mutt ",
    age: "2 ",
    color: "brown ",
    description : function() {
        return "This is my dog " + this.name + "! He is a " + this.color + this.breed + " and is " 
        + this.age + "years old.";}
    };
    document.getElementById("Dog_Object").innerHTML = dog.description();
}

function break_function(){ //Example of a break in a loop.
    for (let K = 0; K < 10; K++) {
        if (K === 4) {break; }
        document.getElementById("break").innerHTML = K;
    }
}

function continue_function() { //Example of continue in a loop.
    for(let M = 0; M < 10; M++) {
        if(M > 5) { continue; }
        document.getElementById("continue").innerHTML = M;
    }
    
}