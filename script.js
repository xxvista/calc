"use strict";

const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  loginBtn = document.querySelector("#login"),
  signupBtn = document.querySelector("#signup"),
  pwShowHide = document.querySelectorAll(".pw_hide"),
  label = document.querySelector(".calc_label-2"),
  input = document.querySelector(".calc_input-1"),
  btnDel = document.querySelector(".btn-delete"),
  btnAC = document.querySelector(".btn-AC"),
  btnPower = document.querySelector(".btn-power"),
  btnMod = document.querySelector(".btn-mod"),
  btnDiv = document.querySelector(".btn-div"),
  btnDivison = document.querySelector(".btn-division"),
  btnMultip = document.querySelector(".btn-multip"),
  btnMin = document.querySelector(".btn-min"),
  btnMPlus = document.querySelector(".btn-M-plus"),
  btnPlus = document.querySelector(".btn-plus"),
  btnMMin = document.querySelector(".btn-M-min"),
  btnAns = document.querySelector(".btn-ans"),
  btnEqual = document.querySelector(".btn-equal"),
  btnMR = document.querySelector(".btn-MR"),
  btnDot = document.querySelector(".btn-dot"),
  btn1 = document.querySelector(".btn-1"),
  btn2 = document.querySelector(".btn-2"),
  btn3 = document.querySelector(".btn-3"),
  btn4 = document.querySelector(".btn-4"),
  btn5 = document.querySelector(".btn-5"),
  btn6 = document.querySelector(".btn-6"),
  btn7 = document.querySelector(".btn-7"),
  btn8 = document.querySelector(".btn-8"),
  btn9 = document.querySelector(".btn-9"),
  btn0 = document.querySelector(".btn-0");

/// Variables:

let previousNumber = "",
  currentNumber = "",
  operation = "",
  previous,
  current,
  result;

/// Fonctions:
const updateInput = function () {
  if (input.value.length < 16) input.value = currentNumber;
};

const updateLabel = function () {
  label.innerHTML = `${previousNumber}&nbsp;${operation}`;
};

const clickNumber = function (num) {
  currentNumber += num;
};

const clickOperate = function (op) {
  if (op === "-" && currentNumber === "") {
    currentNumber = "-";
    updateInput();
    console.log(1);
  } else if (operation === "" && currentNumber && currentNumber !== "-") {
    operation = op;
    previousNumber = currentNumber;
    currentNumber = "";
    updateLabel();
    console.log(2);
  } else if (operation && currentNumber && previousNumber) {
    compute();
    console.log(3);
  } else if (result) {
    operation = op;
    previousNumber = result;
    currentNumber = "";
    updateLabel();
  }
};

const clickDot = function () {
  if (input.value.includes(".")) {
    return;
  } else {
    currentNumber += ".";
  }
};

const del = function () {
  if (operation === "") {
    currentNumber = input.value.slice(0, -1);
    updateInput();
  } else if (currentNumber !== "") {
    currentNumber = input.value.slice(0, -1);
    updateInput();
  }
};

const clear = function () {
  operation = "";
  previousNumber = "";
  currentNumber = "";
};

const compute = function () {
  console.log(previousNumber);
  previous = parseFloat(previousNumber);
  current = parseFloat(currentNumber);
  switch (operation) {
    case "+":
      result = previous + current;
      break;
    case "-":
      result = previous - current;
      break;
    case "×":
      result = previous * current;
      break;
    case "÷":
      result = previous / current;
      break;
    case "^":
      result = previous ^ current;
      break;
    case "mod":
      result = previous % current;
      break;
    case "div":
      result = (previous / current) | 0;
      break;
    default:
      return;
  }
  previousNumber = `${previousNumber} ${operation} ${currentNumber}`;
  currentNumber = result;
  operation = "=";
  updateInput();
  updateLabel();
  operation = "";
  previousNumber = "";
  currentNumber = "";
};

/// Affiche popup:
formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

// Affiche password:
pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

// Switch between Signup and Signin
signupBtn.addEventListener("click", (e) => {
  e.preventDefault;
  formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault;
  formContainer.classList.remove("active");
});

// Buttons:

btn1.addEventListener("click", () => {
  clickNumber(1);
  updateInput();
  updateLabel();
});
btn2.addEventListener("click", () => {
  clickNumber(2);
  updateInput();
  updateLabel();
});
btn3.addEventListener("click", () => {
  clickNumber(3);
  updateInput();
  updateLabel();
});
btn4.addEventListener("click", () => {
  clickNumber(4);
  updateInput();
  updateLabel();
});
btn5.addEventListener("click", () => {
  clickNumber(5);
  updateInput();
  updateLabel();
});
btn6.addEventListener("click", () => {
  clickNumber(6);
  updateInput();
  updateLabel();
});
btn7.addEventListener("click", () => {
  clickNumber(7);
  updateInput();
  updateLabel();
});
btn8.addEventListener("click", () => {
  clickNumber(8);
  updateInput();
  updateLabel();
});
btn9.addEventListener("click", () => {
  clickNumber(9);
  updateInput();
  updateLabel();
});
btn0.addEventListener("click", () => {
  clickNumber(0);
  updateInput();
  updateLabel();
});
btnDiv.addEventListener("click", () => {
  clickOperate("div");
});
btnMod.addEventListener("click", () => {
  clickOperate("mod");
});
btnDivison.addEventListener("click", () => {
  clickOperate("÷");
});
btnMultip.addEventListener("click", () => {
  clickOperate("×");
});
btnMin.addEventListener("click", () => {
  clickOperate("-");
});
btnPlus.addEventListener("click", () => {
  clickOperate("+");
});
btnPower.addEventListener("click", () => {
  clickOperate("^");
});
btnDot.addEventListener("click", () => {
  clickDot();
  updateInput();
  updateLabel();
});
btnDel.addEventListener("click", () => {
  del();
});
btnAC.addEventListener("click", () => {
  clear();
  updateInput();
  updateLabel();
});
btnMR.addEventListener("click", () => {
  input.value = "MR";
});
btnMPlus.addEventListener("click", () => {
  input.value = "M+";
});
btnMMin.addEventListener("click", () => {
  input.value = "M-";
});
btnAns.addEventListener("click", () => {
  input.value = "Ans";
});
btnEqual.addEventListener("click", () => {
  compute();
});
