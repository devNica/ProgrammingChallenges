/**
 * FROM:
 * https://adventjs.dev/challenges/06
 */

/**  
 * Antes de poder disfrutar de la navidad... nos toca terminar de rematar los exámenes finales. 
 * ¡Y toca un poco de matemáticas! 😱 A una función se le pasan dos parámetros: 
 * un Array con números y el resultado que se espera. 
 * La función debe devolver los dos valores del Array que sumen el resultado esperado. 
 * Como a veces pueden haber más de dos valores que sumen, se devolverá el primero 
 * empezando por la izquierda que encuentre otro par, sin importar lo lejos que esté a la derecha.
 * Si no se encuentra, se devuelve null.
 * Veamos unos ejemplos:
 */


function sumPairs(numbers, result) {
    let numbersArray = [...numbers]
    let pairs = []
    
    if (Array.isArray(numbersArray)) {
        
        function goThrough(current, subarray){
            if(Array.isArray(subarray)) {
                subarray.forEach(subE =>{
                    if(current+subE === result) pairs.push({ current, subE})
                })
            }
        }
       
        for (let index = 0; index < numbersArray.length;) {
            goThrough(numbersArray[index], numbersArray.slice(1))
            numbersArray.shift()
            if(pairs.length > 0) index = numbersArray.length
        }

        
        if (pairs.length > 0) {
            return Object.values(pairs[0])
        } else {
            return null
        }
    }
}

console.log(sumPairs([6, 7, 1, 2], 8) )