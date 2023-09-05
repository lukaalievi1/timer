let timerWt = document.querySelector('.time')
let timer = null;
let [hours, minutes, seconds] = [0,0,0];

function stopWatch() {
    seconds++;
    if(seconds === 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? ("0" + hours) : hours;
    let n = hours < 10 ? ("0" + minutes) : minutes;
    let s = hours < 10 ? ("0" + seconds) : seconds;

    timerWt.innerHTML = h + ":" + n + ":" + s;
}

function startTimer(){
    if(timer != null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000)
}
function stopTimer(){
    clearInterval(timer)
}
function resetTimer(){
    clearInterval(timer)
    [hours, minutes, seconds] = [0,0,0];
    timerWt.innerHTML = "00:00:00"
}