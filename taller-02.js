// PUNTO 1
function findMax(numbers) {
    if (numbers.length === 0) {
        return undefined; 
    }
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

// Pruebas 
console.log(findMax([3, 17, -1, 4, -19])); 
console.log(findMax([10, 5, 8, 22, 4])); 
console.log(findMax([-10, -5, -8, -22, -4])); 





// PUNTO 2
function includes(numbers, num) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === num) {
            return true; 
        }
    }
    return false; 
}

// Pruebas
console.log(includes([3, 17, -1, 4, -19], 2)); 
console.log(includes([3, 17, -1, 4, -19], 4)); 
console.log(includes([10, 20, 30, 40], 25));   
console.log(includes([10, 20, 30, 40], 30));   
console.log(includes([], 5));                   





// PUNTO 3
function sum(numbers) {
    let total = 0; 
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]; 
    }
    return total; 
}

// Pruebas
console.log(sum([3, 17, -1, 4, -19])); 
console.log(sum([10, -5, 2, 3]));      
console.log(sum([-1, -2, -3, -4]));   
console.log(sum([]));                 





// PUNTO 4
function missingNumbers(numbers) {

    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    const allNumbers = new Set();
    for (let i = min; i <= max; i++) {
        allNumbers.add(i);
    }

    numbers.forEach(num => allNumbers.delete(num));

    return Array.from(allNumbers);
}

const testList = [7, 2, 4, 6, 3, 9];
const result = missingNumbers(testList);

console.log('Lista de números faltantes:', result); 