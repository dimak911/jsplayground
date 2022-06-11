'use strict';
// #1
// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// const descendant = document.querySelector('#descendant');

// parent.addEventListener('click', () => {
//   alert(
//     'Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!'
//   );
// });

// child.addEventListener('click', () => {
//   alert(
//     'Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!'
//   );
// });

// descendant.addEventListener('click', event => {
//   event.stopPropagation();
//   alert('Descendant click handler');
// });

// #2
// const colorPalette = document.querySelector('.color-palette');
// const output = document.querySelector('.output');

// colorPalette.addEventListener('click', selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
//   if (event.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const selectedColor = event.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// // Some helper functions to render palette items
// createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRangomColor();
//     const item = document.createElement('button');
//     item.type = 'button';
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add('item');
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

// function getRangomColor() {
//   return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
// }

// function getRandomHex() {
//   return Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, '0');
// }

// #3
// const output = document.querySelector('.output');
// let scrollEventCounter = 0;

// document.addEventListener('scroll', () => {
//   scrollEventCounter += 1;
//   output.textContent = scrollEventCounter;
// });

// #4
// const result1 = _.add(2, 3);
// console.log(result1); // 5
// const result2 = _.add(12, 8);
// console.log(result2); // 20

// 4. Исправьте ошибки, чтобы код работал
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// product.showPrice();

// Напиши функцию конструктор Storage который создаёт объекты
//для управления складом товаров.
// const Storage = function (items) {
//   this.items = items;
//   function getItems() {
//     return this.items;
//   }
//   function addItems(item) {
//     this.items.push(item);
//   }
//   function removeItem(item) {
//     console.log(this.items.indexOf(item));
//   }
// };
//При вызове будет получать один агрумент - начальный массив товаров,
//и записывать его в свойство items.
//Добавь методы класса:
// getItems(); - возвращайте массив товаров
// addItems(item); - получает новый товар и добавляет его к текущим
// removeItem(item); - плучает товар и, если он есть, удаляет его из текущих

// const storage = new Storage(['apple', 'banana', 'mango']);
// console.log(storage.Storage.getItems());

// Напиши класс Client котрорый создает объект
//со свойствами login email
//Объяви приватные свойства #login #email,
//доступ к которым сделай через геттер и сеттер login email

// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const user1 = new Client('Иван', 'mail@test.com');
// console.log((user1.email = 'test@1111.com'));

// Напиши класс Notes который управляет коллекцией заметок в
//свойстве items.
//Заметка это объект со свойствами text priority
//Добавь классу статическое свойство Priority,
//в котором будет храниться объект с приоритетами.
//Добавь методы addNote(note), removeNote(text)
//updatePriority(text, newPriority)
