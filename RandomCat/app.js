const BTN = document.querySelector(".btn");
const IMG = document.querySelector(".img");
const URL = "http://aws.random.cat/meow";

async function fetchHandler() {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        IMG.src = data.file;
    } catch (error) {
        console.log(error);
    }
}

BTN.addEventListener("click", () => {
    let isLoaded = IMG.complete;
    if (isLoaded) {
        fetchHandler();
    }
});