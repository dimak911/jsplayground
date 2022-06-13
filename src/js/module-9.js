// #1
// const button = document.querySelector('button');

// const onClick = () => {
//   setTimeout(() => {
//     alert('I love async JS!');
//   }, 2000);
// };

// // Two seconds after clicking the button,
// // alert specified inside the setTimeout callback will appear.
// button.addEventListener('click', onClick);

// #2
// const startBtn = document.querySelector('.js-start');
// const stopBtn = document.querySelector('.js-stop');
// let timerId = null;

// startBtn.addEventListener('click', () => {
//   timerId = setInterval(() => {
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });

// stopBtn.addEventListener('click', () => {
//   clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });

// const date = new Date();
// console.log(new Date(1654019656679));

//1. Создать маркированный список.
//Создать кнопки "Add" "Remove", которые будут менять состав списка
//Создать input с которого будем получать значение, которое будет в li
//* Четным li указать красный фон, нечетным -- синим
//Для выполнения задания используйте createElement
// const listOfItems = document.createElement('ul');

// const addBtn = document.createElement('button');
// addBtn.textContent = 'Add';
// addBtn.classList.add('btn-add');

// const removeBnt = document.createElement('button');
// removeBnt.textContent = 'Remove';
// removeBnt.classList.add('btn-remove');

// const input = document.createElement('input');

// const containerRef = document.querySelector('.container');

// containerRef.append(addBtn, removeBnt, input, listOfItems);

// addBtn.addEventListener('click', addListItem);
// removeBnt.addEventListener('click', removeListItem);

// function addListItem() {
//   const liItem = document.createElement('li');

//   liItem.textContent = input.value ? input.value : 'Nothing';
//   const liItemRef = document.querySelector('li');

//   liItem.classList.add('odd');
//   listOfItems.append(liItem);
// }

// function removeListItem() {}

////////////////////////////////////////////////////////////////////////
//2. Создать форму авторизации.
//В форме авторизации, пользователь должен ввести
//логин и пароль для входа в систему.
// - кнопка "Отправить" становится активной только в том случае
//когда заполнены оба поля и пользователь отметил чекбокс
// - поле логина должно содержать значение минимум 4 символа
// - поле пароля от 3 до 30 символов
// - если условия не соответствуют требованиям то
//при потере фокуса поле ввода показывает ошибку
// - после нажатия кнопки "Отправить" надо вывести сообщение
//об успешной авторизации

const refs = {
  submitForm: document.querySelector('form'),
  submitBtn: document.querySelector('button[type="submit"]'),
  usernameInput: document.querySelector('#username'),
  passwordInput: document.querySelector('#exampleInputPassword1'),
  formCheckbox: document.querySelector('.form-check-input'),
};

refs.submitForm.addEventListener('change', handleChange);

function handleChange() {
  if (refs.usernameInput.value && refs.passwordInput.value && refs.formCheckbox.checked) {
    refs.submitBtn.removeAttribute('disabled');
  } else {
    refs.submitBtn.setAttribute('disabled', 'disabled');
  }

  if (refs.usernameInput.value.length >= 4) {
    refs.usernameInput.classList.remove('is-invalid');
    refs.usernameInput.classList.add('is-valid');
  } else {
    refs.usernameInput.classList.remove('is-valid');
    refs.usernameInput.classList.add('is-invalid');
  }

  if (refs.passwordInput.value.length < 3 || refs.passwordInput.value.length > 30) {
    refs.passwordInput.classList.remove('is-valid');
    refs.passwordInput.classList.add('is-invalid');
  } else {
    refs.passwordInput.classList.remove('is-invalid');
    refs.passwordInput.classList.add('is-valid');
  }
}
