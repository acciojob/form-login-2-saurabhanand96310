cy.wait()
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var firstName = document.querySelector('input[name="First Name"]').value;
    var lastName = document.querySelector('input[name="Last Name"]').value;
    var phoneNo = document.querySelector('input[name="Phone Number"]').value;
    var emailId = document.querySelector('input[name="Email ID"]').value;

    alert(`First Name: ${firstName} \nLast Name: ${lastName} \nPhone Number: ${phoneNo} \nEmail ID: ${emailId}`);
});