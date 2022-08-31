//sự kiện trái tim
var heart_icon = document.querySelector('i.fa-heart');
let boolean_heart = 0;
const bodyHtml = document.querySelector("body");
const performListCart = document.querySelector(".perform_Song-list_cart");
const listSong = document.getElementsByClassName("perform_Song-cart");
const containerRight = document.querySelector(".container_right");
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
const music =[
    {
        id: 0,
        fileName: "holo.mp3",
        type : "Nhac",
        name: "Holo",
        singer:"Chưa biết",
        img: "https://images6.alphacoders.com/785/thumb-1920-785636.png"
    },
    {
        id: 1,
        fileName: "summer.mp3",
        type : "Nhac",
        name: "Summer",
        singer:"Chưa biết",
        img: "https://images5.alphacoders.com/592/thumb-1920-592887.jpg"
    },
    {
        id: 2,
        fileName: "spark.mp3",
        type : "Nhac",
        name: "Spark",
        singer:"Anh Không Thích Em",
        img: "https://images2.alphacoders.com/911/thumb-1920-911008.jpg"
    },
    {
        id: 3,
        fileName: "home.mp3",
        type : "Nhac",
        name: "Home",
        singer:"Của tui",
        img: "https://images.alphacoders.com/781/thumb-1920-781562.jpg"
    },
    {
        id: 4,
        fileName: "CuocVuiCoDon.mp3",
        type : "Nhac",
        name: "Cuộc vui cô đơn",
        singer:"Lê Bảo Bình",
        img: "./assets/fonts/img/LeBaoBinh.jpg"
    },
    {
        id: 5,
        fileName: "TuMyNhan.mp3",
        type : "Nhac",
        name: "Tư Mỹ Nhân Hề",
        singer:"Kiều Chấn Vũ",
        img: "./assets/fonts/img/GirlAll.jpg"
    },
    {
        id: 6,
        fileName: "TimEm.mp3",
        type : "Nhac",
        name: "Tìm Em",
        singer:"Hồ Quang Hiếu",
        img: "./assets/fonts/img/GirlAll.jpg"
    },
    {
        id: 7,
        fileName: "UyenUongHoDiep.mp3",
        type : "Nhac",
        name: "Uyên Ương Hồ Điệp",
        singer:"Hồ Quang Hiếu",
        img: "./assets/fonts/img/GirlAll.jpg"
    }
];
addListSongtoPerform();
var arrSong = [];
let indexSong = 0;
song.setAttribute("src", `./assets/fonts/music/${music[indexSong].fileName}`);
var nextBtn = document.querySelector(".nextBtn");
const previousBtn = document.querySelector(".backBtn");
const songRanBtn = document.querySelector('.randomBtn');
const iconSongRan = document.querySelector(".icon_SongRanBtn");
var isSongRanBtn = false;
const durationTime = document.querySelector(".duration");
const remainingTime = document.querySelector(".remaining");
const crossbarPlayTime = document.getElementById("input_run");
const imgSong = document.querySelector(".cart_use_img");
const singerSong = document.querySelector(".cart_use_name_singer");
const nameSong = document.querySelector(".cart_use_name_Music");
const againSong = document.querySelector(".againSongBtn");
const againeSongIcon = document.querySelector(".againSongBtn_icon");
var isAgainSong = false;
const inVolume = document.getElementById("input_volume");
btnPlay.addEventListener("click", playSong);
function playSong(){
    var children = btnPlay.children;
    if(isPlaySong){
        song.play();
        isPlaySong = false;
        changeDisplay(children[0], children[1]);
        animationImageSong();
    }
    else{
        song.pause();
        isPlaySong = true;    
        changeDisplay(children[1], children[0]);
        animationImageSong();
    }

}
function displayTimer(){
    const {duration, currentTime} = song;
    if(!duration){
        remainingTime.textContent = "03:50";
    }else{
        remainingTime.textContent = formatTimer(duration);
        crossbarPlayTime.max = duration;
        //tư duy thêm (false)
        clearInterval(displayTimer);
    }

}
function runTimer(){
    const {duration, currentTime} = song;
    if(!isPlaySong){    
        durationTime.textContent = formatTimer(currentTime);

    }
    if(currentTime == duration){
        if(!isAgainSong)
        nextSong();
        else{
            song.value = 0;
            song.play();
        }
    }
}
function runCrossbarSong(){
    const {duration, currentTime} = song;
    if(!isPlaySong){  
        crossColorLeft(currentTime, crossbarPlayTime);
        crossbarPlayTime.value = currentTime;
        
    }  
}
setInterval(runCrossbarSong, 20);
setInterval(runTimer, 200);
function formatTimer(seconds){
        let minutesTime = Math.floor(seconds/60);
        
        let secondTime = Math.floor(seconds-minutesTime*60);
        if(secondTime < 10)
        secondTime = "0"+ secondTime;
        
        if(minutesTime <10)
        minutesTime  = "0"+minutesTime;
    return `${minutesTime}:${secondTime}`;
}

//thay đổi giá trị thời gian chạy
crossbarPlayTime.oninput = function(){
    crossColorLeft(crossbarPlayTime.value, crossbarPlayTime);
    song.currentTime = this.value;
}

// thay đổi giá trị âm lượng
inVolume.oninput = function(){
    crossColorLeft(inVolume.value, inVolume);

    // xử lý thay đổi âm lượng
    song.volume = ""+inVolume.value;
}


setInterval(displayTimer, 500);
function changeDisplay(play, pause){
    play.style.display = 'none';
    pause.style.display = 'block';
}

nextBtn.addEventListener('click', nextSong);
function nextSong(){
    removeSongSelected();
    addSongSelected(listSong[indexSong+1]);
    if(indexSong == music.length){
        indexSong = 0;
    }

    if(!isSongRanBtn){
        changeSong(1);
    }else{
        changeSongRandom(1);
    }
    animationImageSong();
    if(!isPlaySong){
        song.play();
       
    }else{
        playSong();
    }
   

}
previousBtn.addEventListener('click', previousSong);
function previousSong(){
    if(indexSong == 0){
        indexSong = music.length-1;
    }
    if(!isSongRanBtn){
        changeSong(-1);
    }else{
        changeSongRandom(-1);
    }
    animationImageSong();
    if(!isPlaySong){
        song.play();
       
    }else{
        playSong();
    }
   
}

function changeSong(dir){
    if(dir == 1)
    {
        indexSong += 1;
        song.setAttribute("src", `./assets/fonts/music/${music[indexSong].fileName}`);  
    }else{

        indexSong -= 1;
        song.setAttribute("src", `./assets/fonts/music/${music[indexSong].fileName}`);
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
        song.setAttribute("src", `./assets/fonts/music/${music[numberRan].fileName}`);  
    }else{
        song.setAttribute("src", `./assets/fonts/music/${music[numberRan].fileName}`);
    }
}
//xử lý ngẫu nhiên
songRanBtn.onclick = function(){
    if(!isSongRanBtn){
        iconSongRan.style.color = 'red';
        isSongRanBtn = true;
    }else{
        iconSongRan.style.color = '#fff';
        isSongRanBtn = false;
    }
}

//xử lý lặp bài hát
againSong.onclick = function(){
    if(!isAgainSong){
        againeSongIcon.style.color = 'red';
        isAgainSong = true;
    }else{
        againeSongIcon.style.color = '#fff';
        isAgainSong = false;
    }
}
function crossColorLeft(value, obj){
    value = value/parseFloat(obj.max)*100;
    var color = "linear-gradient(90deg, #fff "+ value+"%,"+ " rgb(58 38 96 / 90%)"+ value+"%)";
    obj.style.background = color;
}
function infSong(){
    imgSong.setAttribute("src", `${music[indexSong].img}`);
    singerSong.textContent = music[indexSong].singer;
    nameSong.textContent = music[indexSong].name;
}
setInterval(infSong, 1000);

// animation avatar
function animationImageSong(){
    if(!isPlaySong){
        imgSong.style.animation = "mymove 10s linear infinite";
    }else{
        imgSong.style.animation = "none";
    }
}

// hiệu ứng click trên slider
const menuItemSlider = document.getElementsByClassName("navMenu-item");
    for(var i = 0; i<menuItemSlider.length;i++){
        menuItemSlider[i].onclick = function(){
            colorDefault();
            this.style.backgroundColor = "red";
        }
    }
    function colorDefault(){
        for(var i = 0; i<menuItemSlider.length;i++){
            menuItemSlider[i].style.background = "none";
    }
}

// event focus sub search
const inp_search = document.querySelector(".right_nav-search .search");
const resultSearch = document.querySelector(".right_subNav-search");
const itemSearch = document.getElementsByClassName("subNav_item");
const navSearch = document.querySelector(".right_nav-search");


//event click perform
const cartPerform = document.querySelectorAll(".right_cart_perform-name");
const cartPerformSong = document.querySelector(".right_cart_perform-Song");
const cartPerformPodcast = document.querySelector(".right_cart_perform-Podcast");
const cartPerformAlbum = document.querySelector(".right_cart_perform-Album");
const cartPerformMovie = document.querySelector(".right_cart_perform-movie");
for(var i = 0;i<cartPerform.length;i++){
    cartPerform[i].onclick = function(){
        borderCartForm();
        this.style.borderBottom = "2px solid #c662ef";
        formCartPerform(this);
    }
}
function borderCartForm(){
    for(var i = 0;i<cartPerform.length;i++){
        cartPerform[i].style.border = "none";
    }
}

function formCartPerform(perform){
    cartPerformSong.style.display = "none";
    cartPerformPodcast.style.display = "none";
    cartPerformAlbum.style.display = "none";
    cartPerformMovie.style.display = "none";
    var performText = perform.innerHTML+"";
    
    if(performText.endsWith("Bài hát")){
    cartPerformSong.style.display = "flex";
    }
    if(performText.endsWith("Podcast"))
    cartPerformPodcast.style.display = "flex";
    if(performText.endsWith("Album"))
    cartPerformAlbum.style.display = "flex";
    if(performText.endsWith("Movie"))
    cartPerformMovie.style.display = "flex";

}
cartPerform[0].style.borderBottom = "2px solid #c662ef";
formCartPerform(cartPerform[0]);

//event changeList
const btnChangeList = document.querySelectorAll(".perform_Song-changeList button");

for(var i = 0;i<btnChangeList.length;i++){
   
    btnChangeList[i].onmousedown = function(){
        PerformChangeList();
        Object.assign(this.style,{
            pointerEvents: "none",
            backgroundColor : "#c662ef",
            borderColor: "#c662ef",
          
        });
    }
}
function PerformChangeList(){
    for(var i = 0;i<btnChangeList.length;i++){
        
            Object.assign(btnChangeList[i].style,{
                pointerEvents: "auto",
                backgroundColor : "#37075d",
                borderColor: "#fff",
               
            });
        }
}

// click song
for(var i = 0;i<listSong.length;i++){
    listSong[i].onclick = function(){
        removeSongSelected();
        addSongSelected(this);
        playSongId(parseInt(this.id+""));
    }
}
//thêm class thuộc tính
function removeSongSelected(){
    const songIsSelect = document.querySelector(".is-selected");
    if(songIsSelect!=null)
    songIsSelect.classList.remove("is-selected");
}
// xoá class thuộc tính
function addSongSelected(obj){
    obj.classList.add("is-selected");
}
function playSongId(id){
    song.setAttribute("src", `./assets/fonts/music/${music[id].fileName}`);
    isPlaySong = true;
    indexSong = id;
    playSong();
}

//thêm danh sách bài hát vào mục trình diễn

function addListSongtoPerform(){
    for(var i=0;i<music.length;i++){
        var nameSong = music[i].name;
        var nameSinger = music[i].singer;
        const id = music[i].id+"";
        var imgSong = music[i].img;

        var tagName = '<li id="'+id+'" class="perform_Song-cart">\n'
                    +'<div class="perform_Song-cart-introduce">\n'
                    +'<i class="fa-solid fa-music"></i>\n'
                    +'<div class="song-cart-introduce-img">\n'
                    +' <img src="'+imgSong+'" alt="">\n'
                    +'<i class="action_icon-play fa-solid fa-play "></i>\n'
                    +'</div>\n'
                    +'<div class="song-cart-introduce-text">\n'
                    +'<p>'+nameSong+'</p>\n'
                    +' <p>'+nameSinger+'</p>\n'
                    +' </div>\n'
                    +' </div>\n'
                    +'<div class="perform_Song-cart-album">\n'
                    +' <a href="">'+nameSong+'</a>\n'
                    +' </div>\n'
                    +'<div class="perform_Song-cart-time">\n'
                    +'<i class="fa-solid fa-microphone"></i>\n'
                    +'</div>\n'
                    +'</li>\n';
                    performListCart.insertAdjacentHTML('beforebegin', tagName);
    }
}
