"use strict";

const credits = 23580;
const pricePerDroid = 3000;

const quantity = prompt("Пожалуйста, введите кол-во товара");

if (quantity === null) {
  alert("Отменено пользователем!");
} else if (!Number.isInteger(Number(quantity)) || Number(quantity) <= 0) {
  alert("Пожалуйста введите целое положительное число");
} else if (Number(quantity) * pricePerDroid <= credits) {
  alert(
    "Вы купили " +
      quantity +
      " дроидов, на счету осталось " +
      (credits - quantity * pricePerDroid) +
      " кредитов."
  );
} else {
  alert("Недостаточно средств на счету!");
}
