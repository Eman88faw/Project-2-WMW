$(document).ready(function() {
    $("#contact-form").submit(function(e) {
        e.preventDefault();
        // You can add code here to handle form submission, such as sending data to a server. 
        alert("Form submitted successfully!");
        // Clear form fields after submission
        $("#name").val("");
        $("#email").val("");
        $("#message").val("");
    });
});