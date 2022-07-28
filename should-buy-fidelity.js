/**
 * FROM:
 * https://adventjs.dev/challenges/11
 */

/**  
 * Este mes de diciembre hay películas super interesantes en el cine... 
 * y tengo que optimizar cómo gasto el dinero.
 * Mi cine favorito tiene dos posibilidades:
 * • Entrada de un sólo uso: Cuesta 12$ por cada película.
 * • Tarjeta de fidelidad: Cuesta 250$ pero que cada vez que vas pagas sólo el 75% del precio 
 * del ticket. ¡Lo mejor es que se acumula! Y cada vez que vas, 
 * se paga el 75% del precio del ticket que pagaste la última vez.
 * Ejemplo de cada una al comprar 3 entradas y el precio que pagaría en total: 
 */

function shouldBuyFidelity (times) {
    const cardPrice = 250.00
    const ticketPrice = 12.00
    const discount = 0.75
    let accDiscount = 0.00
    for (let i = 1; i <= times; i++) {
      accDiscount = accDiscount + (ticketPrice * Math.pow(discount, i))
    }
    if ((ticketPrice * times) < (accDiscount + cardPrice)) return false
    return true
  }
  
  console.log(shouldBuyFidelity(20))