const feedback = document.querySelector("#feedback");
const input = document.querySelector("#contactInfo");
const div = document.querySelector("#feedbackInfo");

const breakfastMenu = document.querySelector('.breakfast');

const menu = {
    brunch: ["english breakfast", "bread and butter", "salad"],
    lunch: ["pasta", "fried egg", "ramen", "tantan noodle"],
    dinner: ["steak", "fried chicken", "surf and turf"],
    drinks: ["mimosa", "whiskey", "bloody marry", "sangria", "coffee"]
}

const {brunch, lunch, dinner, drinks} = menu;

feedback.addEventListener("submit", function(e) {
    e.preventDefault();
    const value = input.value;
    const msg = document.createElement("div")
    msg.innerText = value;
    div.append(msg);
})

for (let bru of brunch) {
    const brunchItem = document.createElement("p")
    brunchItem.innerText = bru
    div.append(brunchItem)
}