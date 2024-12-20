Реалізуйте функцію seq(...args) з використанням замикань і чеінінгу, яка може бути викликана по ланцюжку з довільною кількістю функцій, а перший виклик зі значенням типу Number приведе до виконання переданих раніше функцій і результат, що повертається, повинен бути, як у наведених прикладах:
```js
seq(x => x + 7)
   (x => x * 2)(5)

// Результат: 17
```

```js
seq(x => x * 2)
   (x => x + 7)(5)

// Результат: 24
```

```js
seq(x => x + 1)
   (x => x * 2)
   (x => x / 3)
   (x => x - 4)(7)

// Результат: 3
```
Реалізуйте функцію `array()`, що створює функціональний об'єкт, який
містить масив у своєму замиканні та забезпечує наступний інтерфейс доступу
до нього:
- Створення нового екземпляра `const a = array();`
- Отримання елемента за індексом `a(i)`
- Додавання елемента в кінець `a.push(value)`
- Видалення останнього елемента та отримання його значення `a.pop()`

Приклад використання:
```js
const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // Выводить: first
console.log(arr(1)); // Выводить: second
console.log(arr(2)); // Выводить: third

console.log(arr.pop()); // Выводить: third
console.log(arr.pop()); // Выводить: second
console.log(arr.pop()); // Выводить: first

console.log(arr.pop()); // Выводить: undefined
```
