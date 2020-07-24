// when page loads, shape appears, timer starts
var start = new Date().getTime();

function makeShapeAppear() {
  var top = Math.random() * 400;
  document.getElementById('shape').style.top = top + "px";
  document.getElementById('shape').style.display = 'block';
  start = new Date().getTime();
}

function appearAfterDelay() {
  setTimeout(makeShapeAppear, Math.random() * 2000);
}
appearAfterDelay();

document.getElementById('shape').onclick = function () {
  document.getElementById('shape').style.display = "none";
  var end = new Date().getTime();
  var timeTaken = (end - start) / 1000;
  document.getElementById('timeTaken').innerHTML = timeTaken + 's';
  appearAfterDelay();
}