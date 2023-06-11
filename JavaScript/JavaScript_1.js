function Food_Function() { //A function that uses a switch statement to match what the user inputs to an item from a list.
    var Food_Output;
    var Foods = document.getElementById("Food_Input").value;
    var Food_String = " is a great food!";
    switch(Foods) {
        case "Pizza":
            Food_Output= "Pizza" + Food_String;
        break;
        case "Pasta":
            Food_Output= "Pasta" + Food_String;
        break;
        case "Burger":
            Food_Output= "Burger" + Food_String;
        break;
        case "Soup":
            Food_Output= "Soup" + Food_String;
        break;
        case "Salad":
            Food_Output= "Salad" + Food_String;
        break;
        default:
        Food_Output = "Please enter a food exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Food_Output;
}

function class_function() {
    var A = document.getElementsByClassName("classtest");
    A[0].innerHTML = "This text has changed!";
}

function canvas_line() {
var c = document.getElementById("Canvas1");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(300,150);
ctx.stroke();
}

function canvas_gradient() {
const c = document.getElementById("Canvas1");
const ctx = c.getContext("2d");

const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);
}