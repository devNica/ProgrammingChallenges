/**
 * FROM:
 * https://adventjs.dev/challenges/20
 */

/**
 * En la clase de español del pueblo de Laponia han creado un reto a la hora 
 * de escribir la carta a Papa Noél 🎅: la carta ✉️ tiene que contener todas las letras del alfabeto.
 * Desde el taller de Santa 🎅 se han enterado y quieren escribir una función que les diga 
 * si realmente la cadena de texto que les llega tiene, efectivamente, todas las letras del abecedario español 🔎.
 * Hay que tener en cuenta las letras en mayúscula y que las letras con acento y diéresis 
 * se consideran iguales. Por ejemplo la á y la ä cuenta como una a.
 * Vamos a ver unos ejemplos de frases:
 */

const str = 'Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!'

function pangram (letter) {
  const s = letter.toLowerCase().normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi, '$1$2').normalize()
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  return alphabet.every(e => s.includes(e))
}

console.log(pangram(str))