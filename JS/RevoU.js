let celcius = document.getElementById("celcius");
let fahrenheit = document.getElementById("fahrenheit");
let caraKalkulasi = document.getElementById("cara-kalkulasi");
let form = document.querySelector(".submit-button");
let reset = document.querySelector(".reset-button");

celcius.oninput = () => {
  form.addEventListener("click", () => {
    let output = (parseFloat(celcius.value) * 9) / 5 + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
    caraKalkulasi.value =
      celcius.value + " * (9/5) + 32 = " + output.toFixed(2) + "°F";
  });
};

reset.addEventListener("click", () => {
  celcius.value = "";
  fahrenheit.value = "";
  caraKalkulasi.value = "";
});