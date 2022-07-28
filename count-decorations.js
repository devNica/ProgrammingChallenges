/**
 * FROM:
 * https://adventjs.dev/challenges/22
 */

/**
 * ¡Ay! Que llega la Navidad y no hemos decorado todavía el árbol. 🎄😱
 * Necesitamos una función que pasándole un árbol binario nos diga el número de decoraciones 
 * que necesitamos. Para ello tenemos un objeto que sería la representación del árbol 
 * y que nos indica en cada nivel el número de ramas a decorar.
 * Lo mejor es que veamos un ejemplo:
 */

const bigTree = {
    value: 1,
    left: {
      value: 5,
      left: {
        value: 7,
        left: {
          value: 3,
          left: null,
          right: null
        },
        right: null
      },
      right: null
    },
    right: {
      value: 6,
      left: {
        value: 5,
        left: null,
        right: null
      },
      right: {
        value: 1,
        left: null,
        right: null
      }
    }
  }
  
  function countDecorations (bigTree) {
    const tree = Object.values(bigTree)
    let decorations = 0
    function recursiveExplorer (array) {
      if (Array.isArray(array)) {
        return array.forEach((s) => {
          if (typeof (s) === 'number' && s !== null) {
            decorations += s
          }
          if (s !== null && typeof (s) !== 'number') {
            recursiveExplorer(Object.values(s))
          }
        })
      }
    }
    recursiveExplorer(tree)
    return decorations
  }
  
  const H = countDecorations(bigTree)
  console.log('este es el valor final :', H)