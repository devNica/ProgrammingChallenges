
/**
 * crear una funcion que reciba un arreglo de n elementos
 * y lo particione en m sub arreglos de tamaño m
 * la funcion debera retornar solo los subarreglos que cumplan 
 * dicha condicion, en caso de que el numero de particiones
 * sea mayor que el numero de elementos del arreglo
 * se debera retorna un arreglo vacio 
 */
function arrayPartitioner (myArray, breakControl) {
    const iterations = Number(myArray.length / breakControl)
    if (Array.isArray(myArray) && iterations > 0) {
      const newArr = []
      let startPosition = 0
      let endPosition = breakControl
      for (let i = 0; i < Math.floor(iterations); i++) {
        newArr.push(myArray.slice(startPosition, endPosition))
        startPosition += breakControl
        endPosition += breakControl
      }
      return newArr
    } else return []
  }
  
  const a = arrayPartitioner([1, 9, 3, 4, 5, 6], 7)
  console.log(a)