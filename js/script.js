// Business Logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

// User Interface Logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("#new-first-name").val();
    var inputtedLastName = $("#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("#contacts").append("<li>" + "<ul>" + "<li>" + newContact.firstName + "</li>" + "<li>" + newContact.lastName + "</li>" + "</ul>" + "</li>" + "<br>");
  });
});
