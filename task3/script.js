const trafficLight = document.querySelector('#trafficLight');

function myGreen() {
    trafficLight.style.background = ('green');
    trafficLight.removeEventListener('click', myGreen);
    trafficLight.addEventListener('click', myYellow);
}

    

function myYellow() {
    trafficLight.style.background = ('yellow');
    trafficLight.addEventListener('click', myRed);
    
  
}
function myRed() {
    trafficLight.style.background = ('red');
    trafficLight.removeEventListener('click', myRed);
    trafficLight.addEventListener('click', myGreen);
    trafficLight.removeEventListener('click', myYellow);
}

trafficLight.addEventListener('click', myGreen);