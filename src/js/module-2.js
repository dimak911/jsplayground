// #1
// const clients = ['Mango', 'Ajax', 'Poly', 'Ajax'];

// for (const client of clients) {
//   console.log(client);
// }

// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
//   if (character === 'c') {
//     break;
//   }
// }

// #2
// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Mango';
// let message;

// for (const client of clients) {
//   // На каждой итерации будем проверять совпадает ли элемент массива с
//   // именем клиента. Если совпадает то мы записываем в message сообщение
//   // об успехе и делаем break чтобы не искать дальше
//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }

//   // Если они не совпадают то запишем в message сообщение об отсутствии имени
//   message = 'Клиента с таким именем нету в базе данных!';
// }

// console.log(message); // "Клиент с таким именем есть в базе данных!"

// #3
// const numbers = [1, 43, 14, 18, 4, 337, 29, 6, 34];
// const threshold = 15;

// // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// // и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// #4
// let a = 5;
// // Присвоение по значению, в памяти будет создана еще
// // одна ячейка в которую будет скопировано значение 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Изменим значение a
// a = 10;
// console.log(a); // 10
// // Значение b не изменилось так как это отдельная копия
// console.log(b); // 5

// const a = ['Mango'];
// // Так как a это массив, в b записывается ссылка на уже существующий
// // массив в памяти. Теперь a и b указывают на один и тот же массив.
// const b = a;
// console.log(a); // ["Mango"]
// console.log(b); // ["Mango"]

// // Изменим массив, добавив еще один элемент, используя указатель из a
// a.push('Poly');
// console.log(a); // ["Mango", "Poly"]

// // b также изменилось, потому что b, как и a,
// // просто содержит ссылку на одно и то же место в памяти
// console.log(b); // ["Mango", "Poly"]

// // Результат повторяется
// b.push('Ajax');
// console.log(a); // ["Mango", "Poly", "Ajax"]
// console.log(b); // ["Mango", "Poly", "Ajax"]

// #5
// const name = 'Mango';
// console.log(name.split('')); // ["M", "a", "n", "g", "o"]
// const nameArray = name.split('');
// let newArray = '';
// for (let i = nameArray.length - 1; i >= 0; i -= 1) {
//   newArray += nameArray[i];
// }

// console.log(newArray);

// const message = 'JavaScript это интересно';
// console.log(message.split(' ')); // ["JavaScript", "это", "интересно"]

// const words = ['JavaScript', 'это', 'интересно'];
// console.log(words.join('')); // "JavaScriptэтоинтересно"
// console.log(words.join(' ')); // "JavaScript это интересно"
// console.log(words.join('-')); // "JavaScript-это-интересно"

// const clients = ['Ivan', 'Vasya', 'Grihsa', 'Petro'];
// console.log(clients.indexOf('Petro'));

// console.log(clients.includes('Ivan'));

// const numbers = [];
// for (let i = 0; i < 100; i += 1) {
//   numbers.push(i);
// }

// console.log(numbers);
// let abc = [1, 2, 3, 4, 5];
// console.log(abc.pop());
// console.log(abc.slice(0, 3));
// console.log(abc);
// console.log(abc.slice(-1));

// const languages = ['C', 'C++', 'Java', 'JavaScript'];

// // Заменяем элемент с индексом 1 на новый
// languages.splice(1, 1, 'Python');
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// // Заменяем один элемент (с индексом 2) на несколько
// languages.splice(2, 1, 'C#', 'Swift', 'Go');
// console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

// #6
// function multiply(a, b, c, d) {
//   console.log(a * b * c * d);
// }

// multiply(2, 2, 2, 2);
// multiply(3, 3, 3, 3);

// #7
// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }

// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(); // countFrom = 0, countTo = 10, step = 1

// #8
// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

// #9
// function fn() {
//   // В переменной args будет полноценный массив
//   const args = Array.from(arguments);
//   console.log(args.includes(5));
// }

// fn(1, 2, 3, 4, 5, 6);

// #10
// function fn(...args) {
//   console.log(args);
// }

// fn(1, 2, 3, 4, 5);

// #11
// let totalBalance = 1000;

// function withdraw(amount, totalBalance) {
//   if (amount === 0) {
//     console.log('Для проведения операции введите сумму больше нуля');
//   } else if (amount > totalBalance) {
//     console.log('Недостаточно средств на счету');
//   } else {
//     totalBalance -= amount;
//     console.log(`Операция снятия средств проведена успешно. Остаток ${totalBalance}`);
//     return totalBalance;
//   }
// }

// withdraw(0, totalBalance); // "Для проведения операции введите сумму больше нуля"
// withdraw(500, totalBalance); // "Недостаточно средств на счету"
// totalBalance = withdraw(100, totalBalance); // "Операция снятия средств проведена успешно"

// console.log(totalBalance);

// #12
// function withdraw(amount, balance) {
//   // Если  условие выполняется, вызывается console.log
//   // и выход из функции. Код идущий после тела if не выполнится.
//   if (amount === 0) {
//     console.log('Для проведения операции введите сумму больше нуля');
//     return;
//   }

//   // Если условие первого if не выполнилось, его тело пропускается
//   // и интерпретатор доходит до второго if.
//   // Если условие выполняется, вызывается console.log и выход из функции.
//   // Код идущий после тела if  не выполнится.
//   if (amount > balance) {
//     console.log('Недостаточно средств на счету');
//     return;
//   }

//   // Если ни один из предыдущих if не выполнился,
//   // интерпретатор доходит до этого кода и выполняет его.
//   console.log('Операция снятия средств проведена');
// }

// withdraw(0, 300); // "Для проведения операции введите сумму больше нуля"
// withdraw(500, 300); // "Недостаточно средств на счету"
// withdraw(100, 300); // "Операция снятия средств проведена"

// const testList = ['One', 'Two', 'Three', 'Four', 'Five'];
// console.table(testList);

// console.log(testList[3]);

// #13
// const cart = [245, 25345, 3453, 45, 345, 345, 345, 34, 534, 535];
// let total = 0;
// for (const item of cart) {
//   total += item;
// }

// console.table(total);

// #14
// const min = 0;
// const max = 100;
// const numbers = [];
// let totalNumbers = 0;

// // Добавляем в массив только четные уникальные случайные числа от [0 до 100]
// for (let i = 0; i < max; i += 1) {
//   let randomNumber = Math.round(Math.random() * (max - min) + min);
//   if (numbers.includes(randomNumber)) {
//     continue;
//   } else if (randomNumber % 2 === 0) {
//     numbers.push(randomNumber);
//   }
// }

// console.table(numbers);

// for (const number of numbers) {
//   totalNumbers += number;
// }

// console.log('Total random even:', totalNumbers);

// #15
// const logins = [
//   'vasya',
//   'petya',
//   'ivan',
//   'stepan',
//   'bogdan',
//   'alexandr',
//   'viktor',
//   'danil',
//   'oleg',
//   'dmitriy',
// ];
// const loginToFind = 'alexandr';
// let message = `Пользователь ${loginToFind} не найден :(`;

// через for
// for (let i = 0; i < logins.length; i += 1) {
//   if (logins[i] === loginToFind) {
//     message = `Пользователь ${loginToFind} найден :)`;
//     break;
//   }
// }
// console.log(message);

// через for...of
// for (const login of logins) {
//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден :)`;
//     break;
//   }
// }
// console.log(message);

// через метод includes() с тернарным оператором
// console.log(logins.includes(loginToFind) ? `Пользователь ${loginToFind} найден :)` : message);

// #16
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];
// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// console.log(smallestNumber);

// #17
// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let stringFriends = '';
// через for
// for (const friend of friends) {
//   stringFriends += friend + ',';
// }
// stringFriends = stringFriends.slice(0, stringFriends.length - 1);
// console.log(stringFriends);

// через join()
// console.log(friends.join(','));

// #18
// const string = 'JavaScript';
// let newString = '';
// for (const char of string) {
// вариант через if...else
//   if (char === char.toLowerCase()) {
//     newString += char.toUpperCase();
//   } else if (char === char.toUpperCase()) {
//     newString += char.toLowerCase();
//   }

// вариант через тернарный оператор
//   newString += char === char.toLowerCase() ? char.toLocaleUpperCase() : char.toLowerCase();
// }
// console.log(newString);

// #19
// const title = 'When Does Inflation Hit Cloud Prices and What Can You Do About It?';
// const slug = title.toLowerCase().split(' ').join('-');
// console.log(slug);

// #20
// const array1 = [3, 5, 4345, 65, 75, 765, 63, 56]; //5377
// const array2 = [656, 5, 63, 6, 546, 45, 65, 63, 5]; //1454
// const arrays = array1.concat(array2);
// let total = 0;
// for (const item of arrays) {
//   total += item;
// }

// console.log(total); //6831

// #21
// const cards = [
//   'Карточка-1',
//   'Карточка-2',
//   'Карточка-3',
//   'Карточка-4',
//   'Карточка-5',
//   'Карточка-6',
//   'Карточка-7',
//   'Карточка-8',
//   'Карточка-9',
//   'Карточка-10',
// ];

// const cardToRemove = 'Карточка-7';
// cards.splice(cards.indexOf(cardToRemove), 1);
// console.table(cards);

// cards.splice(4, 0, 'Ya Vasya');
// console.table(cards);

// // #22
// const countTotal = function (arrayOfGoods) {
//   let total = 0;
//   for (const item of arrayOfGoods) {
//     total += item;
//   }
//   return total;
// };

// const cart1 = [245, 25345, 3453, 45, 345, 345, 345, 34, 534, 535];
// const cart2 = [45, 46, 547, 253, 708, 7, 23, 432, 537, 59, 898, 453, 27, 485];
// const cart3 = [1, 6980, 343646, 758, 679, 7, 3, 545, 757, 967, 75324, 6378, 78, 745, 464];
// const cart4 = [56978, 8, 6, 543, 25, 37, 0, 54758676523423, 6457, 5687867, 74, 52, 547, 5];

// console.log(countTotal(cart1));
// console.log(countTotal(cart2));
// console.log(countTotal(cart3));
// console.log(countTotal(cart4));

// #23
// const findLogin = function (arrayOfLogins, loginToFind) {
//   return arrayOfLogins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден :)`
//     : `Пользователь ${loginToFind} не найден :(`;
// };

// const logins = [
//   'vasya',
//   'petya',
//   'ivan',
//   'stepan',
//   'bogdan',
//   'alexandr',
//   'viktor',
//   'danil',
//   'oleg',
//   'dmitriy',
// ];

// console.log(findLogin(logins, 'oleg'));

// #24
// const findSmallestNumber = function (arrayOfNumbers) {
//   let smallestNumber = arrayOfNumbers[0];
//   for (const number of arrayOfNumbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }
//   return smallestNumber;
// };

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// console.log(findSmallestNumber(numbers));

// #25
// const invertChars = function (string) {
//   let newString = '';

//   for (const char of string) {
//     newString += char === char.toLowerCase() ? char.toLocaleUpperCase() : char.toLowerCase();
//   }

//   return newString;
// };

// console.log(invertChars('AAssSS'));
// console.log(invertChars('Василий'));
// console.log(invertChars('логоПЕД'));

// #26
// const add = function (...numbers) {
//   let total = 0;

//   for (const num of numbers) {
//     total += num;
//   }

//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(235, 346457, 45, 645, 754, 634, 534, 6457, 455));
// console.log(add(1, 1, 1, 1, 1));

// #27

// const filterNumbers = function (arrayOfNumbers, ...numbers) {
//   let filteredArray = [];

//   for (const num of numbers) {
//     if (arrayOfNumbers.includes(num)) {
//       filteredArray.push(num);
//     }
//   }

//   return filteredArray;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));

// #28
// function checkStorage(available, ordered) {
// offered solution
//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }

//   return 'The order is accepted, our manager will contact you';
// }

// my solution
//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   return ordered > available
//     ? 'Your order is too large, not enough goods in stock!'
//     : 'The order is accepted, our manager will contact you';
// }

// console.log(checkStorage(100, 50)); //возвращает "The order is accepted, our manager will contact you"
// console.log(checkStorage(100, 130)); //возвращает "Your order is too large, not enough goods in stock!"
// console.log(checkStorage(70, 0)); //возвращает "Your order is empty!"
// console.log(checkStorage(200, 20)); //возвращает "The order is accepted, our manager will contact you"
// console.log(checkStorage(200, 250)); //возвращает "Your order is too large, not enough goods in stock!"
// console.log(checkStorage(150, 0)); //возвращает "Your order is empty!"
