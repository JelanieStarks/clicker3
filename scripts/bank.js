function increaseBank() {
    bank += 1;
    updateDisplay();
    document.getElementById("bank").innerHTML = "Bank: " + bank;
}

function interest(interestRate) {
  setInterval(function() {
      bank += Math.round(interestRate);
      document.getElementById("bank").innerHTML = "Bank: " + bank;
  }, 1000);
}
