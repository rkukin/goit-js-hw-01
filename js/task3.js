"use strict";

const ADMIN_PASSWORD = "Qwe1";
let message;
let password;

password = prompt("Введите пароль администратора");

if (password === null) {
  message = "Отменено пользователем!";
} else if (password === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else if (password !== ADMIN_PASSWORD) {
  message = "Доступ запрещен, неверный пароль!";
} else {
  message = "Что-то пошло не так, повторите попытку";
}

alert(message);
