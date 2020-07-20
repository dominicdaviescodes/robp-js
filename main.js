// access element and change it's content.
document.getElementById('text').innerHTML = 'Hello Rob!';

// access the button
document.getElementById('myButton').onclick = function () {
  document.getElementById('text').innerHTML = 'Text Changed';
}