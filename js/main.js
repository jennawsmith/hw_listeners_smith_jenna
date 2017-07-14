//This listener will change the paragraph text to "Oops, I can't find the text!" when clicked

document.getElementByClassName('clicked')[0].addEventListener('click', function (event) {
    event.target.innerHTML = "Oops, I can't find the text!";
}, false);


//This listener will change h1 text color when hovered and then back when not hovered
var hover = document.getElementById('hoverme');

hover.addEventListener('mouseenter', function (event) {
    event.target.style.color = 'white';
});

hover.addEventListener('mouseout', function (event) {
    event.target.style.color = '#6d7993';
});


//This listener will change the background-color of the sections when a key is pressed

var changeColor = document.getElementsByClassName('changeColor');

changeColor.addEventListener('keydown', function (event1) {
    event1.body.style.color = 'black';
    return false;
});
