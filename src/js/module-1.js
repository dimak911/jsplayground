// let a = "JavaScript is awesome".length;
// let b = "I'm learning".toUpperCase();
// console.log(a);
// console.log(b);

// const yearOfBirth = 1991;
// console.log(yearOfBirth);

// let z;
// console.log(z);

// let username;
// console.log(typeof username); // "undefined"

// let inputValue = null;
// console.log(typeof inputValue); // "object"

// const quantity = 17;
// console.log(typeof quantity); // "number"

// const message = "JavaScript is awesome!";
// console.log(typeof message); // "string"

// const isSidebarOpen = false;
// console.log(typeof isSidebarOpen); // "boolean"

// const a = 1;
// console.log(a);

// Просим клиента подтвердить бронь на отель
// и сохраняем в переменную результат работы confirm
// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

// Спрашиваем имя отеля в котором хотел бы остановится клиент
// и сохраняем в переменную результат вызова prompt.
// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);

// const value = prompt("Please enter a number!");
// console.log(typeof value); // "string"
// console.log(value); // "5"

// const message = "Mango " + "is" + " happy";
// console.log(message); // Mango is happy

// const guestName = "Ivan";
// const roomNumber = 666;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting);

// const exampleText = "My name is Bob";
// console.log(exampleText.length);
// console.log("My name is Bob".length);

// const message = "Welcome to Bahamas!";
// console.log(message.toLowerCase()); // "welcome to bahamas!"
// console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
// console.log(message); // "Welcome to Bahamas!"

// console.log(NaN || 0 || undefined);

// const a = 1;
// console.log(a);

// const userNumber = prompt("Введите число, которое хотите возвести в степень");
// const userExponent = prompt("Введите степень");
// console.log(Number(userNumber), Number(userExponent));
// const result = Number(userNumber) ** Number(userExponent);
// console.log("Результат: ", result);

// const max = 50;
// const min = 10;
// const randomNumber = Math.round(Math.random() * (max - min) + min);
// console.log(randomNumber);

// console.log(Math.round(1.5));

// const guestFirstName = "Иван";
// const guestLastName = "Иванов";
// const hotelName = "Хилтон";
// const max = 50;
// const min = 1;
// const roomNumber = Math.round(Math.random() * (max - min) + min);

// console.log(
//   `Гость ${guestFirstName} ${guestLastName} поселяется в ${hotelName} номере ${roomNumber}.`
// );

// console.log("b" > "c");

// Покупка
// let balance = 10000;
// const payment = Number(prompt("Введите сумму покупки"));

// console.log(
//   `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету.`
// );

// if (payment < balance) {
//   balance -= payment;
//   console.log(`На счету осталось ${balance}`);
// } else if (payment > balance) {
//   console.log("На счету недостаточно средств для проведения операции!");
// } else "Операция завершена";

// Скидка
// const totalSpent = 2000;
// let payment = 500;
// let discount = 0;

// if (totalSpent > 100 && totalSpent < 1000) {
//   discount = "2%";
// } else if (totalSpent > 1000 && totalSpent < 5000) {
//   discount = "5%";
// } else if (totalSpent > 5000) {
//   discount = "10%";
// } else {
//   discount = "0%";
// }

// console.log(
//   `Оформляем заказ на сумму ${payment} со скидкой ${discount}%. Итого к оплате ${
//     payment - (parseInt(discount) / 100) * payment
//   } кредитов`
// );

// full
// let type;
// const age = 2;

// if (age >= 18) {
//   type = "adult";
// } else {
//   type = "child";
// }

// console.log(type); // "adult"

// // compact
// const type1 = age >= 18 ? "adult" : "child";
// console.log(type1);

// let counter = 0;
// let testImage = "";
// while (counter < 10) {
//   counter += 1;
//   testImage += "*";
//   console.log(testImage);
// }

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   const message = `You ordered droids worth ${
//     orderedQuantity * pricePerDroid + deliveryFee
//   } credits. Delivery (${deliveryFee} credits) is included in total price.`;

//   // Change code above this line
//   return message;
// }

// console.log(makeOrderMessage(20, 5, 10));

// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   let price;
//   switch (country) {
//     case "China":
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case "Chile":
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case "Australia":
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case "Jamaica":
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     default:
//       message = "Sorry, there is no delivery to your country";
//   }
//   // Change code above this line
//   return message;
// }

// console.log(getShippingCost("Ukraine"));

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }

// console.log(getNameLength("Ukraine"));

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length <= maxLength) {
//     result = message;
//   } else {
//     result = message.slice(0, maxLength) + "...";
//   }
//   /// Change code above this line
//   return result;
// }

// console.log(formatMessage("Ukraine", 5));

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   result =
//     message.toLowerCase().includes("spam") ||
//     message.toLowerCase().includes("sale");

//   // Change code above this line
//   return result;
// }

// console.log(checkForSpam("There is no SalE"));

// const option = 1;
// let message = "";

// switch (option) {
//   case 1:
//     message = "Вы можете забрать товар завтра с 12:00 в нашем офисе";
//     break;
//   case 2:
//     message = "Курьер доставит заказ завтра с 9:00 до 18:00";
//     break;
//   case 3:
//     message = "Посылка будет отправлена сегодня";
//     break;
//   default:
//     message = "С вами свяжется менеджер";
// }

// console.log(message);

// for (let i = 1; i <= 1000000; i *= 2) {
//   console.log(i);
// }

// console.log("Cycle finished");

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 8;
// let totalSalary = 0;

// for (let i = 0; i < employees; i += 1) {
//   let currentEmployeeSalary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary
//   );
//   console.log(currentEmployeeSalary);
//   totalSalary += currentEmployeeSalary;
// }
// console.log(`Общая ЗП сотрудников - ${totalSalary}`);

// let totalEven = 0;
// const min = 0;
// const max = 5;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//     totalEven += i;
//   } else {
//     continue;
//   }
// }

// console.log(`Общая сумма четных чисел: ${totalEven}`);
// Math.ceil;
