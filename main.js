// access element and change it's content.
document.getElementById('text').innerHTML = 'Hello Rob!';

// access the button
document.getElementById('myButton').onclick = function () {
  document.getElementById('text').innerHTML = 'Text Changed';
}

// appending

document.getElementById('secondButton').onclick = function () {
  document.getElementById('secondParagraph').innerHTML =
    document.getElementById('secondParagraph').innerHTML + " awesome";
}

// prepend

document.getElementById('secondButton').onclick = function () {
  document.getElementById('secondParagraph').innerHTML =
    'I think ' +
    document.getElementById('secondParagraph').innerHTML +
    " awesome";
}

// make text appear from nowhere

document.getElementById('createParagraph').onclick = function () {
  document.getElementById('emptyParagraph').innerHTML = "some text";
}

// Manipulating Styles With Javascript

document.getElementById('styleTextRed').onclick = function () {
  // add style to the paragraph - red
  document.getElementById('moreText').style.color = "red";
}

document.getElementById('styleTextBig').onclick = function () {
  // add style to the paragraph - big
  document.getElementById('moreText').style.fontSize = "20px";
}

document.getElementById('disappear').onclick = function () {
  // add style to the paragraph - disappear
  document.getElementById('moreText').style.display = "none";
}

document.getElementById('reappear').onclick = function () {
  // add style to the paragraph - reappear
  document.getElementById('moreText').style.display = "block";
}