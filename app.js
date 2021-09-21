const billAmt = document.querySelector("#bill");

const cashAmt = document.querySelector("#cash-given");
const checkButton = document.querySelector(".btn-check");
const message = document.querySelector("#error-message");
const notes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
checkButton.addEventListener("click", function amountValidation() {
  hideMessage();

  console.log(typeof billAmt.value);
  if (Number(billAmt.value) > 0) {
    if (Number(billAmt.value) <= Number(cashAmt.value)) {
      const change = cashAmt.value - billAmt.value;
      calculateChange(change);
    } else {
      showMessage("Do you wanna wash Plates?");
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});

function calculateChange(change) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(change / availableNotes[i]);

    change = change % availableNotes[i];
    notes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
