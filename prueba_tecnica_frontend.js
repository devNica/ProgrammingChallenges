function fetchIndexSmallestNumber(numbersArray) {
    if (Array.isArray(numbersArray)) {

        if (numbersArray.length < Math.pow(5, 10)) {
            if (numbersArray.every(n => (-2e+31 <= n) && (n <= (2e+31 - 1)))) {
                const minNumber = numbersArray.reduce((a, b) => Math.min(a, b))
                return numbersArray.indexOf(minNumber)
            } else throw new Error('one of the elements is not in the specified range')
        } else throw new Error('the array size is greater than the specified maximum')

    } throw new Error('Arg is not number array!')
}

console.log(fetchIndexSmallestNumber([-2, -890, 2, 3, 4, -123078999]))


function getLongestSubstring(str) {
    if (typeof (str) === 'string') {

        if(str.length < 1) return 0

        let chars = [...str]

        const matcheds = {}
        /** 
         * se hace un emparejamiento de los caracteres con el valor  
         * de veces que fueron encontrados
         * */
        chars.forEach(el => (matcheds[el] = matcheds[el] + 1 || 1))
        /**
         * se realiza una serializacion de los emparejados
         * par agruparlos como objetos en un arreglo
         */
        const serializeMatched = (Object.keys(matcheds).map((e) => {
            return { [e]: matcheds[e], idx: chars.lastIndexOf(e) }
        }))

        /**
         * se realiza una coleccion de caracteres 
         * que no se van a repetir, es decir que 
         * cada caracter en la coleccion solo esta presente una 
         * sola vez
         */
        const singles = chars.reduce((acc, item) => {
            if (!acc.includes(item)) {
                acc.push(item);
            }
            return acc;
        }, [])

        let subStr = ''
        let highestIndex = 0

        singles.forEach(s=>{
            serializeMatched.forEach(item=>{
                if (Object.keys(item)[0]===s){
                    const times = Object.values(item)[0]
                    const idx = Object.values(item)[1]
                    highestIndex = highestIndex >= idx ? highestIndex : idx
                    if( times >= 1 && idx > 0 && idx <= highestIndex) subStr += Object.keys(item)[0]
                }
            })
        })
        
        return subStr.length


    } else throw new Error('Arg is not a string')
}


console.log(getLongestSubstring('abcabcbb'))