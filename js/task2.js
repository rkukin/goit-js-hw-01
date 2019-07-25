"use strict";

const total = 100;
const ordered = 50;

if (typeof total !== "number" || typeof ordered !== "number") {
  alert("Пожалуйста введите числа");
} else if (ordered <= total) {
  alert("Заказ оформлен, с вами свяжется менеджер");
} else {
  alert("На складе недостаточно твоаров!");
}
