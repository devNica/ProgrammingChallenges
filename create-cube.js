/**
 * FROM:
 * https://adventjs.dev/es/challenges/2022/6
 */


/**
 * Una pareja de entusiastas de la navidad ha creado una empresa de adornos navideños. 
 * El primer adorno que quieren fabricar es un cubo que se pone en los árboles.
 * El problema es que tienen que programar la máquina y no saben cómo hacerlo. 
 * Nos han pedido ayuda para lograrlo.
 * Para crear los cubos se le pasa un número con el tamaño deseado al programa y este devuelve un string 
 * con el diseño de ese tamaño. Por ejemplo, si le pasamos un 3, el programa debe devolver un cubo de 3x3x3:
 */

/**
  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/
 */


/**
 /\_\_\
/\/\_\_\
\/\/_/_/
 \/_/_/
 */

function createCube(size) {
    let str=''
    
    for (let i = 1; i <= size; i++) {
        str+=' '.repeat(size-i) + '/\\'.repeat(i)+'_\\'.repeat(size)+'\n'
    }
    for (let j = 0; j < size; j++) {
        str+=' '.repeat(j) + '\\/'.repeat(size-j)+'_/'.repeat(size)+'\n'
    }

    return str.substring(0, str.length-1)

}

console.log(createCube(3))