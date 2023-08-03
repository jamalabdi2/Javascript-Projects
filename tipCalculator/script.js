const billInput = document.getElementById("bill");
const buttons = document.querySelectorAll(".btn");
const customTip = document.getElementById("customTip");
const numberOfPeople = document.getElementById("numberOfPeople");
const tipDisplay = document.getElementById("tipDisplay");
const tipAmountDisplay = document.getElementById("tipAmountDisplay");
const resetButton = document.getElementById("reset");

// Function to calculate the tip amount and update the display
function calculateTip() {
  const billAmount = parseFloat(billInput.value);
  const people = parseInt(numberOfPeople.value) || 1;

  let tipPercentage = 0;
  if (customTip.value) {
    tipPercentage = parseFloat(customTip.value);
  } else {
    tipPercentage = parseFloat(this.value);
  }

  if (!isNaN(billAmount) && billAmount > 0 && !isNaN(people) && people > 0) {
    const tipAmount = (billAmount * tipPercentage) / 100;
    const tipPerPerson = tipAmount / people;

    tipDisplay.textContent = tipPerPerson.toFixed(2);
    tipAmountDisplay.textContent = tipAmount.toFixed(2);
  } else {
    tipDisplay.textContent = "00.00";
    tipAmountDisplay.textContent = "00.00";
  }
}

// Event listener for tip buttons and custom tip input
buttons.forEach(function (button) {
  button.addEventListener("click", calculateTip);
});

customTip.addEventListener("input", calculateTip);

// Event listener for the number of people input
numberOfPeople.addEventListener("input", calculateTip);

// Event listener for the RESET button
resetButton.addEventListener("click", function () {
  billInput.value = "";
  customTip.value = "";
  numberOfPeople.value = "";
  tipDisplay.textContent = "00.00";
  tipAmountDisplay.textContent = "00.00";
});
