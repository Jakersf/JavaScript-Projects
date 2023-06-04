function Ride_Function() { 
    var Height, Can_Ride; 
    Height = document.getElementById("Height").value; 
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}

function Vote_Function() { //Function determines whether or not a citizen is old enough to vote.
    var Age, Can_vote; 
    Age = document.getElementById("Age").value; //Assigns whatever is put into the input with the id "Age" as the value for the Age variable.
    Can_vote = (Age < 18) ? "You are too young":"You are old enough"; //Takes the age variable and uses Boolean logic to determine if they are 18 or older.
    document.getElementById("Vote").innerHTML = Can_vote + " to vote."; //Displays the string assigned to Can_vote by the boolean logic +" to vote."
}

function Vehicle(Make, Model, Year, Color) { //Constructs an object "Vehicle" and gives it classes
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //These 3 lines create new Vehicle objects and assign them 4 classes according to their characteristics.
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function VehicleFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = //Displays the data found in Erik's vehicle object.
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function CountdownFunction() {
    document.getElementById("Nested_Function").innerHTML = Countdown();//Replaces the text in the "Nested_Function" ID with the result of the countdown() function.
    function Countdown() {
        var Starting_Point = 100; //Declares the starting point variable as 100
        function Minus_One() {Starting_Point -= 1;} //The Minus_One() function subtracts 1 from the starting point variable
        Minus_One();
        return Starting_Point; //returns the starting_point variable, displaying it in the "Nested_Function" ID.
    }
}