function validateForm() {
    let x = document.forms["myForm"]["lname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    let y = document.forms["myForm"]["lname"].value;
    if (y == "") {
      alert("Last name must be filled out");
      return false;
    }
}