function ConcatFunction() { //Function utilizes the concatenate method
    var Part1 = "This sentence";
    var Part2 = " is concatenated!";
    var Combined = Part1.concat(Part2); //Takes the Part1 variable and concatenates it with the Part2 variable using .concat
    document.getElementById("PlaceHolder").innerHTML = Combined; //Displays the new Combined variable which is Part1 and Part2 concatenated.
}

function slice_Method() { //Function utilizes the slice method
    Sentence = "It is summer time!"; 
    Section = Sentence.slice(6,12); //Selects the 6 to 12 section of the string, and assigns it to the Section variable
    document.getElementById("Slice").innerHTML = Section; //Displays the section variable.
}

function string_method() { //Utilizes the toString method.
    var y = 182; //Assigns the variable y a number value
    document.getElementById("Numbers_to_string").innerHTML = y.toString(); //converts the number value of the y variable to a string and displays it.
}

function precision_method() { //Utilizes the toPrecision method.
    var x = 15.1595931553199; //Assigns the var x a number value that has a long decimal value.
    document.getElementById("to_precision").innerHTML = x.toPrecision(6); //Uses the toPrecision method to end the number at 6 digits, rather than displaying the whole thing.
}