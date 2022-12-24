/**
 * Santa Claus necesita hacer una revisión de sus cajas de regalos para asegurarse de que puede empaquetarlas todas en su trineo. 
 * Cuenta con una serie de cajas de diferentes tamaños, que se caracterizan por su longitud, anchura y altura.
 * Tu tarea es escribir una función que, dada una lista de cajas con sus tamaños, determine si es posible empaquetar todas las cajas 
 * en una sola de manera que cada caja contenga a otra (que a su vez contenga a otra, y así sucesivamente).
 * Cada caja representa sus medidas con un objeto. Por ejemplo: {l: 2, w: 3, h: 2}. Esto significa que 
 * la caja tiene una longitud de 2, una anchura de 3 y una altura de 2.
 * Una caja entra en otra caja si todos los lados de la primera son menores a los lados de la segunda. 
 * Los elfos nos han dicho que las cajas no se pueden rotar, así que no se puede poner una caja de 2x3x2 en una caja de 3x2x2. Veamos unos ejemplos:
 */


const boxes = [
    { l: 1, w: 1, h: 3 },
    { l: 2, w: 2, h: 4 },
    { l: 3, w: 3, h: 5}
]


function fitsInOneBox(boxes) {
    let verify = true
    if (Array.isArray(boxes)) {

        const v= boxes.every(b=>Object.keys(b).join('')==='lwh')
        if(!v) return false

        boxes.sort((b1, b2) => ((b1.l * b1.w * b1.h) > (b2.l * b2.w * b2.h)) ? 1 : ((b1.l * b1.w * b1.h) < (b2.l * b2.w * b2.h)) ? -1 : 0)
        
        for (let index = 0; index < (boxes.length-1); index++) {
            if (boxes[index].l >= boxes[index + 1].l || boxes[index].w >= boxes[index + 1].w || boxes[index].h >= boxes[index + 1].h) {
                verify = false
                break
            }
        }
    }
    return verify
}

const c = fitsInOneBox(boxes)
