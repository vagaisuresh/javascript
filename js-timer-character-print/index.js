let title = window.document.title;
let titleSpanEl = document.getElementById("titleSpan");

let currentIndex = 0;
let characters = [];

for (let i = 0; i < title.length; i++) {
    characters.push(title.charAt(i).toUpperCase());
}

function printCharacters() {
    titleSpanEl.textContent += characters[currentIndex];
    currentIndex++;

    if (currentIndex === characters.length) {
        clearInterval(si);
        console.log("Timer terminated.");
    }
}

let si = setInterval(printCharacters, 100);

console.log(title);
console.log(characters);
