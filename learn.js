/**
 * FROM:
 * https://adventjs.dev/challenges/19
 */


/**  
 * Con motivo de las fechas más bonitas del año, en Platzi han lanzado una promoción muy especial 
 * porque la educación es un regalo 🎁 para siempre. En Platzi tienen más de 800 cursos 📚 pero, 
 * claro, nuestro tiempo es limitado. Así que vamos a optimizar nuestro tiempo disponible para 
 * completar dos cursos usando el máximo número de horas disponible.Tenemos que crear una función 
 * que recibe dos parámetros. El primero es el número de horas que tenemos disponible ⏳ 
 * y el segundo es un array donde cada índice es un curso y el valor el tiempo que se tarda en completar.
 * Tenemos claro que queremos hacer dos cursos así que la función debe devolver un array 
 * con el índice de los dos cursos que vamos a poder completar con el tiempo disponible proporcionado 
 * y usando el máximo tiempo disponible. Si no nos da tiempo, devolvemos null
 * Vamos a ver unos ejemplos:
 */


function learn(time, courses) {
    let coursesArray = [...courses]
    let pairs = []
    let debugPairs = [0, 0]
    
    if (Array.isArray(coursesArray)) {
        
        function goThrough(current, subarray){
            if(Array.isArray(subarray)) {
                subarray.forEach(subE =>{
                    if(current+subE <= time) {
                        
                        if( (current + subE) > ( debugPairs[0] + debugPairs[1])) {
                            debugPairs[0] = current
                            debugPairs[1] = subE 

                            pairs[0] = courses.indexOf(debugPairs[0])
                            pairs[1] = courses.indexOf(debugPairs[1])
                        }
                    }
                })
            }
        }
       
        for (let index = 0; index < coursesArray.length;) {
            goThrough(coursesArray[index], coursesArray.slice(1))
            coursesArray.shift()
        }
        
        if ((debugPairs[0] + debugPairs[1]) > 0) {
            return pairs
        } else {
            return null
        }
    }
}

console.log(learn(5, [5, 5, 5]))