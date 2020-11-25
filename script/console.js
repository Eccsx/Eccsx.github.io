// Variable

let consoleLineCount = 0;
const consoleElement = document.getElementById('console');
let isResponse = false;
let input;

// Key listener

document.addEventListener('keyup', (e) => {
  if (e.code == "Enter") {
    if ((input = getConsoleInput()) in CMD) {
      CMD["" + input]();
    }
    else if (FOLDER.includes(input)) {
      closeOpenFolder();
      revealFilesOf(input);
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

const CMD = {
  "why": () => { why();},
  "clear": () => { clear();}
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

function revealFilesOf(folderName) {
  const files = $('#' + folderName + ' .file.hidden');
  files.removeClass('hidden');
  files.addClass('revealed')
}

function closeOpenFolder() {
  const files = $('.file.revealed');
  files.removeClass('revealed');
  files.addClass('hidden');
}

function createResponse(msg) {
  isResponse = true;
  const resp = document.createElement('div');
  resp.className = "resp-input";
  resp.innerHTML = msg;
  consoleElement.insertBefore(resp, consoleElement.children[consoleLineCount]);
}

// Folders and Files

const FOLDER = [
  "Identity",
  "Accomplishments",
  "Missions_History",
  "Skills",
  "Requests"
];

function generateRandomSecretFileName() {
  const secretFiles = $('.file.restricted');
  secretFiles.each(function () {
    s1 = Math.random().toString(36).substring(2, 10);
    s2 = Math.random().toString(36).substring(2, 10);
    this.innerHTML = s1 + s2 + ".lck";
  });
}