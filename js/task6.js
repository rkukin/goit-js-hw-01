"use strict";

let input;
let total = 0;

do {
  input = prompt("Введиет число");
  if (isNaN(Number(input))) {
    alert("Введено не число");
  } else {
    total = total + Number(input);
  }
} while (input !== null);
alert("Общая сумма чисел равна " + total);
