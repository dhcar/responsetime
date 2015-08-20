var button = document.getElementById('button');
var resultsText = document.getElementById('resultsText');

var start = 0;

button.addEventListener('click', function(){
  resultsText.textContent = '';
  start = 0;
  
  var onsetTime = getRandomArbitrary(3000, 6000);
  
  window.setTimeout(function(){
    start = Date.now();
    setBackgroundRed();
  }, onsetTime);
  
});

document.getElementsByTagName('body')[0].addEventListener('keydown', function(){
  if(start){
    var time = Date.now() - start;
    setBackgroundWhite();
    resultsText.textContent = time + " milliseconds";
    start = 0;
  }
});

function setBackgroundRed(){
  document.getElementsByTagName('body')[0].style.backgroundColor = 'red';
}

function setBackgroundWhite(){
   document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}