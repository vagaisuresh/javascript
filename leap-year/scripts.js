let yearEl = document.getElementById("year");
let resultEl = document.getElementById("result");

document.getElementById("butLeapYear").addEventListener("click", isValidYear);

function isValidYear() {
    let year = Number(yearEl.value);
    
    if (year !== 0 && !isNaN(year) && Number.isInteger(year)) {
        isLeapYear(year);
    } else {
        resultEl.textContent = "Enter a valid year!";
        resultEl.style.color = "red";
    }
}

function isLeapYear(year) {
    let result;

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                result = "Yes, it is a leap year";
            } else {
                result = "Not a leap year";
            }
        } else {
            result = "Yes, it is a leap year";
        }
    } else {
        result = "Not a leap year";
    }

    resultEl.textContent = result;
    resultEl.style.color = "green";
}