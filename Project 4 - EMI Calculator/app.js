function calculate() {
  let amount = document.getElementById("amount");
  let year = document.getElementById("year");
  let rate = document.getElementById("rate");

  let result = (amount.value * year.value * rate.value) / 100;

  document.getElementById("res").innerHTML = result;
}
