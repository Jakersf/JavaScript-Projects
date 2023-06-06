function countdown() {
    var seconds = document.getElementById("seconds").value; //Lets the user input the time they want the timer to tick for.

    function tick() { //Function makes the "seconds" value go down by 1 each tick. Function repeats until the seconds variable == -1
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000); //Creates a time variable, which ticks every 1000 milliseconds.
        if (seconds == -1) { // condition that ends the function once the seconds variable has counted down.
            alert("Times up!"); //displays at the top of the page "Times up!"
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

let slideIndex = 1;
showSlides(slideIndex);

//Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}