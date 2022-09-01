// make radio object, properties: stations: [station objects]
// methods: changes the station randomly, pick a song, and log "Now Playing:" + song,title + "by" + song.artist"

// structural hierarchy: radio object -> station object -> song object

// make a song object, song object: properties: title and artist
const californiaLove = {
    title: "California Love",
    artist: "2-pac"
}
const mockingBird = {
    title: "Mocking Bird",
    artist: "Eminem"
}
const empireStateOfMind = {
    title: "Empire State Of Mind",
    artist: "Jay-Z"
}

// make a station object, for each station object: properties: name(string), songs(array of songs objects)
const hipHop = {
    name: "hipHop",
    songs: [californiaLove, mockingBird, empireStateOfMind]
}

/* ---------------------------------------------- */

const imperialMarch = {
    title: "Imperial March (Star Wars)",
    artist: "John Williams"
}
const indianaJones = {
    title: "Indiana Jones",
    artist: "John Williams"
}
const missionImpossible = {
    title: "Mission Impossible",
    artist: "Lalo Schifrin"
}

const movieTheme = {
    name: "Movie Theme",
    songs: [imperialMarch, indianaJones, missionImpossible]
}

/* ---------------------------------------------- */

const symphonyNo5 = {
    title: "Symphony No.5 in C minor",
    artist: "Beethoven "
}
const eine = {
    title: "Eine kleine Nachtmusik",
    artist: "Mozart"
}
const toccata = {
    title: "Toccata and Fugue in D minor",
    artist: "J.S. Bach"
}

const classic = {
    name: "Classics",
    songs: [symphonyNo5, eine, toccata]
}

/* ---------------------------------------------- */

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
        // log the message
        return `Now Playing: ${curSong.title} by ${curSong.artist}`;
    }
}

const playBtn = document.getElementById('generate-song');
const songDisplay = document.querySelector('.song-display');

playBtn.addEventListener('click', display);

function display() {
    const msg = radio.pickStation();
    const display = document.createElement('h3');
    display.innerText = msg;
    songDisplay.appendChild(display);
}