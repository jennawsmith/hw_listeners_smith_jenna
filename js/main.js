var numba = 0;

var heading = document.getElementById('heading');

heading.addEventListener('click', myFunction);

function myFunction() {
    var paragraph = document.createElement('p');
    paragraph.innerHTML = 'This is click number: ' + ++numba;
    document.body.appendChild(paragraph);
}
