"use strict";

const ADMIN_PASSWORD = "Qwe1";
let message;
let password;

password = prompt("Введите пароль администратора");

if (password === null) {
  message = "Отменено пользователем!";
} else if (password === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);
