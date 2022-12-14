/**
 * FROM:
 * https://adventjs.dev/challenges/25
 */

/* Ayer, en noche buena, una fam铆lia cen贸 por todo lo alto... Con tanta copa 馃嵕 
encima todav铆a no han retirado los platos y la comida de ayer...
Un ratoncillo llamado midurat 馃惌, que vi贸 ayer el fest铆n escondido, 
est谩 relami茅ndose los bigotes al ver todos los manjares que hay en el comedor.
 
Eso s铆, hay que tener cuidado 馃樁 y s贸lo hacer los movimientos correctos para comer algo. 
Por eso, el rat贸n, que se ha visto los v铆deos de midudev, va a crear una funci贸n para saber si su 
pr贸ximo movimiento es correcto o no 鉁?.
 
El ratoncillo se puede mover en 4 direcciones: up, down, left, right y el comedor es una matriz 
(un array de arrays) donde cada posici贸n puede ser:
 
    Un espacio vac铆o es que no hay nada
    Una m es el rat贸n
    Un * es la comida
 
Vamos a ver unos ejemplos: 

const game = [
    ['*', ' ', ' ', ' '],
    [' ', ' ', '*', ' '],
    ['m', ' ', ' ', ' '],
    [' ', ' ', '*', ' ']
  ]

*/

function canMouseEat(direction, game) {
    
    const width = game[0].length-1
    const height = game.length-1

    if(!Array.isArray(game)) throw new Error('Game is not an array')
    
    let mouseRow = 0
    const winingRow = game.filter((subA, i) => {
        if(subA.some(e=> e === 'm')) {
            mouseRow = i
            return subA[0]
        }
    })
    const mouseColum = winingRow[0].indexOf('m')
    
    const moves = ['up', 'down', 'left', 'right']
    if(!moves.some(m => m === direction)) throw new Error ('Wrong command')

    const scrollingFunctions = {}
    
    scrollingFunctions.up = () => {
        console.log(game[mouseRow-1][mouseColum])
        if (!mouseRow > 0) return false
        else {
            return game[mouseRow-1][mouseColum] === '*' ?? false
        }
    }

    scrollingFunctions.down = () => {
        console.log(game[mouseRow+1][mouseColum])
        if (mouseRow >= height) return false
        else {
            return game[mouseRow+1][mouseColum] === '*' ?? false
        }
    }

    scrollingFunctions.right = () => {
        if (mouseColum >= width) return false
        else {
            return game[mouseRow][mouseColum+1] === '*' ?? false
        }
    }

    scrollingFunctions.left = () => {
        if (mouseColum <= 0) return false
        else {
            return game[mouseRow][mouseColum-1] === '*' ?? false
        }
    }

    return scrollingFunctions[`${direction}`]()
}

console.log(canMouseEat('left', game))