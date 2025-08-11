let display = document.getElementById("display");
let currentInput = "";

function appendNumber(num) {
  if (currentInput === "0" && num !== ".") {
    currentInput = num;
  } else {
    currentInput += num;
  }
  updateDisplay();
}

function appendOperator(op) {
  const lastChar = currentInput.slice(-1);
  if ("+-*/".includes(lastChar)) {
    currentInput = currentInput.slice(0, -1) + op;
  } else {
    currentInput += op;
  }
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  updateDisplay("0");
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay();
  } catch {
    updateDisplay("Error");
    currentInput = "";
  }
}

function updateDisplay(value) {
  display.textContent = value || currentInput || "0";
}

// Theme Toggle
document.getElementById("toggle-theme").addEventListener("change", function () {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});
