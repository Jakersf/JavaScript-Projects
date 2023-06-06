function ConcatFunction() {
    var Part1 = "This sentence";
    var Part2 = " is concatenated!";
    var Combined = Part1.concat(Part2);
    document.getElementById("PlaceHolder").innerHTML = Combined;
}

function slice_Method() {
    Sentence = "It is summer time!";
    Section = Sentence.slice(6,12);
    document.getElementById("Slice").innerHTML = Section;
}