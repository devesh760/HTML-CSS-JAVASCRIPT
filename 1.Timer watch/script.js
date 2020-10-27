const newYear = "11 mar 2021";
const timeElements = document.getElementsByClassName('timeEL');

function countDown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    const totalseconds = (newYearDate - currentDate)/1000;
    const days = Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds / 3600)%24;
    const minutes = Math.floor(totalseconds /60)%60;
    const seconds = Math.floor(totalseconds)%60
    // console.log(days , hours ,minutes , seconds);
    timeElements[0].innerText = days;
    timeElements[1].innerText = hours;
    timeElements[2].innerText = minutes;
    timeElements[3].innerText = seconds;
}
//start
countDown();

setInterval(countDown,1000);