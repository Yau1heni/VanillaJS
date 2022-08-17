const BTN = document.getElementById("btn");
const COLOR = document.querySelector(".color");

const hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
]

BTN.addEventListener("click", () => {
    let hexColor = generateHex()
    document.body.style.backgroundColor = hexColor
    COLOR.textContent = hexColor
})

let generateHex = () => {
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    return hexColor
}

let getRandomNumber = () => Math.floor(Math.random() * hex.length)
