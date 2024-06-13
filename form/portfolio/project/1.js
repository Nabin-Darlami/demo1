function checkEvenOdd(number) {
    
    if (number % 2 === 0) {
        return `The number ${number} is even.`;
    } else {
        return `The number ${number} is odd.`;
    }
}

const num = 10;
const result = checkEvenOdd(num);
console.log(result); 