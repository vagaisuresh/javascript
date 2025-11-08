const firstNumberEl = document.getElementById("firstNumber");
const secondNumberEl = document.getElementById("secondNumber");
const resultEl = document.getElementById("result");

const multiplyButtonEl = document.getElementById("multiplyButton");
const divideButtonEl = document.getElementById("divideButton");

multiplyButtonEl.addEventListener("click", calculateMultiply);          // Uncoupled or loosely coupled with HTML (modern approach)
divideButtonEl.addEventListener("click", calculateDivide);

function calculateAdd() {
    const firstNumber = firstNumberEl.value;
    const secondNumber = secondNumberEl.value;

    let result = Number(firstNumber) + Number(secondNumber);
    resultEl.value = result;
}

function calculateSubtract() {
    const firstNumber = firstNumberEl.value;
    const secondNumber = secondNumberEl.value;

    let result = Number(firstNumber) - Number(secondNumber);
    resultEl.value = result;
}

function calculateMultiply() {
    const firstNumber = firstNumberEl.value;
    const secondNumber = secondNumberEl.value;

    let result = Number(firstNumber) * Number(secondNumber);
    resultEl.value = result;
}

function calculateDivide() {
    const firstNumber = firstNumberEl.value;
    const secondNumber = secondNumberEl.value;

    let result = Number(firstNumber) / Number(secondNumber);
    resultEl.value = result;
}