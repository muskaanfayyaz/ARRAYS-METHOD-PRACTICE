// Sample array to demonstrate array methods
let numbers: number[] = [1, 2, 3, 4, 5];
let numbers2: number[] = [6, 7, 8, 9, 10];
let words: string[] = ['apple', 'banana', 'cherry'];

// 1. concat - Combines two arrays into one
let combinedArray = numbers.concat(numbers2);
console.log('concat:', combinedArray);
// Output: [1, 2, 3, 4, 5, 'apple', 'banana', 'cherry']

// 2. filter - Creates a new array with all elements that pass the test implemented by the provided function
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('filter:', evenNumbers);
// Output: [2, 4]

// 3. find - Returns the first element that satisfies the provided testing function
let firstEven = numbers.find(num => num % 2 === 0);
console.log('find:', firstEven);
// Output: 2

// 4. forEach - Executes a provided function once for each array element
numbers.forEach(num => console.log('forEach:', num * 2));
// Output: 2, 4, 6, 8, 10

// 5. map - Creates a new array with the results of calling a provided function on every element in the calling array
let doubledNumbers = numbers.map(num => num * 2);
console.log('map:', doubledNumbers);
// Output: [2, 4, 6, 8, 10]

// 6. reduce - Executes a reducer function on each element of the array, resulting in a single output value
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('reduce:', sum);
// Output: 15

// 7. slice - Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
let slicedNumbers = numbers.slice(1, 3);
console.log('slice:', slicedNumbers);
// Output: [2, 3]

// 8. some - Tests whether at least one element in the array passes the test implemented by the provided function
let hasEven = numbers.some(num => num % 2 === 0);
console.log('some:', hasEven);
// Output: true

// 9. sort - Sorts the elements of an array in place and returns the array
let sortedNumbers = numbers.slice().sort((a, b) => b - a); // Use slice to avoid mutating the original array
console.log('sort:', sortedNumbers);
// Output: [5, 4, 3, 2, 1]

// 10. splice - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
let splicedNumbers = numbers.splice(1, 2, 10, 11);
console.log('splice:', splicedNumbers, 'remaining:', numbers);
// Output: [2, 3] remaining: [1, 10, 11, 4, 5]
numbers = [1, 2, 3, 4, 5]; // Reset for further examples
