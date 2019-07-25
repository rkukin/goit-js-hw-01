"use strict";

const chinaDeliveryPrice = 100;
const chiliDeliveryPrice = 250;
const australiaDeliveryPrice = 170;
const indiaDeliveryPrice = 80;
const jamaicaDeliveryPrice = 120;

const destination = prompt("Введите страну куда нужно доставить товар");

if (destination === null) {
  alert("Доставка отменена");
} else {
  switch (destination) {
    case "китай":
      alert(
        "Доставка в " +
          destination.charAt(0).toUpperCase() +
          destination.slice(1) +
          " будет стоить " +
          chinaDeliveryPrice +
          " кредитов"
      );
      break;

    case "чили":
      alert(
        "Доставка в " +
          destination.charAt(0).toUpperCase() +
          destination.slice(1) +
          " будет стоить " +
          chiliDeliveryPrice +
          " кредитов"
      );
      break;

    case "австралия":
      alert(
        "Доставка в " +
          destination.charAt(0).toUpperCase() +
          destination.slice(1) +
          " будет стоить " +
          australiaDeliveryPrice +
          " кредитов"
      );
      break;

    case "индия":
      alert(
        "Доставка в " +
          destination.charAt(0).toUpperCase() +
          destination.slice(1) +
          " будет стоить " +
          indiaDeliveryPrice +
          " кредитов"
      );
      break;

    case "ямайка":
      alert(
        "Доставка в " +
          destination.charAt(0).toUpperCase() +
          destination.slice(1) +
          " будет стоить " +
          jamaicaDeliveryPrice +
          " кредитов"
      );
      break;

    default:
      alert("В вашей стране доставка не доступна");
  }
}
