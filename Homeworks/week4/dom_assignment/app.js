const changeBgBtn = document.querySelector('.change-background-color');
const generateRdBtn = document.querySelector('.generate-random-number');
const changeTextColor = document.querySelector('.change-text-color');
const body = document.body;
const container = document.querySelector('.random-num-container');

changeBgBtn.addEventListener('click', () => randomBgColor());

const randomBgColor = () => {
    body.style.backgroundColor = 'pink';
}

generateRdBtn.addEventListener('click', () => {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    const text = document.createElement('div');
    text.innerText = randomNum;
    console.log(text);
    console.log(container);
    container.appendChild(text);
})

changeTextColor.addEventListener('mouseover', () => {
    changeTextColor.style.color = 'red';
})