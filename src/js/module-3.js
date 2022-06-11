// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// console.log(book);

// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: {
//     country: 'Jamaica',
//     city: 'Ocho Rios',
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// console.table(user);

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book.genres;
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

// console.log(book['isPublic']);

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// book.rating = 9;
// book.isPublic = false;
// book.genres.push('драма');

// console.log(book.rating); // 9
// console.log(book.isPublic); // false
// console.log(book.genres); // ['historical prose', 'adventures', 'драма']

// // ✅ Логически и синтаксически сгруппированные сущности
// const bookShelf = {
//   books: ['The Last Kingdom', 'Dream Guardian'],
//   // Это метод объекта
//   getBooks() {
//     return this.books;
//   },
//   // Это метод объекта
//   addBook(bookName) {
//     this.books.push(bookName);
//     return this.books;
//   },
// };

// // Вызовы методов
// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook('Новая книга'));

// console.log(bookShelf);

// const animal = {
//   legs: 4,
// };

// console.log(animal);

// const dog = Object.create(animal);
// dog.name = 'Манго';

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// console.log(Object.keys(book));

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значение свойства
//   console.log(book[key]);
// }

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// const entries = Object.entries(book);
// console.table(entries);
// // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     rating: 8.51,
//   },
//   {
//     title: 'Сон смешного человека',
//     author: 'Федор Достоевский',
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   // Объект книги
//   console.log(book);
//   // Название
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = (totalRating / books.length).toFixed(2);
// console.log(averageRating); // 8.2

// const temps = [14, -4, 25, 8, 11];

// // В консоли будет массив
// console.log(temps);
// // ❌ Так не сработает, потому что передаём целый массив
// console.log(Math.max(temps)); // NaN

// // В консоли будет набор отдельных чисел
// console.log(...temps);
// // ✅ Распылим коллекцию элементов как отдельные аргументы
// console.log(Math.max(...temps)); // 25

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// // Деструктуризируем
// const { title, author, isPublic, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = isPublic ? 'публичном' : 'закрытом';
// const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;
// console.log(message);

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
// };

// // Добавим картинку обложки если её нет в объекте книги
// const { title, coverImage = 'https://via.placeholder.com/640/480', author } = book;

// console.log(title); // The Last Kingdom
// console.log(author); // Bernard Cornwell
// console.log(coverImage); // https://via.placeholder.com/640/480

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }

// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// function calcBMI(weight, height) {
//   return Number((parseNumber(weight) / parseNumber(height) ** 2).toFixed(1));
// }

// function parseNumber(str) {
//   str = str.replace(',', '.');
//   return parseFloat(str);
// }

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8

// function printContactsInfo(names, phones) {
//   const namesArr = names.split(',');
//   const phonesArr = phones.split(',');

//   for (let i = 0; i < namesArr.length; i += 1) {
//     console.log(`${namesArr[i]} - ${phonesArr[i]}`);
//   }
// }

// printContactsInfo(
//   'Ivan,Stepan,Petro,Bogdan',
//   '886846868468,484848484,4844844484648,47878764523423'
// );

// #1
// const book = {
//   title: 'Don Quixote',
//   author: 'Miguel de Cervantes Saavedra',
//   rating: 9.3,
//   chapters: [1, 2, 3, 4, 5],
//   totalChapters: 5,
//   rename(newName) {
//     this.title = newName;
//   },
//   addChapter(newChapter) {
//     this.chapters.push(newChapter);
//     this.totalChapters = this.chapters.length;
//   },
// };

// const bookTitle = 'title';

// console.log(book.chapters);
// console.log(book[bookTitle]);

// const inputName = 'color';
// const inputValue = 'red';

// const colorPickerData = {
//   [inputName]: inputValue,
// };

// console.log(colorPickerData);
// console.log(book);
// book.rename('Solaris');
// book.addChapter(6);
// console.log(book);

// console.log(Object.values(book));

// #2

// const newObj = {
//   address: {
//     num1: 1,
//     num2: 2,
//     num3: 3,
//   },
// };

// console.log(Object.values(newObj.address));

// #3 Корзина товаров

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     this.items.push(product);
//     product.quantity = 1;
//   },
//   remove(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         this.items.splice(this.items.indexOf(item), 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     let total = 0;

//     for (const item of this.items) {
//       total += item.price * item.quantity;
//     }
//     return total;
//   },
//   increaseQuantity(productName) {
//     for (const item of this.items) {
//       if (productName === item.name) {
//         item.quantity += 1;
//       }
//     }
//   },
//   decreaseQuantity(productName) {
//     for (const item of this.items) {
//       if (productName === item.name) {
//         if (item.quantity === 0) {
//           continue;
//         } else {
//           item.quantity -= 1;
//         }
//       }
//     }
//   },
// };

// Добавить товары в массив
// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });

// Получить список товаров
// console.table(cart.getItems());

// Удалить товар из корзины
// cart.remove('🍎');
// console.table(cart.getItems());

// Очистить корзину
// cart.clear();
// console.table(cart.getItems());

// Увеличить количество товара
// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// Уменьшить количество товара
// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

// Вывести общую стоимость корзины
// console.log('Total: ', cart.countTotalPrice());

//1. Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

// const userInput = prompt('Какое официальное название JavaScript?');
// userInput === 'ECMAScript' ? alert('Верно!') : alert('Не знаете? ECMAScript!');

//2. Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут

// const userInput = Number(prompt('Введи минуты'));
// console.log(
//   `${Math.floor(userInput / 60)
//     .toString()
//     .padStart(2, '0')}:${userInput % 60}`
// );

// 4. Напишите код, который будет спрашивать
//логин с помощью prompt и логировать результат
//в консоль браузера

//Если посетитель вводит "Админ",
//то prompt запрашивает пароль.
//Если ничего не ввели или нажата клавиша Esc
//вывести стороку "Отменено"
//В противном случае вывксти строку "Я вас не знаю"

//Пароль проверять так:
//Если введён пароль "Я главный",
//то вывести строку "Здравствуйте!"
//иначе выводить строку "Неверный пароль!"

// const userInput = prompt('Введите логин');
// console.log(userInput);

// if (userInput === 'Админ') {
//   const userPass = prompt('Введите пароль');
//   if (userPass) {
//     if (userPass === 'Я главный') {
//       console.log('Здравствуйте');
//     } else {
//       console.log('Неверный пароль');
//     }
//   } else {
//     console.log('Отменено');
//   }
// } else {
//   console.log('Я вас не знаю');
// }

// Напишите цикл, который выводит в консоль
//числа от max до min по убыванию
// Додайте все четные числа от min до max
// const max = 50;
// const min = 23;
// let total = 0;

// for (let i = max; i >= min; i -= 1) {
//   console.log(i);
//   if (!(i % 2)) {
//     total += i;
//   }
// }
// console.log(`Всего: ${total}`);

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = 'Mango';

// console.log(dog); // {name: 'Mango'}
// console.log(dog.name); // 'Mango'
// console.log(dog.legs); // 4

// const book = {
//   title: 'The Last Kingdom',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'genres', 'rating']

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const newArr = [];

//   for (let product of products) {
//     if (Object.keys(product).includes(propName)) {
//       newArr.push(product[propName]);
//     }
//   }

//   return newArr;
// }

// console.log(getAllPropValues('name'));

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;

//   for (let product of products) {
//     if (product.name === productName) {
//       totalPrice =
//       return totalPrice;
//     }
//   }
//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice('Radar'));

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   for (let product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }

//   return 0;
// }

// console.log(calculateTotalPrice('Blaster'));

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     const { name: newName } = newPotion;
//     for (const { name } of this.potions) {
//       if (name === newName) {
//         return `Error! Potion ${newName} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       const { name } = potion;
//       if (name === potionName) {
//         const potionIndex = this.potions.indexOf(potion);
//         this.potions.splice(potionIndex, 1);
//         return;
//       }
//     }

//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//         return;
//       }
//     }

//     return `Potion ${oldName} is not in inventory!`;
//   },
// };

// console.log(
//   atTheOldToad.addPotion({
//     name: 'Dragon breath1',
//     price: 700,
//   })
// );

// console.log(atTheOldToad.removePotion('Dragon breath2'));

// console.log(atTheOldToad.updatePotionName('Dragon breath1', 'Dragon breath'));

// console.log(atTheOldToad.getPotions());
