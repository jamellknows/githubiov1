const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');


//Song title


const songs =['Crypto', 'Backwards', 'GummyBearFloss Freestyle', 'Bully', 'Duck Duck Goose', 'Hens In A Cage', 'Kylo Ken', 'Seeing Green Freestyle', 'XBoxX', 'Van Gogh'];

//keep track of songs

let songIndex = 0;

//Initially load song info into DOM;

loadSong(songs[songIndex]);

//updatesong details

function loadSong(song)
{
    title.innerHTML = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}

//Event listeners

function playSong()
{
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('pause')
    audio.play()
}

function pauseSong(){
    musicContainer.classList.remove('play');
    musicContainer.classList.add('pause');
    audio.pause()    

}

function prevSong(){
    songIndex--;
    if(songIndex< 0)
    {
        songIndex = songs.length -1;
    }
    loadSong(songs[songIndex]);
    playSong()
}

function nextSong(){
    songIndex++;
    if(songIndex > songs.length -1)
    {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();

}

function updateProgress(e){
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime /duration) * 100;
    progress.style.width = `${progressPercent}%`; 
}

function setProgress(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX/width) * duration
}


playBtn.addEventListener('click', () =>{
    const isPlaying = musicContainer.classList.contains('play');
    if(isPlaying)
    {
        pauseSong()
    }else{
        playSong()
    }
})


prevBtn.addEventListener('click', ()=>{
    prevSong();
});
nextBtn.addEventListener('click', ()=>{
    nextSong();
});

audio.addEventListener('timeupdate', updateProgress)
progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong)
