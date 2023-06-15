let count = 0;
let Timecounter = 60;
// Logic to Move the Aim Image
// function moveAimImage(e){
// let x,y;
//     if( e.clientX - 35 < 0 || e.clientY - 35 < 0){
//         x=e.clientX;
//         y=e.clientY;
//     }else{
//         x=e.clientX - 35;
//         y=e.clientY - 35;
//     }

//     var imageDiv=document.getElementById("aimImage");
//     imageDiv.style.left=x + 'px';
//     imageDiv.style.top=y + 'px';
// }

let answer1 = prompt("добро пожаловать ковбой, скажи мне, как тебя зовут?")
alert('отлично ' + answer1 + ', чтобы пройти испытание тебе нужно набрать 25 очков за 30 секунд, приступай')


setInterval(() => {
    if (Timecounter >= 0 & count >= 25) {
        popupBg.classList.add('open');
        duckImageDiv.classList.add('none');
    } else {
        document.getElementById("currentTimer").innerHTML = --Timecounter;
    }

    if (Timecounter >= 0 & count <= 25) {
        document.getElementById("currentTimer").innerHTML = --Timecounter;
    } else {
        popupBg2.classList.add('open');
        duckImageDiv.classList.add('none');
    }

}, 1000);

function hideBird(clicked_id) {
    document.getElementById("currentScore").innerHTML = ++count;
    document.getElementById("fireSound").play();
    document.getElementById(clicked_id).style.display = "none";
    let x = Math.floor((Math.random() * 10) + 1)
    setTimeout(() => {
        document.getElementById(clicked_id).style.display = "block";
    }, x * 1000);
}

document.getElementById("namee").innerHTML = answer1;

// pop-up =========================================
let popupBg2 = document.querySelector('#pop-up-2');
let popupBg = document.querySelector('#pop-up-1');
let popup = document.querySelector('.pop-up__body');
let openPopupButtons = document.querySelectorAll('.btn');
let closePopupButton = document.querySelector('.pop-up__close');
let duckImageDiv = document.querySelector('.duckImageDiv')

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('open');
    })
});

document.getElementById("musSound").play();
var first = true;
document.onclick = function () {
    document.getElementById("musSound").play();
    if (first == true) audio.play()
    first = false;
}