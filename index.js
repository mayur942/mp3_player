// function play(){
//     // var music=document.getElementById('music');
//     // if (music.paused){
//     //     music.play();
//     //     $('play').removeClass('glyphicon-play-circle')

//     // var music=new music();
//     // function playmusic(file){
//     //     music.pause();
//     //     music=new music(file);
//     //     music.play();
//     // }

// }
var bgimg=document.getElementById("cover");
var sName=document.getElementById("SN");
var aName=document.getElementById("AN");
var level=document.getElementById("Music");
var list = 0;
var options=document.getElementById("options");
var currSong=0;
var plm=document.getElementById("Music");
console.log(plm)

function playmusic(){
    plm.play(); 
}

function pausemusic(){
plm.pause();
}

function nextmusic(){
    currSong+=1;
    // console.log(mySongs)
    if(currSong>list-1){
        
        currSong=currSong%list;
    }
    console.log(list);
    mySongs(currSong);
}

function previousmusic(){
    currSong-=1;
    mySongs(currSong);
}

function setVolume(){

}

function randommusic(){
    // currSong=
}

var mySongs=(currSong)=>fetch("./song.json").then(res=>{
    return res.json();
})
.then(data=>{
    // console.log(data[currSong].songSrc)
    plm.src=data[currSong].songSrc;
    bgimg.src=data[currSong].songBgImage;
    sName.innerHTML=data[currSong].songName;
    aName.innerHTML=data[currSong].artistName;
    // console.log(data.length);
    Music.autoplay()=true;
    Music.autoStart()=true;
    this.list = data.length;
})

// function manage(){
//     // currSong.volume = volume_slider.value / 100;
//     ['click','hover'].forEach( evt => 
//         element.addEventListener(evt, dosomething, false)
//     );
// }

mySongs(currSong);




// function getNextMusic(){
//     if(this.musicArray && this.i>-1&&this.i<this.musicArray.length){
//         const nextmusic=this.musicArray[this.i+1];
//         return nextmusic;
//     }
//     else{
//         return null
//     }
// }

// function getPreviousMusic(){
//     if(this.musicArray &&this.i>0&&this.i<this.musicArray.length){
//         const nextmusic=this.musicArray[this.i-1];
//         return nextmusic;
//     }
//     else{
//         return null;
//     }
// }

// function loadMusic(music, music_playlist="music"){
//     if(music_playlist==="playlist"){
//         this.musicArray=music;
//         music.forEach(music=>{this.audio.src=music.src.audioURL;
//         this.audio.load
//         })
//     }
//     else if(music_playlist=="music"){
//         this.musicArray.push(music)
//     }
// }

// function playMusic(music){
//     this.music=music;
//     this.audio.src=music.src.audioURL;
//     this.play(music);
// }

// function next(){
//     // const nextMusic=music.getNextMusic()
//     // if(nextMusic){
//     //     music.playMusic(nextMusic)
//     // }
// }

// function previous(){
//     const previousMusic=music.getPreviousMusic()
//     if(previousMusic){
//         music.playMusic(previousMusic)
//     }
// }