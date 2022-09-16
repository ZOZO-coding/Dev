const pads = document.querySelectorAll('.pad');
const gifContainer = document.querySelector('.gif');
const sounds = [
    "./sounds/Apology.mp3",
    "./sounds/As you wish.mp3",
    "./sounds/Dont fail me again.mp3",
    "./sounds/Force.mp3",
    "./sounds/He is here.mp3",
    "./sounds/I am your father.mp3",
    "./sounds/I have you now.mp3",
    "./sounds/Join us.mp3",
    "./sounds/What Happened.mp3",
    "./sounds/Yes my master.mp3"
]


for (let pad of pads) {
    pad.addEventListener('click', playSound);
}


// need to improve
function playSound() {
    let audio = audioGenerator();
    audio.play();
    const curImg = gifGenerator();
    curImg.src = '';
    gifContainer.appendChild(gifGenerator());
}

function audioGenerator() {
    const audio = document.createElement("AUDIO");
    const num = randomGenerator(10);
    audio.src = sounds[num];
    return audio;
}

function randomGenerator(num) {
    return Math.floor(Math.random() * num) + 1;
}

function gifGenerator() {
    const gif = document.createElement("img");
    gif.src = "https://media1.giphy.com/media/1FZqAOn4hzGO4/200w.gif?cid=82a1493bxgvu6plng7pdrjrxgh1yy7g0bghb6wom2kjfucj0&rid=200w.gif&ct=g"
    return gif;
}