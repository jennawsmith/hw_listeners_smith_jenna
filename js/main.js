var firstName = document.getElementsByTagName('input')[0];

var lastName = document.getElementsByTagName('input')[1];

var email = document.getElementsByTagName('input')[2];

var message = document.getElementsByTagName('textarea')[0];

document.addEventListener('submit', function (s) {

    s.preventDefault();

    console.log('The firstName is: ' + firstName.value);
    console.log('The lastName is: ' + lastName.value);
    console.log('The email is: ' + email.value);
    console.log('The message is: ' + message.value);
});
