//Punto 1

function desglosarString(str, tipo) {
    const vocales = 'aeiouAEIOU';

    if (tipo === 'vocales') {
        return str.split('').filter(letra => vocales.includes(letra)).length;
    } else if (tipo === 'consonantes') {
        return str.split('').filter(letra => !vocales.includes(letra) && letra.match(/[a-zA-Z]/)).length;
    }

    return 0;
}

console.log(desglosarString("murcielagos", "vocales"));      // 5
console.log(desglosarString("murcielagos", "consonantes"));  // 6



//Punto 2

function twoSum(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complemento = target - nums[i];
        
        if (map.has(complemento)) {
            return [map.get(complemento), i];
        }
        
        map.set(nums[i], i);
    }
    
    return []; 
}

console.log(twoSum([2, 7, 11, 15], 9));  // [0, 1]
console.log(twoSum([3, 4, 2], 6));       // [1, 2]



//Punto 3

function conversionRomana(romano) {
    const mapaRomanos = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;

    for (let i = 0; i < romano.length; i++) {
        let actual = mapaRomanos[romano[i]];
        let siguiente = mapaRomanos[romano[i + 1]];

        if (siguiente && actual < siguiente) {
            total -= actual;
        } else {
            total += actual;
        }
    }

    return total;
}

console.log(conversionRomana("III"));    // 3
console.log(conversionRomana("XIV"));    //  14
console.log(conversionRomana("MMXXIV")); //  2024
console.log(conversionRomana("MCMXCVII"));//  1997