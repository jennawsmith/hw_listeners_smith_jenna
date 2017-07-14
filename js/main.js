//This listener will change h1 text color when hovered and then back when not hovered
var hover = document.getElementById('hoverme');

hover.addEventListener('mouseenter', function (event) {
    event.target.style.color = 'white';
});

hover.addEventListener('mouseout', function (event) {
    event.target.style.color = '#6d7993';
});

// This listener will change the color of the background when the page loads
window.addEventListener('load', function changeBackground() {
    document.body.style.backgroundColor = '#c28285';
});

//This listener will change the background-color of the sections when a key is pressed

var changeColor = document.getElementsByClassName('changeColor');

changeColor.addEventListener('keydown', function (event1) {
    event1.body.style.color = 'black';
    return false;
});
