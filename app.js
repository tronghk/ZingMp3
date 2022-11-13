const listUser = [{
    userName:"admin",
    password:"123",
    img:"./assets/fonts/img/GirlAll.jpg"
    },
    {userName:"customer",
    password:"123",
    img:"./assets/fonts/img/LeBaoBinh.jpg"
    }
]
const musicPersonnal = [
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
const musicTopSong = [
    {
        id: 12,
        fileName: "KhucLeSau.mp3",
        type : "Nhac",
        timeMax :"03:49",
        name: "Khúc lệ sầu",
        singer:"Chưa biết",
        img: "./assets/fonts/img/KhucLeSau.jpg"
    },
    {
        id: 13,
        fileName: "TongPhu.mp3",
        type : "Nhac",
        timeMax :"04:54",
        name: "Tòng Phu",
        singer:"Chưa biết",
        img: "./assets/fonts/img/TongPhu.jpg"
    },
    {
        id: 14,
        fileName: "CoChoiCoChiu.mp3",
        type : "Nhac",
        timeMax :"04:02",
        name: "Có chơi có chịu",
        singer:"Kinak",
        img: "./assets/fonts/img/CoChoiCoChiu.jpg"
    },
    {
        id: 15,
        fileName: "TayTraiChiTrang.mp3",
        type : "Nhac",
        timeMax :"03:50",
        name: "Tay Trái Chỉ Trăng",
        singer:"Tát tát đỉnh",
        img: "https://avatar-ex-swe.nixcdn.com/playlist/2020/11/17/a/a/3/2/1605603093650_500.jpg"
    },
    {
        id: 16,
        fileName: "AnhNoEm.mp3",
        type : "Pro player",
        timeMax :"04:27",
        name: "Anh Nợ Em",
        singer:"Phạm Trưởng",
        img: "https://avatar-ex-swe.nixcdn.com/singer/avatar/2016/11/29/b/d/3/b/1480409604553.jpg"
    },
    {
        id: 17,
        fileName: "MuonRuouToTinh.mp3",
        type : "Pro player",
        timeMax :"03:18",
        name: "Mượn Rượu Tỏ Tình",
        singer:"Emily, BigDaddy",
        img: "https://avatar-ex-swe.nixcdn.com/playlist/2019/02/12/8/a/3/5/1549962821179.jpg"
    },
    {
        id: 18,
        fileName: "TroiGiauTroiMangDi.mp3",
        type : "MV",
        timeMax :"04:18",
        name: "Trời Giấu Trời Mang Đi",
        singer:"AMEE, ViruSs",
        img: "https://avatar-ex-swe.nixcdn.com/playlist/2019/10/11/2/7/d/8/1570766694368.jpg"
    },
    {
        id: 19,
        fileName: "UyenUongHoDiep.mp3",
        type : "Nhac",
        timeMax :"04:31",
        name: "Uyên Ương Hồ Điệp",
        singer:"Hồ Quang Hiếu",
        img: "./assets/fonts/img/GirlAll.jpg"
    },
    {
        id: 20,
        fileName: "ChoDinhMenhMimCuoi.mp3",
        type : "Nhac",
        timeMax :"03:58",
        name: "Chờ định mệnh mĩm cười",
        singer:"Minh Vương M4U",
        img: "./assets/fonts/img/ChoDinhMenhMimCuoi.jpg"
    },
    {
        id: 21,
        fileName: "MuonKiepLaAnhEm.mp3",
        type : "Nhac",
        timeMax :"05:16",
        name: "Muôn kiếp là anh em",
        singer:"Du Thiên",
        img: "./assets/fonts/img/MuonKiepLaAnhEm.jpg"
    },
    {
        id: 22,
        fileName: "DangDo.mp3",
        type : "Nhac",
        timeMax :"04:50",
        name: "Dang dở",
        singer:"NAl",
        img: "./assets/fonts/img/DangDo.jpg"
    }
];
var indexSelect = 0;
var music = musicPersonnal.concat(musicTopSong);
const newSongList = [
		{	
			id: 23,
			fileName: "EmThich.mp3",
			type: "Nhac",
			timeMax: "02:56",
			name: "Em Thích",
			singer: "Seen, Lửa",
			img: "./assets/fonts/img/EmThich.jpg"
	    	},
		{ 
			id: 24,
			fileName : "HenMotMai.mp3",
			type : "Nhac",
			timeMax : "04:43",
			name : "Hẹn Một Mai",
			singer : "Bùi Tuấn Anh",
			img : "./assets/fonts/img/HenMotMai.jpg"
		},
		{ 
			id: 25,
			fileName : "TinhDau.mp3",
			type : "Nhac",
			timeMax : "04:56",
			name : "Tình Đầu",
			singer : "Tăng Duy Tân",
			img : "./assets/fonts/img/TinhDau.jpg"
		},
		{ 
			id: 26,
			fileName : "Yeu5.mp3",
			type : "Nhac",
			timeMax : "04:00",
			name : "Yêu 5",
			singer : "Rhymastic",
			img : "./assets/fonts/img/Yeu5.jpg"
		},
		{ 
			id: 27,
			fileName : "AnhDanhRoiNguoiYeuNay.mp3",
			type : "Nhac",
			timeMax : "03:37",
			name : "Anh Đánh Rơi Người Yêu Này",
			singer : "Andiez",
			img : "./assets/fonts/img/AnhDanhRoiNguoiYeuNay.jpg"
		},
		{ 
			id: 28,
			fileName : "MotNganNoiDau.mp3",
			type : "Nhac",
			timeMax : "05:21",
			name : "Một Ngàn Nỗi Đau",
			singer : "Văn Mai Hương, Hứa Kim Tuyền",
			img : "./assets/fonts/img/MotNganNoiDau.jpg"
		},
		{ 
			id: 29,
			fileName : "ChuyenDoiTa.mp3",
			type : "Nhac",
			timeMax : "03:28",
			name : "Chuyện Đôi Ta",
			singer : "Emcee L",
			img : "./assets/fonts/img/ChuyenDoiTa.jpg "
		},
		{ 
			id: 30,
			fileName : "DauDeTruongThanh.mp3",
			type : "Nhac",
			timeMax : "05:30",
			name : "Đau Để Trưởng Thành",
			singer : "Only C",
			img : "./assets/fonts/img/DauDeTruongThanh.jpg"
		},
		{ 
			id: 31,
			fileName : "TuSu.mp3",
			type : "Nhac",
			timeMax : "04:17",
			name : "Tự Sự (Qua Bển Làm Chi OST)",
			singer : "Orange",
			img : "./assets/fonts/img/TuSu.jpg"
		},
		{ 
			id: 32,
			fileName : "SuytNuaThi.mp3",
			type : "Nhac",
			timeMax : "04:43",
			name : "Suýt Nữa Thì (Chuyến Đi Của Thanh Xuân OST)",
			singer : "Andiez",
			img : "./assets/fonts/img/SuytNuaThi.jpg"
		},
		{ 
			id: 33,
			fileName : "PhoCuConAnh.mp3",
			type : "Nhac",
			timeMax : "03:53",
			name : "Phố Cũ Còn Anh",
			singer : " Quinn, Chilly",
			img : "./assets/fonts/img/PhoCuConAnh.jpg"
		},
		{ 
			id: 34,
			fileName : "NoAiDoLoiXinLoi.mp3",
			type : "Nhac",
			timeMax : "05:37",
			name : "Nợ Ai Đó Lời Xin Lỗi",
			singer : "Bozitt",
			img : "./assets/fonts/img/NoAiDoLoiXinLoi.jpg"
		},
		{ 
			id: 35,
			fileName : "AnhThuongEmNhatMa.mp3",
			type : "Nhac",
			timeMax : "03:13",
			name : "Anh Thương Em Nhất Mà",
			singer : "Lã. Log, TiB",
			img : "./assets/fonts/img/AnhThuongEmNhatMa.jpg"
		},
		{ 
			id: 36,
			fileName : "MotBuocYeuDamVanDau.mp3",
			type : "Nhac",
			timeMax : "04:58",
			name : "Một Bước Yêu Dặm Vạn Đau",
			singer : "Mr.Siro",
			img : "./assets/fonts/img/MotBuocYeuDamVanDau.jpg"
		},
		{ 
			id: 37,
			fileName : "BoEmVaoBalo.mp3",
			type : "Nhac",
			timeMax : "03:12",
			name : "Bỏ Em Vào Balo",
			singer : "Tân Trần, Freak D",
			img : "./assets/fonts/img/BoEmVaoBalo.jpg"
		},
		{ 
			id: 38,
			fileName : "CoHenVoiThanhXuan.mp3",
			type : "Nhac",
			timeMax : "03:38",
			name : "Có Hẹn Với Thanh Xuân",
			singer : "MONSTAR",
			img : "./assets/fonts/img/CoHenVoiThanhXuan.jpg"
		},
		{ 
			id: 39,
			fileName : "TinhYeuKhungLong.mp3",
			type : "Nhac",
			timeMax : "03:10",
			name : "Tình Yêu Khủng Long",
			singer : "Fay",
			img : "./assets/fonts/img/TinhYeuKhungLong.jpg"
		},
		{ 
			id: 40,
			fileName : "TrenTinhBanDuoiTinhYeu.mp3",
			type : "Nhac",
			timeMax : "03:19",
			name : "Trên Tình Bạn Dưới Tình Yêu",
			singer : "MIN",
			img : "./assets/fonts/img/TrenTinhBanDuoiTinhYeu.jpg"
		},
		{ 
			id: 41,
			fileName : "MotNha.mp3",
			type : "Nhac",
			timeMax : "03:05",
			name : "Một Nhà",
			singer : "Da LAB",
			img : "./assets/fonts/img/MotNha.jpg"
		},
		{ 
			id: 42,
			fileName : "MinhCungNhauDongBang.mp3",
			type : "Nhac",
			timeMax : "04:12",
			name : "Mình Cùng Nhau Đóng Băng",
			singer : "Thùy Chi",
			img : "./assets/fonts/img/MinhCungNhauDongBang.jpg"
		}
	];
var indexSelect = 0;
var music = musicPersonnal.concat(musicTopSong);
music = music.concat(newSongList);
//sự kiện trái tim

var song = document.getElementById("song");
const menuItemSlider = document.getElementsByClassName("navMenu-item");
var heart_icon = document.querySelector('i.fa-heart');
const abc = document.querySelector(".listTopSong");
let boolean_heart = 0;
const bodyHtml = document.querySelector("body");
const performListCart = document.querySelector(".perform_Song-list_cart");
addListSongtoPerformTopSong();
addListSongtoPerform();
var listSong = document.querySelectorAll(".perform_Song-cart");
var listIdSong;
var listGitPlay;
changeListMusic(0);
var indexSong = 0;
var num = false;
const containerRight = document.querySelector(".container_right");
const listContent = document.getElementsByClassName("content");
displayContent(listContent[0]);
for(var i= 0;i<menuItemSlider.length;i++){
    menuItemSlider[i].onclick = function(){
        var index = indexFuction(this);
        //thêm background
        removeBackgroundMenuSlider();
        addBackgroundMenuSlider(this);  
        // hiển thị menu chức năng
        nonDisplayContent();
        displayContent(listContent[index]);
        changeListMusic(index);
        
    }
}
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


var btnPlay = document.querySelector('.button_play');

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
        var maxTime;
let isPlaySong = true;
function playSong(){
    var children = btnPlay.children;
    maxTime = setInterval(displayTimer, 500);
    if(isPlaySong){
        if(!num){
             song.setAttribute("src", `./assets/fonts/music/${music[indexSong].fileName}`);
             num = true;
        }
        song.play();
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
function indexSelectSong(temp){
    var sum = 0;
    if(temp > parseInt(musicPersonnal[musicPersonnal.length-1].id))
    sum += musicPersonnal.length;
    if(temp > parseInt(musicTopSong[musicTopSong.length-1].id))
    sum += musicTopSong.length;
    return temp-sum;
}
//trường hợp bth của hiệu ứng play and pause
function playAndPause(dir){
    indexSelect = indexSelectSong(indexSong);
    if(dir == 1){
        listGitPlay[indexSelect].style.visibility="visible";
        listIdSong[indexSelect].style.visibility = "hidden";
        listIdSong[indexSelect].style.display = "none";
        
    }else{
        listGitPlay[indexSelect].style.visibility="hidden";
        listIdSong[indexSelect].style.visibility = "visible";
        listIdSong[indexSelect].style.display = "block";
    }
    
}
//trường hợp next and previ 
function playAndPauseNextPre(){
    indexSelect = indexSelectSong(indexSong);
    listGitPlay[indexSelect].style.visibility="visible";
    listIdSong[indexSelect].style.visibility = "visible";
    listIdSong[indexSelect].style.display = "none";
}

//trường hợp clickSongGit
function playClickSong(){
    indexSelect = indexSelectSong(indexSong);
    listIdSong[indexSelect].style.visibility = "visible";
    listIdSong[indexSelect].style.display = "none";
}
function displayTimer(){
    const {duration, currentTime} = song;
    if(!duration){
        remainingTime.textContent = "03:49";
    }else{
        remainingTime.textContent = formatTimer(duration);
        crossbarPlayTime.max = duration;
        //tư duy thêm (false)
        clearInterval(maxTime);
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
    button.classList.remove("fa-volume-xmark");
    button.classList.add("fa-volume-high");
    crossColorLeft(inVolume.value, inVolume);
    // xử lý thay đổi âm lượng
    song.volume = ""+inVolume.value;
    
}


 
function changeDisplay(play, pause){
    play.style.display = 'none';
    pause.style.display = 'block';
}

nextBtn.addEventListener('click', nextSong);
function nextSong(){
    
     restartListSong();
    indexSong += 1;

    if(indexSong == music.length){
        indexSong = 0;
        changeListMusic(0);
       
    }
    if(!isSongRanBtn){
        changeSong();
    }else{
       changeSongRandom();
    }
    animationImageSong();
    if(!isPlaySong){
        song.play();
       
    }else{
        
        playSong();
    }
    playAndPauseNextPre();
    removeSongSelected();
    addSongSelected(listSong[indexSelectSong(indexSong)]);
    removeSongSelectedPlay();
    
    addSongSelectedPlay(listSong[parseInt(indexSong)]);
    SongPlayGit(indexSelectSong(indexSong));
   infSong();
   

}
previousBtn.addEventListener('click', previousSong);
function previousSong(){
     restartListSong();
    indexSong -= 1;
    if(indexSong < 0){
        indexSong = music.length-1;
        changeListMusic(2);
    }
    
   
    if(!isSongRanBtn){
        changeSong();
    }else{
        changeSongRandom();
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
    infSong();
    
}

function changeSong(){
        song.setAttribute("src", `./assets/fonts/music/${music[indexSong].fileName}`);  
    
}
function changeSongRandom(){
    let numberRan = indexSong;
    while(numberRan == indexSong){
        numberRan = Math.floor(Math.random() * music.length);
    }
    indexSong = numberRan;
    song.setAttribute("src", `./assets/fonts/music/${music[numberRan].fileName}`);  
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
function muteVolumeBar(value, obj){
    var color = "linear-gradient(90deg, #FF0000 "+ value+"%,"+ " rgb(58 38 96 / 90%)"+ value+"%)";
    obj.style.background = color;
}
function infSong(){
    
    imgSong.setAttribute("src", `${music[indexSong].img}`);
    singerSong.textContent = music[indexSong].singer;
    nameSong.textContent = music[indexSong].name;
    remainingTime.textContent = music[indexSong].timeMax;
}

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
//click song
function isSelectSong(){
    for(var i = 0;i<listSong.length;i++){
        listSong[i].onclick = function(){
            removeSongSelected();
            addSongSelected(this);
            
        }
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
    infSong();
    
    playSong();
}
function playlistSongId(){
    for(var i = 0;i<listIdSong.length;i++){
        listIdSong[i].onclick = function(){
            restartListSong();
            playSongId(this.id);
        removeSongSelectedPlay();
       
        addSongSelectedPlay(listSong[this.id]);
        SongPlayGit(this.id);
        }
    }
    
}

var idGitOld = 0;
//chạy git play
function SongPlayGit(id){
    id = indexSelectSong(id);
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
    for(var i=0;i<musicPersonnal.length;i++){
        var nameSong = musicPersonnal[i].name;
        var nameSinger = musicPersonnal[i].singer;
        const id = musicPersonnal[i].id+"";
        var imgSong = musicPersonnal[i].img;
        var timeSong =  musicPersonnal[i].timeMax;
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
//thêm bài hát musicTopSong


function addListSongtoPerformTopSong(){
    for(var i=0;i<musicTopSong.length;i++){
        var nameSong = musicTopSong[i].name;
        var nameSinger = musicTopSong[i].singer;
        const id = musicTopSong[i].id+"";
        var imgSong = musicTopSong[i].img;
        var timeSong =  musicTopSong[i].timeMax;
        var index = i+1;
        var tagName = '<li class="perform_Song-cart">\n'
                    +'<div class="perform_Song-cart-introduce">\n'
                    +'<p class="perform_Song-cart-text">#'+index+'</p>'
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
                    abc.insertAdjacentHTML('beforebegin', tagName);
    
                }
}

// hiệu ứng click trên slider
    
    function addBackgroundMenuSlider(obj){
        obj.classList.add("isSelect-nav-item");
    }
    function removeBackgroundMenuSlider(){
        const classSelect = document.querySelector(".isSelect-nav-item");
        classSelect.classList.remove("isSelect-nav-item");
    }
function changeListMusic(obj){
    switch (obj){
        case 0:{
            //sai logic length chua fix duoc chay van ok
            
            listIdSong = document.querySelectorAll(".song-cart-introduce-img i");
            listGitPlay = document.querySelectorAll(".gitPlay");
            
            
            break;
        }
        case 1:{
            break;
        }
        case 2:{
            listIdSong = document.querySelectorAll(".zingchart-listSong .song-cart-introduce-img i");
            listGitPlay = document.querySelectorAll(".zingchart-listSong .gitPlay");
           
            
            break;
        }
        case 3:{
            break;
        }
        case 4:{
            break;
        }
        case 5:{
            listIdSong = document.querySelectorAll(".newSong .song-cart-introduce-img i");
            listGitPlay = document.querySelectorAll(".newSong .gitPlay");

            break;
        }
        default: {break;};
    }
   
    playlistSongId();
    isSelectSong();
}
function restartListSong(){
    var listGit = document.querySelectorAll(".gitPlay");
    var listId = document.querySelectorAll(".song-cart-introduce-img i");
    for(var i = 0;i<listGit.length;i++){
        listGit[i].style.visibility = '';
    }
    for(var i = 0;i<listId.length;i++){
        listId[i].style.display = '';
        listId[i].style.visibility = '';
    }

}


// đổi các menu chức năng trang
//hiển thị content đầu tiên


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
// nút ngắt âm lượng
var button = document.querySelector(".fa-volume-high");
var lastVolume;
var lastColorValue;
button.onclick = function() {
    if (button.classList.contains("fa-volume-high")){
        button.classList.remove("fa-volume-high");
        button.classList.add("fa-volume-xmark");
        lastVolume = song.volume;
        lastColorValue = inVolume.value;
        song.volume = 0;
        muteVolumeBar(inVolume.value,inVolume);

    } else if (!button.classList.contains("fa-volume-high")){
        button.classList.remove("fa-volume-xmark");
        button.classList.add("fa-volume-high");
        song.volume = lastVolume;
        crossColorLeft(lastColorValue, inVolume);
    }
}



const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['19:00', '21:00', '23:00', '01:00', '03:00', '05:00', '07:00', '09:00', '11:00', '13:00', '15:00', '17:00'],
        datasets: [{
            label: 'Khúc lệ sầu ',
            data: [8,6,8,14,18,22,24,25,27,26,29,20],

            borderColor: [
            
                
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)'
                
            ],
            borderWidth: 1
        },
        {
            label: 'Tòng phu',
            data: [7,5,7,9,6,14,16,18,21,20,18,15],

            borderColor: [
            
                
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)'
                
                
                
            ],
            borderWidth: 1
        },
        {
            label: 'Có chơi có chịu',
            data: [3,4,5,7,9,10,11,13,11,9,8,6],

            borderColor: [
            
                
                'rgba(255, 159, 64, 1)',
                 'rgba(255, 159, 64, 1)',
                 'rgba(255, 159, 64, 1)',
                 'rgba(255, 159, 64, 1)',
                 'rgba(255, 159, 64, 1)',
                 'rgba(255, 159, 64, 1)',
                 'rgba(255, 159, 64, 1)',
                 'rgba(255, 159, 64, 1)',
                 'rgba(255, 159, 64, 1)',
                 'rgba(255, 159, 64, 1)',
                 'rgba(255, 159, 64, 1)',
                 'rgba(255, 159, 64, 1)'
                
            ],
            borderWidth: 1
        }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
//chuyển đăng nhập đăng ký
const btn_login = document.querySelector(".form-register .formSelect .fun-login");
const btn_register = document.querySelector(".form-login .formSelect .fun-register");
const obLogin = document.querySelector(".form-login");
const obRegister = document.querySelector(".form-register");

btn_login.addEventListener("click",clickBtnLogin);
function clickBtnLogin(){
    
    obRegister.style.display = 'none';
    obLogin.style.display = '';

}

btn_register.addEventListener("click",clickBtnResgister);
function clickBtnResgister(){
    obRegister.style.display = '';
    obLogin.style.display = 'none';

}
// đóng form user về menu chính
const formUser = document.querySelector(".form-user");
function closeFormUser(){
        obRegister.style.display = 'none';
        obLogin.style.display = '';
        formUser.style.display = 'none';
}

// hiển thị form đăng nhập
const clickLogin = document.querySelector(".textLogin");
clickLogin.addEventListener("click",showFormLogin);
function showFormLogin(){
    formUser.style.display = '';
}
// xử lý đăng nhập
const avatar = document.querySelector(".avatar img");
const lUserName = document.querySelector("#loginUser");
const lPasswrod = document.querySelector("#loginPass");
const formLogin = document.getElementById("form-login");
const loginSubmit = document.getElementById("login");
loginSubmit.addEventListener("click",loginClick);
function loginClick(){
    var userName = lUserName.value;
    var password = lPasswrod.value;
    var index = checkUser(userName,password);
    if(index != -1){
        alert("Đăng nhập thành công");
        changeAvatar(index);
        closeFormUser();
        document.querySelector(".scrollbar_isMark-card").style.display = 'none';
    }else{
        alert("Sai tài khoản hoặc mật khẩu");
    }
}
function changeAvatar(index){
    avatar.setAttribute("src", `${listUser[index].img}`);
    avatar.style.display ='';
    clickLogin.style.display = 'none';
}

function checkUser(username, password){
    var index = -1;
    for(var i = 0;i<listUser.length;i++){
        if(listUser[i].userName == username && listUser[i].password == password){
            index = i;
            break;
        }
    }
    
    return index;
}
// xử lý đăng ký
const rUserName = document.querySelector("#reUsername");
const rPassword = document.querySelector("#rePassword");
const rConfirmPassword = document.querySelector("#reConfirmPassword");
const re = document.getElementById("register");
re.addEventListener("click",register);
function register(){
    
    var username = rUserName.value;
    var pwd = rPassword.value;
    var confirmPassword = rConfirmPassword.value;
    var index = checkUser(username,pwd);
    if(index != -1){
        alert("Trùng lặp tên khoản đã có");
    }else if(pwd != confirmPassword)
        alert("Mật khẩu không trùng khớp");
    else{
        var user = {
            userName:username,
            password:pwd,
            img:"./assets/fonts/img/LeBaoBinh.jpg"
        }
        listUser.push(user);
        alert("tạo tài khoản thành công");
        clickBtnLogin();
    }

}
// đăng xuất

