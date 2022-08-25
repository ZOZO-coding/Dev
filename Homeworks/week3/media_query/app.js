const btn1 = document.querySelector(".button1");
const btn2 = document.querySelector(".button2");
const btn3 = document.querySelector(".button3");
const btns = document.querySelectorAll("button");
const changeBackgroundBtn = document.querySelectorAll(".changeColor");
let body = document.querySelector("body");
const firstMovie = document.querySelector(".first-movie");
const secondMovie = document.querySelector(".second-movie");
const thirdMovie = document.querySelector(".third-movie");

const movies = [firstMovie, secondMovie, thirdMovie];

const randomNum = () => {
    return Math.floor(Math.random() * 3);
}

const randomColor = () => {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    console.log(`rgb(${r},${g},${b})`);
    return `rgb(${r},${g},${b})`;
}

btn1.addEventListener('click', () => {
    firstMovie.style.display = "none";
    let randomNumber = randomNum();
    const currentMovie = movies[randomNumber];
    currentMovie.style.display = "block";
})
btn2.addEventListener('click', () => {
    secondMovie.style.display = "none";
    let randomNumber = randomNum();
    const currentMovie = movies[randomNumber];
    currentMovie.style.display = "block";
})
btn3.addEventListener('click', () => {
    thirdMovie.style.display = "none";
    let randomNumber = randomNum();
    const currentMovie = movies[randomNumber];
    currentMovie.style.display = "block";
})

for (changeBtn of changeBackgroundBtn) {
    changeBtn.addEventListener('click', () => {
        body.style.backgroundColor = randomColor();
    })
}