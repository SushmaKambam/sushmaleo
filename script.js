// Function to validate the form
function validateForm() {
    // Get values from input fields
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var dob = document.getElementById("dob").value;
    var email = document.getElementById("email").value;

    // Get error message elements
    var nameError = document.getElementById("nameError");
    var addressError = document.getElementById("addressError");
    var dobError = document.getElementById("dobError");
    var emailError = document.getElementById("emailError");

    // Clear previous error messages
    nameError.innerHTML = "";
    addressError.innerHTML = "";
    dobError.innerHTML = "";
    emailError.innerHTML = "";

    var isValid = true;

    // Check if name is empty
    if (name === "") {
        nameError.innerHTML = "Name is required";
        isValid = false;
    }

    // Check if address is empty
    if (address === "") {
        addressError.innerHTML = "Address is required";
        isValid = false;
    }
    // Check if date of birth is empty or in a valid format
    if (dob === "" || !isValidDate(dob)) {
        dobError.innerHTML = "Please enter a valid date (MM/DD/YYYY)";
        isValid = false;
    }
    // Check if email is empty or in a valid format
    if (email === "") {
        emailError.innerHTML = "Email is required";
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.innerHTML = "Please enter a valid email address";
        isValid = false;
    }
    // If form is valid, display success message
    if (isValid) {
        document.getElementById("successMessage").style.display = "block";
        return false; // Prevent form submission
    } else {
        return false; // Prevent form submission
    }
}
// Function to check if date is in valid format (MM/DD/YYYY)
function isValidDate(dateString) {
    var regex = /^\d{2}\/\d{2}\/\d{4}$/;
    return regex.test(dateString);
}
// Function to check if email is in valid format
function isValidEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
