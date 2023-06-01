function my_Dictionary() {
    var Animal = { //Creates a dictionary of a animal's traits by defining it all under one variable "Animal"
        Species:"Cat",
        Color:"Brown",
        Breed:"Tabby",
        Age:5,
        Sound:"Meow"
    };
    delete Animal.Sound; //Removes the KVP assigned to Animal.Sound from the dictionary
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //An event handler to display the value of Animal.Sound
}