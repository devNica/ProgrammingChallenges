function findLongestSubstr(str) {

    if (str.length < 1) return 0


    const chainMinifier = (charArray) => charArray.reduce((acc, item) => {
        if (!acc.includes(item)) {
            acc.push(item);
        }
        return acc;
    }, [])

    const control = Number(str.charAt(0))
    const stringToScan = str.substring(1, str.length)
    let longestChainSize = 0
    let substringToReturn = ''

    if(control > 0 && control < 6) {
        for (let i = 0; i < stringToScan.length; i++) {
            for (let j = control+i; j <= (stringToScan.length); j++) {
                const currentSubstring =  stringToScan.substring(i, j)
                const simplifiedString = chainMinifier([...currentSubstring])
    
                if (simplifiedString.length == control && currentSubstring.length >= longestChainSize) {
                    longestChainSize = currentSubstring.length
                    substringToReturn = currentSubstring
                } else if (simplifiedString.length > control) {
                    break;
                }
            }
        }
    
    } else throw new Error('K is not in the range of 1 to 6')

}

console.log(findLongestSubstr('3aabacbebebe'))
console.log(findLongestSubstr('2aabbcbbbadef'))
