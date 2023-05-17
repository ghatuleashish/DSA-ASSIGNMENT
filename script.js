// Q1 .Write a program to find all pairs of an integer array whose sum is equal to a given number

function findPairs(array, targetSum) {
    const pairs = [];

    const complementMap = new Map();
    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        const complement = targetSum - num;
        if (complementMap.has(complement)) {
            pairs.push([num, complement]);
        }
        complementMap.set(num, i);
    }
    return pairs;
}
const array = [2, 4, 5, 6, 3, 1, 7, 8, 9];
const targetSum = 10;

const pairs = findPairs(array, targetSum);
console.log("Pairs with sum", targetSum);
pairs.forEach(pair => console.log(pair[0], "+", pair[1], "=", targetSum));

console.log("Q1 END _____________________________________________________");

// Write a program to reverse an array in place? In place means you cannot create a new array.
//  You have to update the original array

function reverseArrayInPlace(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
const arr = [1, 2, 3, 4, 5];
console.log("Original array:", arr);
reverseArrayInPlace(arr);
console.log("Reversed array:", arr);

console.log("Q2 END _____________________________________________________");

//  Write a program to check if two strings are a rotation of each other

function areStringsRotations(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const concatenated = str1 + str1;
    if (concatenated.includes(str2)) {
        return true;
    }
    return false;
}
const string1 = "hello";
const string2 = "lohel";
console.log("Are strings rotations?", areStringsRotations(string1, string2));

console.log("Q3 END _____________________________________________________");

// Write a program to print the first non-repeated character from a string

function findFirstNonRepeatedCharacter(str) {
    const frequencyMap = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        frequencyMap[char] = frequencyMap[char] + 1 || 1;
    }
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (frequencyMap[char] === 1) {
            return char;
        }
    }
    return null;
}
const string = "abxacabad";
const firstNonRepeatedChar = findFirstNonRepeatedCharacter(string);
console.log("First non-repeated character:", firstNonRepeatedChar);

console.log("Q4 END _____________________________________________________");

//  Read about the Tower of Hanoi algorithm. Write a program to implement it

function towerOfHanoi(n, source, target, auxiliary) {
    if (n === 1) {
        console.log(`Move disk 1 from ${source} to ${target}`);
        return;
    }
    towerOfHanoi(n - 1, source, auxiliary, target);
    console.log(`Move disk ${n} from ${source} to ${target}`);
    towerOfHanoi(n - 1, auxiliary, target, source);
}
const n = 3;
const sourcePeg = 'A';
const targetPeg = 'C';
const auxiliaryPeg = 'B';
console.log(`Tower of Hanoi solution for ${n} disks:`);
towerOfHanoi(n, sourcePeg, targetPeg, auxiliaryPeg);

console.log("Q5 END _____________________________________________________");

// Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression

function isOperator(char) {
    return char === '+' || char === '-' || char === '*' || char === '/';
}

function postfixToPrefix(postfix) {
    const stack = [];
    for (let i = 0; i < postfix.length; i++) {
        const char = postfix[i];
        if (isOperator(char)) {
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            const expression = char + operand1 + operand2;
            stack.push(expression);
        } else {
            stack.push(char);
        }
    }
    return stack.pop();
}
const postfixExpression = "23*4+";
console.log("Postfix expression:", postfixExpression);
console.log("Prefix expression:", postfixToPrefix(postfixExpression));

console.log("Q6 END _____________________________________________________");

//  Write a program to convert prefix expression to infix expression

function isOperator(char) {
    return char === '+' || char === '-' || char === '*' || char === '/';
}
function prefixToInfix(prefix) {
    const stack = [];
    for (let i = prefix.length - 1; i >= 0; i--) {
        const char = prefix[i];
        if (isOperator(char)) {
            const operand1 = stack.pop();
            const operand2 = stack.pop();
            const expression = `(${operand1}${char}${operand2})`;
            stack.push(expression);
        } else {
            stack.push(char);
        }
    }
    return stack.pop();
}
const prefixExpression = "+*23*456";
console.log("Prefix expression:", prefixExpression);
console.log("Infix expression:", prefixToInfix(prefixExpression));

console.log("Q7 END _____________________________________________________");

// Write a program to check if all the brackets are closed in a given code snippet

function areBracketsClosed(codeSnippet) {
    const stack = [];
    for (let i = 0; i < codeSnippet.length; i++) {
        const char = codeSnippet[i];
        if (char === '(' || char === '[' || char === '{') {

            stack.push(char);
        }
        else if (char === ')' || char === ']' || char === '}') {
            if (stack.length === 0) {
                return false;
            }
            const top = stack.pop();
            if (
                (char === ')' && top !== '(') ||
                (char === ']' && top !== '[') ||
                (char === '}' && top !== '{')
            ) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
const code = 'function myFunction() { return (a * [b + c]); }';
console.log("Code snippet:", code);
console.log("Are brackets closed?", areBracketsClosed(code));

console.log("Q8 END _____________________________________________________");

// Write a program to reverse a stack

class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
}
function reverseStack(stack) {
    const auxStack = new Stack();
    while (!stack.isEmpty()) {
        auxStack.push(stack.pop());
    }
    while (!auxStack.isEmpty()) {
        stack.push(auxStack.pop());
    }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log("Original stack:", stack.items);
reverseStack(stack);
console.log("Reversed stack:", stack.items);

console.log("Q9 END _____________________________________________________");

// Write a program to find the smallest number using a stack


function findFirstMissing(array, start, end) {
    if (start > end)
        return end + 1;

    if (start != array[start])
        return start;

    let mid = parseInt((start + end) / 2, 10);


    if (array[mid] == mid)
        return findFirstMissing(array, mid + 1, end);

    return findFirstMissing(array, start, mid);
}

let arry = [0, 1, 2, 3, 4, 5, 6, 7, 10];
let x = arry.length;

console.log("smallest Missing element is " +findFirstMissing(arry, 0, x - 1));


console.log("Q10 END _____________________________________________________");
