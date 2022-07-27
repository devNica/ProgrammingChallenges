const carta = 'bici    coche balón    _playstation bici coche peluche'

function listGifts (letter) {
  const giftArray = letter.split(' ').filter(e => e !== '' && !e.includes('_'))
  return giftArray.reduce((acc, gift) => {
    acc[gift] = (acc[gift] || 0) + 1
    return acc
  }, {})
}

console.log(listGifts(carta))