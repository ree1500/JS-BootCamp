function tables() {
  let res;
  let n;
  let number = Number(document.getElementById("number").value);
  for (n = 1; n <= 10; n++) {
    res = number + "*" + n + "=" + number * n;
    document.getElementById("tables").innerText = res;
  }
}
