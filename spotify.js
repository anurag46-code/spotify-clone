console.log("Welcome to spotify")
let songIndex=0;
let audioElement =new Audio("/Spotify Clone/songs/1.mp3");
let masterPlay=document.getElementById("masterPlay");
let progressBar =document.getElementById("progressBar");
let gif=document.getElementById("gif");
let gif2=document.getElementById("gif2");
let songItems=Array.from(document.getElementsByClassName("songItem"));
let masterSongName=document.getElementById("masterSongName")

let songItemPlay = Array.from(document.getElementsByClassName("songItemPlay"));

let songDis=document.getElementById("songDis");
// let bgimg=document.getElementById("bgimg");


let songs=[
    {songName: "......Let Me Love You.....", filePath: "/Spotify Clone/songs/1.mp3", coverPath:"/Spotify Clone/covers/1.jpg"},
    {songName: ".......Shape Of You......", filePath: "/Spotify Clone/songs/2.mp3", coverPath:"/Spotify Clone/covers/2.jpg"},
    {songName: "........Make You Mine.......", filePath: "/Spotify Clone/songs/3.mp3", coverPath:"/Spotify Clone/covers/3.jpg"},
    {songName: "Love Me Like You Do", filePath: "/Spotify Clone/songs/4.mp3", coverPath:"/Spotify Clone/covers/4.jpg"},
    {songName: "...........Perfect..........", filePath: "/Spotify Clone/songs/5.mp3", coverPath:"/Spotify Clone/covers/5.jpg"},
    {songName: "..........Play Date.........", filePath: "/Spotify Clone/songs/6.mp3", coverPath:"/Spotify Clone/covers/6.jpg"},
    {songName: ".......Girls Like You.......", filePath: "/Spotify Clone/songs/7.mp3", coverPath:"/Spotify Clone/covers/7.jpg"},
    {songName: "...........Memories.........", filePath: "/Spotify Clone/songs/8.mp3", coverPath:"/Spotify Clone/covers/8.jpg"},
    {songName: "......Ishq Wala Love........", filePath: "/Spotify Clone/songs/9.mp3", coverPath:"/Spotify Clone/covers/9.jpg"},
    {songName: ".....Kabhi Kabhi Aditi.....", filePath: "/Spotify Clone/songs/10.mp3", coverPath:"/Spotify Clone/covers/10.jpg"}
]

songItems.forEach((element,i)=>{
    // console.log(Element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;

    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})



const makeAllPlays = ()=>{
     songItemPlay.forEach(element => {
        
        element.classList.remove("fa-circle-pause")
        element.classList.add("fa-circle-play")

     });
}

songItemPlay.forEach((element,i)=>{

    element.addEventListener('click',(e)=>{
        // console.log(e.target)
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src=`/Spotify Clone/songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        songDis.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        gif2.style.opacity=1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");


    })
})

document.getElementById("previous").addEventListener('click',()=>{
    if(songIndex>0){
        songIndex-=1;
    }
    else{
        songIndex=9;
    }

    audioElement.src=`/Spotify Clone/songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    songDis.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    gif2.style.opacity=1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    
})

document.getElementById("next").addEventListener('click',()=>{
    if(songIndex>9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }

    audioElement.src=`/Spotify Clone/songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    songDis.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    gif2.style.opacity=1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    
})



// audioElement.play();

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity=1;
        gif2.style.opacity=1;
        




    }

    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity=0;
        gif2.style.opacity=0;


    }

})

audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value=progress;
})

progressBar.addEventListener('change',()=>{
    audioElement.currentTime=(audioElement.duration*progressBar.value)/100;
})