Y = 20
function GlobalVariableFunc() { //Displays the global variable Y - 15.
    document.getElementById("Globe").innerHTML = (Y - 15);
}

function LocalVariableFunc() { //Displays the local variable X - 20
    X = 30
    document.getElementById("Local").innerHTML = (X - 20);
}

function LocalVariableFunc2() { //Attempts to display the local variable X - 20, but doesn't have access to it.
    document.getElementById("Local2").innerHTML = console.log(X - 20); //Shows the error stated above in the debug console.
}

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Date").innerHTML = "How are you today";
    }
}

function Date_Time() {
    document.getElementById("Date2").innerHTML = Date();
}

function if_example() {
    Age = document.getElementById("Age").value; 
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}