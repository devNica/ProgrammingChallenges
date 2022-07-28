/**
 * FROM:
 * https://adventjs.dev/challenges/07
 */

/**  
 * Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades 
 * tiene el almacén hecho un desastre y no encuentra nada. Vamos a crear una función 
 * contains que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.
 * La función debe devolver un booleano que indique si se encuentra el string 
 * como valor en algún nivel del objeto. Veamos unos ejemplos:
 */

 const almacen = {
    'estanteria1': {
      'cajon1': {
        'producto1': 'coca-cola',
        'producto2': 'fanta',
        'producto3': 'sprite'
      }
    },
    'estanteria2': {
      'cajon1': 'vacio',
      'cajon2': {
        'producto1': 'pantalones',
        'producto2': 'camiseta' // <- ¡Está aquí!
      }
    }
}
    

function contains(store, product) {
    const storeTree = Object.values(store)
    let found = false
    
    function recursiveExplorer (array) {
        if (Array.isArray(array)) {
            array.forEach((s) => {
                if (found) return
                if (s === product) {
                    found = true
                    return
                }
                if (s !== null && typeof (s) !== 'string') {
                    recursiveExplorer(Object.values(s))
                }
            })
        }
    }

    recursiveExplorer(storeTree)
    return found
}

console.log(contains(almacen, 'camiseta'))