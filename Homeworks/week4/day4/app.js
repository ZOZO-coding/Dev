// make radio object, properties: stations: [station objects]
// methods: changes the station randomly, pick a song, and log "Now Playing:" + song,title + "by" + song.artist"

// structural hierarchy: radio object -> station object -> song object

// make a song object, song object: properties: title and artist
const californiaLove = {
    title: "California Love",
    artist: "2-pac",
    src: "./songs/California_Love.mp3"
}
const mockingBird = {
    title: "Mocking Bird",
    artist: "Eminem",
    src: "./songs/Eminem_Mockingbird.mp3"
}
const empireStateOfMind = {
    title: "Empire State Of Mind",
    artist: "Jay-Z",
    src: "./songs/Empire_State_Of_Mind.mp3"
}

// make a station object, for each station object: properties: name(string), songs(array of songs objects)
const hipHop = {
    name: "Hip Hop",
    songs: [californiaLove, mockingBird, empireStateOfMind]
}

/* ---------------------------------------------- */

const imperialMarch = {
    title: "Imperial March (Star Wars)",
    artist: "John Williams",
    src: "./songs/The_Imperial_March.mp3"
}
const indianaJones = {
    title: "Indiana Jones",
    artist: "John Williams",
    src: "./songs/Indiana_Jones.mp3"
}
const missionImpossible = {
    title: "Mission Impossible",
    artist: "Lalo Schifrin",
    src: "./songs/Missionimpossible.mp3"
}

const movieTheme = {
    name: "Movie Theme",
    songs: [imperialMarch, indianaJones, missionImpossible]
}

/* ---------------------------------------------- */

const symphonyNo5 = {
    title: "Symphony No.5 in C minor",
    artist: "Beethoven ",
    src: "./songs/symphony-no-5.mp3"
}
const eine = {
    title: "Eine kleine Nachtmusik",
    artist: "Mozart",
    src: "./songs/eine-kleine-nachtmusik.mp3"
}
const toccata = {
    title: "Toccata and Fugue in D minor",
    artist: "J.S. Bach",
    src: "./songs/toccata-and-fugue-in-d-minor.mp3"
}

const classic = {
    name: "Classics",
    songs: [symphonyNo5, eine, toccata]
}

/* ---------------------------------------------- */

const displayBtn = document.getElementById('generate-song');
const pauseBtn = document.getElementById('pause-song');
const songDisplay = document.querySelector('.song-display');

// make a radio object:
const radio = {
    stations: [
        hipHop,
        movieTheme,
        classic
    ],

    // randomly pick a station and display information
    pickStation: () => {
        // generate a number between 0 - 4 for stations, and 0 - 3 for the songs
        const randStationNum = Math.floor(Math.random() * 3);
        const randSongNum = Math.floor(Math.random() * 3);
        // pick a station in radio stations
        const curStation = radio.stations[randStationNum];
        const curSong = curStation.songs[randSongNum];
        // play the song
        const songElement = document.querySelector(".playing-song");
        songElement.setAttribute("src", curSong.src);
        songElement.play();
        songDisplay.append(songElement);
        // log the message
        return `Now Playing: ${curSong.title} by ${curSong.artist}, Category: ${curStation.name}`;
    }
}

// add click event to the display song button
displayBtn.addEventListener('click', display);

// callback function to actually do the displaying job
function display() {
    const msg = radio.pickStation();
    const display = document.createElement('h3');
    display.innerText = msg;
    songDisplay.appendChild(display);
}

// callback function to pause the current playing song
pauseBtn.addEventListener('click', pause);
function pause() {
    const playingSong = document.querySelector(".playing-song");
    playingSong.pause();
}