var heading = document.getElementById('heading');

heading.addEventListener('click', myFunction);

function myFunction() {
    var paragraph = document.createElement('p');
    paragraph.innerHTML = 'This is click number: ';
    heading.appendChild(paragraph);
}
