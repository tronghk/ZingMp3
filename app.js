//sự kiện trái tim
var heart_icon = document.querySelector('i.fa-heart');
let boolean_heart = 0;
const bodyHtml = document.querySelector("body");
const performListCart = document.querySelector(".perform_Song-list_cart");
const listSong = document.getElementsByClassName("perform_Song-cart");
const containerRight = document.querySelector(".container_right");
const listContent = document.getElementsByClassName("content");
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
        timeMax :"03:49",
        name: "Holo",
        singer:"Chưa biết",
        img: "https://images6.alphacoders.com/785/thumb-1920-785636.png"
    },
    {
        id: 1,
        fileName: "summer.mp3",
        type : "Nhac",
        timeMax :"02:46",
        name: "Summer",
        singer:"Chưa biết",
        img: "https://images5.alphacoders.com/592/thumb-1920-592887.jpg"
    },
    {
        id: 2,
        fileName: "spark.mp3",
        type : "Nhac",
        timeMax :"04:02",
        name: "Spark",
        singer:"Anh Không Thích Em",
        img: "https://images2.alphacoders.com/911/thumb-1920-911008.jpg"
    },
    {
        id: 3,
        fileName: "home.mp3",
        type : "Nhac",
        timeMax :"05:00",
        name: "Home",
        singer:"Của tui",
        img: "https://images.alphacoders.com/781/thumb-1920-781562.jpg"
    },
    {
        id: 4,
        fileName: "CuocVuiCoDon.mp3",
        type : "Nhac",
        timeMax :"05:05",
        name: "Cuộc vui cô đơn",
        singer:"Lê Bảo Bình",
        img: "./assets/fonts/img/LeBaoBinh.jpg"
    },
    {
        id: 5,
        fileName: "TuMyNhan.mp3",
        type : "Nhac",
        timeMax :"03:11",
        name: "Tư Mỹ Nhân Hề",
        singer:"Kiều Chấn Vũ",
        img: "./assets/fonts/img/GirlAll.jpg"
    },
    {
        id: 6,
        fileName: "TimEm.mp3",
        type : "Nhac",
        timeMax :"04:30",
        name: "Tìm Em",
        singer:"Hồ Quang Hiếu",
        img: "./assets/fonts/img/TimEm.jpg"
    },
    {
        id: 7,
        fileName: "UyenUongHoDiep.mp3",
        type : "Nhac",
        timeMax :"04:31",
        name: "Uyên Ương Hồ Điệp",
        singer:"Hồ Quang Hiếu",
        img: "./assets/fonts/img/GirlAll.jpg"
    },
    {
        id: 8,
        fileName: "ChoDinhMenhMimCuoi.mp3",
        type : "Nhac",
        timeMax :"03:58",
        name: "Chờ định mệnh mĩm cười",
        singer:"Minh Vương M4U",
        img: "./assets/fonts/img/ChoDinhMenhMimCuoi.jpg"
    },
    {
        id: 9,
        fileName: "MuonKiepLaAnhEm.mp3",
        type : "Nhac",
        timeMax :"05:16",
        name: "Muôn kiếp là anh em",
        singer:"Du Thiên",
        img: "./assets/fonts/img/MuonKiepLaAnhEm.jpg"
    },
    {
        id: 10,
        fileName: "DangDo.mp3",
        type : "Nhac",
        timeMax :"04:50",
        name: "Dang dở",
        singer:"NAl",
        img: "./assets/fonts/img/DangDo.jpg"
    },
    {
        id: 11,
        fileName: "NgaTuDuong.mp3",
        type : "Nhac",
        timeMax :"04:35",
        name: "Ngã Tư Đường",
        singer:"Hồ Quang Hiếu",
        img: "./assets/fonts/img/11.jpg"
    }
];
addListSongtoPerform();
const listIdSong = document.querySelectorAll(".song-cart-introduce-img i");
const listGitPlay = document.querySelectorAll(".gitPlay");
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
        console.log(song.currentTime);
function playSong(){
    var children = btnPlay.children;
    if(isPlaySong){
        song.play()
        isPlaySong = false;
        changeDisplay(children[0], children[1]);
        animationImageSong();
        playAndPause(1);
    }
    else{
        song.pause();
        isPlaySong = true;    
        changeDisplay(children[1], children[0]);
        animationImageSong();
        playAndPause(-1);
    }

}
//trường hợp bth của hiệu ứng play and pause
function playAndPause(dir){
    if(dir == 1){
        listGitPlay[indexSong].style.visibility="visible";
        listIdSong[indexSong].style.visibility = "hidden";
        listIdSong[indexSong].style.display = "none";
        
    }else{
        listGitPlay[indexSong].style.visibility="hidden";
        listIdSong[indexSong].style.visibility = "visible";
        listIdSong[indexSong].style.display = "block";
    }
    
}
//trường hợp next and previ 
function playAndPauseNextPre(){
    listGitPlay[indexSong].style.visibility="visible";
    listIdSong[indexSong].style.visibility = "visible";
    listIdSong[indexSong].style.display = "none";
}

//trường hợp clickSongGit
function playClickSong(){
    listIdSong[indexSong].style.visibility = "visible";
    listIdSong[indexSong].style.display = "none";
}
function displayTimer(){
    const {duration, currentTime} = song;
    if(!duration){
        remainingTime.textContent = "03:49";
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
        if(!isAgainSong){
        nextSong();
        }
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
    
    indexSong += 1;

    if(indexSong == music.length){
        indexSong = 0;
    }
    
    
     

    if(!isSongRanBtn){
        changeSong(1);
    }else{
       indexSong = changeSongRandom(1);
    }
    animationImageSong();
    if(!isPlaySong){
        song.play();
       
    }else{
        playSong();
    }
    playAndPauseNextPre();
    removeSongSelected();
    addSongSelected(listSong[indexSong]);
    removeSongSelectedPlay();
    addSongSelectedPlay(listSong[parseInt(indexSong)]);
    SongPlayGit(indexSong);
   

}
previousBtn.addEventListener('click', previousSong);
function previousSong(){
    
    indexSong -= 1;
    if(indexSong < 0){
        indexSong = music.length-1;
    }
    
   
    if(!isSongRanBtn){
        changeSong(-1);
    }else{
        indexSong = changeSongRandom(-1);
    }
    animationImageSong();
    if(!isPlaySong){
        song.play();
       
    }else{
        playSong();
    }
    playAndPauseNextPre();
    removeSongSelected();
    addSongSelected(listSong[indexSong]);
    removeSongSelectedPlay();
    addSongSelectedPlay(listSong[parseInt(indexSong)]);
    SongPlayGit(indexSong);
   
}

function changeSong(dir){
    if(dir == 1)
    {
        song.setAttribute("src", `./assets/fonts/music/${music[indexSong].fileName}`);  
    }else{

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
    return numberRan;
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
const btnChangeListSong = document.querySelectorAll(".perform_Song-changeList button");
const btnChangeListPodcast = document.querySelectorAll(".perform_Podcast-changeList button");
for(var i = 0;i<btnChangeListSong.length;i++){
   
    btnChangeListSong[i].onclick = function(){
        removeChangeList(".perform_Song-changeList");
        addChangeList(this);
    }
}
for(var i = 0;i<btnChangeListPodcast.length;i++){
   
    btnChangeListPodcast[i].onclick = function(){
        removeChangeList(".perform_Podcast-changeList");
        addChangeList(this);
    }
}
function removeChangeList(dir){
        var classSelect = document.querySelector( dir+" .isSelect-changeList");
        classSelect.classList.remove("isSelect-changeList");
}
function addChangeList(obj){
    obj.classList.add("isSelect-changeList");
}
// click song
for(var i = 0;i<listSong.length;i++){
    listSong[i].onclick = function(){
        removeSongSelected();
        addSongSelected(this);
    }
}

//thêm class thuộc tính
function removeSongSelected(){
    const songIsSelect = document.querySelector(".is-selected");
    songIsSelect.classList.remove("is-selected");
}
// xoá class thuộc tính
function addSongSelected(obj){
    obj.classList.add("is-selected");
}
addSongSelected(listSong[0]);
addSongSelectedPlay(listSong[0]);
// change theo select
function playSongId(id){
    if(indexSong != parseInt(id)){
    song.setAttribute("src", `./assets/fonts/music/${music[id].fileName}`);
    isPlaySong = true;
    indexSong = parseInt(id);
    }
    playSong();
}
for(var i = 0;i<listIdSong.length;i++){
    listIdSong[i].onclick = function(){
        playSongId(this.id);
       removeSongSelectedPlay();
       addSongSelectedPlay(listSong[parseInt(this.id)]);
       SongPlayGit(this.id);
    }
}
var idGitOld = 0;
//chạy git play
function SongPlayGit(id){
    id = parseInt(id);
    listGitPlay[idGitOld].style.visibility = "hidden";
    listIdSong[id].style.visibility = "hidden";
    listIdSong[idGitOld].style.visibility = "visible";
    listGitPlay[id].style.visibility = "visible";
    if(idGitOld != id){
        listIdSong[idGitOld].style.display = '';
    }
   
    idGitOld = id;
}
//thêm class thuộc tính
function removeSongSelectedPlay(){
    const songIsSelect = document.querySelector(".perform_Song-List .isSelect-nav-item");
    songIsSelect.classList.remove("isSelect-nav-item");
}
// xoá class thuộc tính
function addSongSelectedPlay(obj){
    obj.classList.add("isSelect-nav-item");
}
//dừng lại
for(var i = 0;i<listGitPlay.length;i++){
    listGitPlay[i].onclick = function(){
        playSongId(indexSong);
    }
}


//thêm danh sách bài hát vào mục trình diễn
function addListSongtoPerform(){
    for(var i=0;i<music.length;i++){
        var nameSong = music[i].name;
        var nameSinger = music[i].singer;
        const id = music[i].id+"";
        var imgSong = music[i].img;
        var timeSong =  music[i].timeMax;
        var tagName = '<li class="perform_Song-cart">\n'
                    +'<div class="perform_Song-cart-introduce">\n'
                    +'<i class="fa-solid fa-music"></i>\n'
                    +'<input type="checkbox" class="checkbox-song">'
                    +'<div class="song-cart-introduce-img">\n'
                    +'<div class="gitPlay"></div>\n'
                    +' <img src="'+imgSong+'" alt="">\n'
                    +'<i id="'+id+'" class="action_icon-play fa-solid fa-play "></i>\n'
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
                    +' <span>'+timeSong+'</span>\n'
                    +'</div>\n'
                    +'</li>\n';
                    performListCart.insertAdjacentHTML('beforebegin', tagName);
    
                }
}

// hiệu ứng click trên slider
const menuItemSlider = document.getElementsByClassName("navMenu-item");
    function addBackgroundMenuSlider(obj){
        obj.classList.add("isSelect-nav-item");
    }
    function removeBackgroundMenuSlider(){
        const classSelect = document.querySelector(".isSelect-nav-item");
        classSelect.classList.remove("isSelect-nav-item");
    }

// đổi các menu chức năng trang
displayContent(listContent[1]);
for(var i= 0;i<menuItemSlider.length;i++){
    menuItemSlider[i].onclick = function(){
        var index = indexFuction(this);
        //thêm background
        removeBackgroundMenuSlider();
        addBackgroundMenuSlider(this);
        // hiển thị menu chức năng
        nonDisplayContent();
        displayContent(listContent[index]);
    }
}
function indexFuction(obj){
    for(var i= 0;i<menuItemSlider.length;i++){
        if(obj == menuItemSlider[i])
        return i;
    }
    return -1;
}
function displayContent(obj){
    obj.classList.add("onDisplay");
}
function nonDisplayContent(){
    const contentDisplay = document.querySelector(".onDisplay");
    if(contentDisplay != null)
    contentDisplay.classList.remove("onDisplay");
}
// ảnh chuyển động
// const discoverIntroduce = document.getElementsByClassName("discover_introduce-cart");
//  function transitionDiscoverIntroduce(){
//     console.log("aaa");
//  }
// setInterval(transitionDiscoverIntroduce, "3000");
