//BusinessLogic
let numberOfSubmits = 0;

function upperCase(text) {
  return text.toUpperCase();
}

//UI
function getAndSetTextValues() {
  const textFieldInput = document.getElementById('textFieldInput').value;
  const valueOfOutputText = document.querySelector('span#upperCaseText');
  valueOfOutputText.innerText = upperCase(textFieldInput);
}

function getAndSetFontSize() {
  const valueOfOutputText = document.querySelector('span#upperCaseText');
  let fontSize = parseInt(getComputedStyle(valueOfOutputText).getPropertyValue('font-size'));
  valueOfOutputText.style.fontSize = (fontSize + 1).toString() + 'px';
  const valueOfFontSize = document.getElementById('fontSize');
  valueOfFontSize.innerText = valueOfOutputText.style.fontSize;
}

window.onload = function () {
  let form = document.querySelector('form');
  form.onsubmit = function (event) {
    event.preventDefault();
    getAndSetTextValues();
    getAndSetFontSize();
    numberOfSubmits += 1;
    document.querySelector("div#outputText").removeAttribute("class");
  };
}