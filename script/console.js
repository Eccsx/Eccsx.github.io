// Variable

let consoleLineCount = 0;
const consoleElement = document.getElementById('console');
let isResponse = false;
let input;
// Key listener

document.addEventListener('keyup', (e) => {
  if (e.code == "Enter") {
    if ((input = getConsoleInput()) in cmdList) {
      cmdList["" + input]();
    }
    else {
      error();
    }
    saveConsoleInput(input, isResponse);
    nextConsoleInput();
  }
});

function getConsoleInput() {
  return document.getElementById('console-input').value;
}

function nextConsoleInput() {
  isResponse = false;
  document.getElementById('console-input').value = "";
}

function saveConsoleInput(input) {
  const last = document.createElement('div');
  last.className = "old-input";
  last.innerHTML = "?:\\Thomas_Mattone> " + input;
  consoleElement.insertBefore(last, consoleElement.children[consoleLineCount]);
  consoleLineCount += (isResponse ? 2 : 1);
}

// Commands

const cmdList = {
  "why": () => { why();},
  "clear": () => { clear();},
}

function why() {
  createResponse("because.");
}

function clear() {
  $('.old-input').remove();
  $('.resp-input').remove();
  consoleLineCount = 0;
}

function error() {
  createResponse("Command not recognized by the system.");
}

function createResponse(msg) {
  isResponse = true;
  const resp = document.createElement('div');
  resp.className = "resp-input";
  resp.innerHTML = msg;
  consoleElement.insertBefore(resp, consoleElement.children[consoleLineCount]);
}