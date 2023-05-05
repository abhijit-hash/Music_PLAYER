const music = document.querySelector("audio");
const play = document.getElementById("play");
const img = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [{
        name: "1",
        title: "Choo Lo",
        artist: "The Local Train",
    },
    {
        name: "2",
        title: "Pehli Dafa",
        artist: "Atif Aslam",
    },
    {
        name: "3",
        title: "Maiyya Mainu",
        artist: "Sachet Tandon",
    },
];

let isPlaying = false;

const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};

const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

play.addEventListener('click', () => {
    /* if (isPlaying) {
         pauseMusic();
     } else {
         playMusic();
     } */

    isPlaying ? pauseMusic() : playMusic();
});
const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = songs.name + ".mp3";
    img.src = songs.name + ".jpg";
};

songIndex = 0;

//  loadSong(songs);

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
};

const prevSong = () => {

};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);
