/**
 * FROM:
 * https://adventjs.dev/challenges/03
 */


/**
 * El Grinch está abriendo las cartas que iban a Santa Claus y 
 * las está dejando hechas un lío. 😱
 * Las cartas son una cadena de texto que incluyen regalos y paréntesis ().
 * Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente 
 * y que, además, no vayan vacíos.
 * ¡Pero ojo! Porque el Grinch ha dejado llaves 
 * { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. 
 * Por suerte sólo los ha dejado en medio de los paréntesis...
 */

const letterToSanta = 'bici coche (a() bici(a) bici coche'

function isValid (letter) {
  const gifts = letter.split(' ')
  return gifts.every(v => {
    if (v.includes('(') && !v.includes(')')) return false
    if (v.includes(')') && !v.includes('(')) return false
    if (v.includes('(') && v.includes(')') && ((v.indexOf(')') - v.indexOf('(')) < 2)) return false
    if (v.includes('(') && v.indexOf('(') > 0) return false
    if (v.includes('(') && (v.includes('{') || v.includes('['))) return false
    if (v.includes(')') && (v.indexOf(')') !== (v.length - 1))) return false
    return true
  })
}

console.log(isValid(letterToSanta))