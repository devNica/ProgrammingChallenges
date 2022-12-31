/**
 * FROM:
 * https://adventjs.dev/es/challenges/2022/7
 */

/**
 * En los almacenes de Papá Noel están haciendo inventario. Hay tres almacenes 
 * (que se representa cada uno como un Array). En cada almacén hay regalos.
 * Nos han pedido que escribamos un programa que nos diga qué regalos hay que comprar para reponer 
 * en nuestros almacenes ahora que se acerca la Navidad. Un regalo se tiene que reponer 
 * cuando sólo hay stock en uno de los tres almacenes.
 * Por ejemplo, si tenemos los siguientes almacenes:
 */

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

function getGiftsToRefill(a1, a2, a3) {
    const gift = [a1, a2, a3]
    const firtsDep = gift.map(g=>g.reduce((acc,item)=>{
        if(!acc.includes(item)){
          acc.push(item);
        }
        return acc;
      },[]))

    console.log('firstdep:', firtsDep.flat())

    const secondDep = firtsDep.flat().reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})

    return Object.keys(secondDep).filter(s=> {
        if (secondDep[s] === 1) return s
    })
    
}

console.log(getGiftsToRefill(a1,a2,a3))