function Button1() { //Declares this function as "Button1"
    var str="This is the button text!"; //Declares the text that will be displayed when the button is pressed
    document.getElementById("Button_Text").innerHTML = str;  //Elements containing with this ID will receive the text assigned to Button_Text if interacted with.
}

function myFunction() { //Declares this function as "MyFunction"
    var sentence = "I am learning"; //Declares the variable sentence
    sentence += " a lot from this book!"; //Concatenates another snippet into the variable sentence.
    document.getElementById("Concatenate").innerHTML = sentence; // replaces text with the sentence variables text for anything with the ID "Concatenate."

}