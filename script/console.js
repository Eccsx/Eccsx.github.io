// Variable
let consoleLineCount = 0;
const console = document.getElementById('console');
let isResponse = false;
// Key listener
document.addEventListener('keyup', (e) => {
  if (e.code == "Enter") {
    const input = getConsoleInput();
    if (input == "why") {
      whyCmd();
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
  console.insertBefore(last, console.children[consoleLineCount]);
  consoleLineCount += (isResponse ? 2 : 1);
}

// Commands

function whyCmd() {
  isResponse = true;
  const rep = document.createElement('div');
  rep.className = "resp-input";
  rep.innerHTML = "because.";
  console.insertBefore(rep, console.children[consoleLineCount]);
}