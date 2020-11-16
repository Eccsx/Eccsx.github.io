// Variable
let oldInputCount = 0;

// Key listener
document.addEventListener('keyup', (e) => {
  if (e.code == "Enter") {
    const input = getConsoleInput();
    saveConsoleInput(input);
    clearConsoleInput();
  }
});

function getConsoleInput() {
  return document.getElementById('console-input').value;
}

function clearConsoleInput() {
  document.getElementById('console-input').value = "";
}

function saveConsoleInput(input) {
  const console = document.getElementById('console');
  const last = document.createElement('div');
  last.className = "old-input";
  last.innerHTML = input;
  console.insertBefore(last, console.children[oldInputCount]);
  oldInputCount ++;
}