// Handles to DOM elements
const log = document.getElementById('log');
const logContainer = document.getElementById('logContainer');
const form = document.getElementById('form');
const input = document.getElementById('userInput');


// Function definitions
function logMessage(message) {
    //Append the message to our log table
    let newRow = log.insertRow();
    let newCell = newRow.insertCell();
    let newTextNode = document.createTextNode(message);
    newCell.appendChild(newTextNode);

    //Scroll the log area to the bottom to display the newest messages
    logContainer.scrollTop = logContainer.scrollHeight;
};

function doPost(message) {
    return fetch('/rest/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({data: message})
    });
};

function sendMessage(message) {
    doPost(message)
        .then(response => response.text())
        .then(logMessage);
};


// Event bindings
form.addEventListener('submit', function(event) {
    let message = input.value;
    input.value = '';

    logMessage(message);
    sendMessage(message);

    event.preventDefault();
});