const name1 = prompt("Введите имя пользователя", '');

const upperName = name1.charAt(0).toUpperCase() + name1.slice(1);

alert(`Ваше имя : ${upperName}`);