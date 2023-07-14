function check() {
  let age = document.getElementById("age").value;

  if (age >= 18) {
    document.getElementById("result").innerText = "Eligible to Vote";
  } else {
    document.getElementById("result").innerText = "Not Eligible to Vote";
  }

  let clicked = document.getElementById("clicked");
  clicked.style.display = "none";

  document.getElementById("age").style.display = "none";
}
