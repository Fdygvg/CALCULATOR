const keys = document.getElementById("keys");
let input = document.querySelector(".calcInput");
let calc = [];
keys.addEventListener("click", function (e) {
  const button = e.target.closest("button");
  if (!button) return;
  const value = button.getAttribute("id");
  if (!isNaN(value)) {
    calc.push(value);
  } else if (value === "clear") {
    calc = [];
  } else if (value === "=")
    try {
      const result = eval(calc.join(""));
      calc = [result];
    } catch (err) {
      calc = [];
      alert("invalid calculation!");
    }
  else {
    calc.push(value);
  }

  input.value = calc.join("");
  console.log(calc);
});
