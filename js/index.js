var button         = document.getElementById('button');

var varianceText   = document.getElementById('variance');
var varianceButton = document.getElementById('varianceButton');

var resultsText    = document.getElementById('resultsText');

var body           = document.getElementsByTagName('body')[0];

var timer          = window.performance || Date;

var start = 0;

button.addEventListener('click', startTimer);

function startTimer(){
  resultsText.textContent = '';
  start = 0;
  
  var onsetTime = getRandomArbitrary(3000, 6000);
  
  window.setTimeout(function(){
    start = timer.now();
    setBackgroundRed();
  }, onsetTime);
  
}

body.addEventListener('keydown', stopTimer);

function stopTimer(event){
  if(start > 0){
    var time = timer.now() - start;
    setBackgroundWhite();
    resultsText.textContent = time + " milliseconds";
    start = 0;
    // stop space bar from activating button again
    event.preventDefault();
    event.stopPropagation();
  }
  console.log(event);
}

// body.addEventListener('mousedown', stopTimer);

// 
// run on init to establish variance
// 

var varianceStart = 0;


var flarp = document.createEvent('Event');

flarp.initEvent('flarp', true, true);

varianceText.addEventListener('flarp', varianceEnd);

function establishVariance(){

  varianceStart = 0;

  window.setTimeout(function(){
    varianceStart = timer.now();
    setBackgroundRed();
    if(body.style.backgroundColor == 'red') varianceText.dispatchEvent(flarp);
    // varianceEnd();
  },0);

}

function varianceEnd(){
  if(varianceStart > 0){
    var time = timer.now() - varianceStart;
    setBackgroundWhite();
    varianceText.textContent = "variance: " + time + " milliseconds";
  }
}

// varianceButton.addEventListener('mouseup', varianceEnd);
varianceButton.addEventListener('mousedown', establishVariance);

// establishVariance()


function setBackgroundRed(){
  body.style.backgroundColor = 'red';
}

function setBackgroundWhite(){
   body.style.backgroundColor = 'white';
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}