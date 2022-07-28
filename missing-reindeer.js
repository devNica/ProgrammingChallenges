/**
 * FROM:
 * https://adventjs.dev/challenges/14
 */
/**
 * ¡Hemos perdido a un reno y falta poco más de una semana para Navidad! 😱
 * Lo peor es que son tantos que no sabemos cuál es el que nos falta... 
 * ¡Qué lío! A ver, Elfon Musk ha hecho inventario y nos pasa un array con los ids de cada reno.
 * 👍 Lo bueno: los ids son números que pueden ir del 0 al 100, no están repetidos 
 * y sólo se ha perdido un reno.
 * 👎 Lo malo: la lista está desordenada y podría faltar el último...

Necesitamos una función que al pasarle la lista de ids de renos nos diga inmediatamente cuál es el que falta:
 */

const arr = [0, 1, 2, 4]

function missingReindeer (ids) {
  if (ids.length > 1) {
    const sortedIDs = [...ids.sort((a, b) => {
      return a - b
    })]

    const maxToAcc = Math.max(...sortedIDs) * (Math.max(...sortedIDs) + 1) / 2

    const reducer = (accumulator, curr) => accumulator + curr
    const accumulated = sortedIDs.reduce(reducer)

    const diff = maxToAcc - accumulated

    if (Math.max(...sortedIDs) !== 100 && diff) return diff
    if (!diff && Math.max(...sortedIDs)) return Math.max(...sortedIDs) + 1
  } else {
    return Math.abs(ids[0] - 1) || ids[0] - 1
  }
}

console.log(missingReindeer(arr))