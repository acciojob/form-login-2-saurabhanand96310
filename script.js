
const form =document.querySelector('form')
	form.addEventListener('submit', function(event) {
    event.preventDefault();

    var firstName = document.querySelector('#name').value;
    var lastName = document.querySelector('#Last').value;
    var phoneNo = document.querySelector('#ph').value;
    var emailId = document.querySelector('#id').value;

    alert(`First Name: ${firstName} \nLast Name: ${lastName} \nPhone Number: ${phoneNo} \nEmail ID: ${emailId}`);
});