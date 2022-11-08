// Global vars
const time_el = document.querySelector('.watch .time' );
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');

const appendTens = document.getElementById('tens')
const appendSeconds = document.getElementsByClassName("time")

let seconds = 0;
 let seconds2 = 0;
 let tens = 0;
let interval = null;

// Event listeners
start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
reset_btn.addEventListener('click', reset);



// Update the timer
function timer () {
    seconds++;


    // Format our time
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;
    let tens = Math.round((seconds % 1) * 1000)

    if (tens < 10) tens = '0' + tens;
    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = '0' + mins;
    if (hrs < 10) hrs = '0' + hrs;

    time_el.innerText = `${hrs}:${mins}:${secs}`;
    appendTens.innerText =`${tens}`;

}

function start () {
    if (interval) {
        return
    }
   interval = setInterval(timer, 1000)

   interval = setInterval(startTens, 1000)
}

function stop () {
    clearInterval(interval);
    interval = null;
}

function reset () {
    stop();
    seconds2 = 0;
    seconds = 0;
    tens = 0;
    time_el.innerText = '00:00:00'
    appendTens.innerText = '00'
}

// start tens cuz it aint working if not duh
/*
function startTens () {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  
  }
  */


