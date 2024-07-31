let display = document.getElementById('display');
let historyList = document.getElementById('historyList');
let currentInput = '';
let history = [];
let historyElement=document.getElementsByClassName("history")[0];
function appendToDisplay(value) {
    currentInput += value;
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.textContent = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput;
}

function calculate() {
    try {
        let result = eval(currentInput);
        display.textContent = result;

        // Save the calculation to history
        saveToHistory(currentInput + ' = ' + result);
        currentInput = result.toString();
    } catch (e) {
        display.textContent = 'Error';
        currentInput = '';
    }
}

function saveToHistory(calculation) {
    // Add the calculation to the start of the history array
    history.unshift(calculation);

    // Limit history to the last 5 entries
    if (history.length > 5) {
        history.pop();
    }

    // Update the history display
    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    // Clear the current history display
    historyList.innerHTML = '';

    // Populate the history display with the latest entries
    history.forEach(item => {
        let listItem = document.createElement('li');
        listItem.textContent = item;
        historyList.appendChild(listItem);
    });
}

function clearHistory() {
    // Clear the history array
    history = [];

    // Update the history display
    updateHistoryDisplay();
}

function showHistory(){
    historyElement.classList.toggle("hide");
}