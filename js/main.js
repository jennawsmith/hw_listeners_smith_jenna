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


//This listener will change the background-color of the sections when clicked
document.getElementsByTagName('section')[0].addEventListener('click', function (event) {
    event.target.style.backgroundColor = '#d5d5d5';
});

document.getElementsByTagName('section')[1].addEventListener('click', function (event) {
    event.target.style.backgroundColor = '#d5d5d5';
});

document.getElementsByTagName('section')[2].addEventListener('click', function (event) {
    event.target.style.backgroundColor = '#d5d5d5';
});
