//sự kiện trái tim
var heart_icon = document.querySelector('i.fa-heart');
let boolean_heart = 0;

function display_color(){
    if(!Boolean(boolean_heart)){
        Object.assign(heart_icon.style,{
            color: '#c662ef',
            fontWeight: '1000',
        } );
        boolean_heart = 1;
    }
    else{
        Object.assign(heart_icon.style,{
            color: '#fff',
            fontWeight: '500',
        } );
        boolean_heart = 0;
    }  
}

    function change_color_action(index){
            var value = arr.get(index);
            if(value == 0){
                btn_action[index].style.color = 'red';
                arr.set(index, 1);
            }
            else{
                btn_action[index].style.color = '#fff';
                arr.set(index,0);
            }
    }




var song = document.getElementById("song");
var btnPlay = document.querySelector('.button_play');
let isPlaySong = true;
const music =["holo.mp3", "summer.mp3", "spark.mp3", "home.mp3"];
let indexSong = 0;
song.setAttribute("src", `./assets/fonts/music/${music[indexSong]}`);
var nextBtn = document.querySelector(".nextBtn");
const previousBtn = document.querySelector(".backBtn");
const songRanBtn = document.querySelector('.randomBtn');
var isSongRanBtn = false;
const durationTime = document.querySelector(".duration");
const remainingTime = document.querySelector(".remaining");
btnPlay.onclick = function(){
    var children = this.children;
    if(isPlaySong){
    song.play();
    isPlaySong = false;
    changeDisplay(children[0], children[1]);
    }
    else{
    song.pause();
    isPlaySong = true;    
    changeDisplay(children[1], children[0]);
    }
}
function displayTimer(){
    const {duration, currentTime} = song;
    if(!duration){
        remainingTime.textContent = "03:50";
    }else{
        remainingTime.textContent = formatTimer(duration);
    }
}
function formatTimer(seconds){
        let minutesTime = Math.floor(seconds/60);
        
        let secondTime = Math.floor(seconds-minutesTime*60);
        if(secondTime < 10)
        secondTime = "0"+ secondTime;
        
        if(minutesTime <10)
        minutesTime  = "0"+minutesTime;
    return `${minutesTime}:${secondTime}`;
}
setInterval(displayTimer, 500);
function changeDisplay(play, pause){
    play.style.display = 'none';
    pause.style.display = 'block';
}

nextBtn.onclick = function(){
    if(!isSongRanBtn){
        changeSong(1);
    }else{
        changeSongRandom(1);
    }
    if(!isPlaySong)
        song.play();

}

previousBtn.onclick = function(){
    if(!isSongRanBtn){
        changeSong(-1);
    }else{
        changeSongRandom(-1);
    }
    if(!isPlaySong)
    song.play();
}

function changeSong(dir){
    if(dir == 1)
    {
        indexSong += 1;
        song.setAttribute("src", `./assets/fonts/music/${music[indexSong]}`);  
    }else{

        indexSong -= 1;
        song.setAttribute("src", `./assets/fonts/music/${music[indexSong]}`);
    }
    
}
function changeSongRandom(dir){
    let numberRan = indexSong;
    while(numberRan == indexSong){
        numberRan = Math.floor(Math.random() * music.length);
    }
    indexSong = numberRan;
    if(dir == 1)
    {
        song.setAttribute("src", `./assets/fonts/music/${music[numberRan]}`);  
    }else{
        song.setAttribute("src", `./assets/fonts/music/${music[numberRan]}`);
    }
}
//xử lý ngẫu nhiên
songRanBtn.onclick = function(){
    if(!isSongRanBtn){
        this.style.color = 'red';
        isSongRanBtn = true;
    }else{
        this.style.color = '#fff';
        isSongRanBtn = false;
    }
}