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
        console.log("El discriminante es negativo, no hay soluciones reales.")
        return
    }
    
    const raizDiscriminante = Math.sqrt(discriminante)
    
    const x1 = (-b + raizDiscriminante) / (2 * a)
    const x2 = (-b - raizDiscriminante) / (2 * a)
    
    if (signo === 'positivo') {
        console.log(`Resultado positivo: ${x1}`)
    } else if (signo === 'negativo') {
        console.log(`Resultado negativo: ${x2}`)
    } else {
        console.log("El parámetro 'signo' debe ser 'positivo' o 'negativo'.")
    }
}

const a = 1
const b = 5
const c = 4

resolvedor(a, b, c, 'positivo')

resolvedor(a, b, c, 'negativo')

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