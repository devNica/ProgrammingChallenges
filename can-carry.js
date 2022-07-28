/**
 * FROM:
 * https://adventjs.dev/challenges/21
 */

/**  
 * Se están preparando las rutas para el trineo de Santa 🎅. 
 * Tenemos almacenes por todo el mundo para que Santa pueda recoger los regalos 
 * y entregarlos en el destino final. 🎁
 * Necesitamos saber si las rutas que estamos creando tienen sentido o si Santa 
 * va a tener que dejar tirados regalos por el camino. 🥺
 * Para eso vamos a crear una función que recibe dos parámetros:
 * Un número con la capacidad máxima de regalos en el trineo.
 * El viaje que es un array de arrays. Cada subarray contiene tres números que representan:
        trip[0] = número de regalos a transportar
        trip[1] = punto de recogida de los regalos
        trip[2] = punto de entrega de los regalos 
 *La ruta siempre va de izquierda a derecha (nunca volverá Santa hacia atrás) 
 *pero... ¡ten en cuenta que en mitad de la ruta puede tener que recoger 
 *regalos cuando ya tiene alguno encima!
 *Lo mejor es que veamos un ejemplo:
 */


function canCarry(capacity, trip) {
    const packageIndex = Array.from(Array(trip.length), (_d, i)=>i*3)
    let count = 0
    let flow = -1

    function getIndex(c){
        return Math.floor((c-1)*0.5)
    }

    function getFlow(flow) {
        return -flow
    }
    
    if(Array.isArray(trip)){
        const unOrderedCoord = trip.flat().map((e, i)=> {
            if(!packageIndex.includes(i)) {
                count+=1
                const index = getIndex(count)
                flow = getFlow(flow)
                return {
                    id: e, value: flow * trip.flat()[packageIndex[index]]
                }
                
            }
        })

        const orderedCoord = unOrderedCoord.filter(e=>e !== undefined).sort((a, b)=> a.id - b.id)

        let collector = 0
        let inspector = true
        
        orderedCoord.forEach(e => {
            collector+=e.value
            if (collector > capacity) {
                inspector = false
            }
        })

        return inspector
    }
}

console.log(canCarry(1, [[1, 2, 4], [2, 3, 8]]))