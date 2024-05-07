// Exercise 1: Using array destructuring, take the first two items from the array and store them in a variable

const names = ['John', 'Jacob', 'Jingleheimer'];

const [first, second] = names;
console.log(first, second);

// Exercise 2: Destructure the first two items returned from the function and store them in a variable

const foo = () => [1, 2, 3];

const [num1, num2] = foo();
console.log(num1, num2);

// Exercise 3: Without creating a temporary variable, use destructuring to swap the value of the following variables

// let a = 'Jack';
// let b = 'Jill';

// [a,b] = [b, a];

// console.log(a);
// console.log(b);

// BONUS: Advanced - nested arrays

// Using array destructuring, accomplish the following output. Carefully study the array and the output to understand it.
const array = [1, [2, [[[3, 4], 5], 6]]];

const [a, [b, [c, d]]] = array;

console.log("a:", a, "b:", b, "c:", c, "d:", d);
