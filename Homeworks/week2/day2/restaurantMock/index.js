const feedback = document.querySelector("#feedback");
const input = document.querySelector("#contactInfo");
const div = document.querySelector("#feedbackInfo");

feedback.addEventListener("submit", function(e) {
    e.preventDefault();
    const value = input.value;
    const msg = document.createElement("div")
    msg.innerText = value;
    div.append(msg);
})