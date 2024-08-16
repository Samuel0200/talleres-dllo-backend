// PUNTO 1 
console.log(convertidorTemp(26))
function convertidorTemp(celsius) {
    if (typeof celsius !== 'number' || isNaN(celsius)) {
        console.log('Escribe un valor numerico ')
        console.log(celcius)
        return
        
    }
    const fahrenheit = (celsius * 9/5) + 32
    console.log(`Temperatura en Fahrenheit: ${fahrenheit}`)
    console.log(fahrenheit)
    return fahrenheit
    
}

// PUNTO 2 
function resolvedor(a, b, c, signo) {
    const discriminante = b * b - 4 * a * c
    
    if (discriminante < 0) {
        return "El discriminante es negativo, no hay soluciones reales."
    }
    
    const raizDiscriminante = Math.sqrt(discriminante)
    
    const x1 = (-b + raizDiscriminante) / (2 * a)
    const x2 = (-b - raizDiscriminante) / (2 * a)
    
    if (discriminante === 0) {

        return `${x1}`
    }

    if (signo === 'positivo') {
        return ` ${x1}`
    } else if (signo === 'negativo') {
        return ` ${x2}`
    } else {
        return "El parámetro 'signo' debe ser 'positivo' o 'negativo'."
    }
}


const a = 1
const b = 5
const c = 4

console.log(resolvedor(a, b, c, 'positivo'))
console.log(resolvedor(a, b, c, 'negativo'))
console.log(resolvedor(a, b, c, 'otro'))

// PUNTO 3

function mejorParidad(numero) {

    return numero % 2 === 0
}

console.log(mejorParidad(4))
console.log(mejorParidad(7))

// PUNTO 4

function peorParidad(numero) {

    if (numero < 1 || numero > 10) {
        return false; 
    }

    switch (numero) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 9:
            return false; 
        case 2:
        case 4:
        case 6:
        case 8:
        case 10:
            return true; 
        default:
            return false; 
    }
}

console.log(peorParidad(1))   
console.log(peorParidad(2))   
console.log(peorParidad(11))  