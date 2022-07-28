/**
 * FROM:
 * https://adventjs.dev/challenges/04
 */

/** 
 * ¡Es hora de poner el árbol de navidad en casa! 🎄
 * Para ello vamos a crear una función que recibe la altura del árbol, 
 * que será un entero positivo del 1 a, como máximo, 100.
 * Si le pasamos el argumento 5, se pintaría esto:
 */

function drawChristmasTree (height) {
    const d = 2 // salto
    const n = height // altura del arbol
    const a1 = 1 // valor del primer elemento
    const trunkHeight = 2
    const totalHeight = n + trunkHeight
  
    const maxNumberChar = a1 + d * (n - 1)
    let refPoint = 0
    const middlePoint = (maxNumberChar - 1) / 2
    const dashPatter = '`'.repeat(maxNumberChar)
    let tree = ''
  
    for (let j = 1; j <= totalHeight; j++) {
      const an = a1 + d * (j - 1)
      if (n >= j) {
        refPoint = (dashPatter.length - an) / 2
        tree += dashPatter.substring(0, refPoint) + '&'.repeat(an) + dashPatter.substring((refPoint + '*'.repeat(an).length)) + '\n'
      } else {
        tree += dashPatter.substring(0, middlePoint) + '#' + dashPatter.substring((middlePoint + 1)) + '\n'
      }
    }
    return tree.trim()
  }
  
  console.log(drawChristmasTree(10))