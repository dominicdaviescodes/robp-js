// access element and change it's content.
document.getElementById('text').innerHTML = 'Hello Rob!';

// access the button
document.getElementById('myButton').onclick = function () {
  document.getElementById('text').innerHTML = 'Text Changed';
};

// appending

document.getElementById('secondButton').onclick = function () {
  document.getElementById('secondParagraph').innerHTML =
    document.getElementById('secondParagraph').innerHTML + ' awesome';
};

// prepend

document.getElementById('secondButton').onclick = function () {
  document.getElementById('secondParagraph').innerHTML =
    'I think ' +
    document.getElementById('secondParagraph').innerHTML +
    ' awesome';
};

// make text appear from nowhere

document.getElementById('createParagraph').onclick = function () {
  document.getElementById('emptyParagraph').innerHTML = 'some text';
};

// Manipulating Styles With Javascript

document.getElementById('styleTextRed').onclick = function () {
  // add style to the paragraph - red
  document.getElementById('moreText').style.color = 'red';
};

document.getElementById('styleTextBig').onclick = function () {
  // add style to the paragraph - big
  document.getElementById('moreText').style.fontSize = '20px';
};

document.getElementById('disappear').onclick = function () {
  // add style to the paragraph - disappear
  document.getElementById('moreText').style.display = 'none';
};

document.getElementById('reappear').onclick = function () {
  // add style to the paragraph - reappear
  document.getElementById('moreText').style.display = 'block';
};

// Mini challenge -

document.getElementById('red').onclick = function () {
  document.getElementById('red').style.display = 'none';
};

document.getElementById('yellow').onclick = function () {
  document.getElementById('yellow').style.display = 'none';
};

document.getElementById('blue').onclick = function () {
  document.getElementById('blue').style.display = 'none';
};

// lecture-100

document.getElementById('textChanger').onclick = function () {
  var textEntered = '';
  textEntered = document.getElementById('textInput').value;
  document.getElementById('newTextInput').innerHTML = textEntered;
};

// Lecture 102 - Arrays

var myArray = new Array();

myArray[0] = "pizza";
myArray[1] = "chocolate";
// alert(myArray);


var tweets = ["tweet 1", "tweet 2", "tweet 3"];

console.log(tweets);

// Add an item to the end of an Array
tweets.push("tweet 4");

console.log(tweets);

// Remove an item from the Array
// parameters
// no. of item where we want to start deleting, how many items
tweets.splice(1, 1);
console.log(tweets);


// 104 if statements

// what is the magic word exercise




document.getElementById('checkWord').onclick = function () {
  var guess = document.getElementById('enterWord').value;
  var magicWord = "superman";

  if (guess === magicWord) {
    alert('Congratulations, you guessed it!');
  } else {
    alert('sorry, try again.');
  }
}

//107 how many fingers?

// inputGuess  input
// checkNumber  btn

// document.getElementById('checkNumber').onclick = function () {
//   var guess = document.getElementById('inputGuess').value;
//   // random value generated 
//   var numberOfFingers = Math.floor(Math.random() * 5 + 1);

//   if (guess === numberOfFingers) {
//     alert('Congratulations, you got it!');
//   } else {
//     alert('sorry, try again.');
//   }
// }

document.getElementById("checkGuess").onclick = function () {
  var randomNumber = Math.random();
  randomNumber = randomNumber * 6;
  randomNumber = Math.floor(randomNumber);
  if (document.getElementById('guess').value == randomNumber) {
    alert('Correct!');
  } else {
    alert('Sorry The number was ' + randomNumber);
  }
}