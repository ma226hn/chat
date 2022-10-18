import { shuffleArray, replacementArray } from './ReplacementArray.js'


export function Encrypt (message) {
  const replacementArrayCopy = [...replacementArray]
  if ((!message) || (typeof message !== 'string')) {
    throw new TypeError('not valid argument')
  }
  message = message.replaceAll(' ', '//').split('')
  const messageCharsValue = countMessageCharsValue(message)
  const hexValues = convertToHex(message) // convert to hex value

  let hexString = replaceHexValue(hexValues, replacementArrayCopy, messageCharsValue)
  hexString += replacementArray[messageCharsValue % 175] // add the message value to the message
  const encryptedMessage = mixMessage(hexString)

  return (encryptedMessage)
}

 // count the sum of the chars(according to its number in unicode table) in the
function countMessageCharsValue (message) {
  let sum = 0
  message.forEach(element => {
    sum += element.charCodeAt(0)
  })
  return sum
}



function convertToHex (message) {
  const hexArray = message.map((char) => {
    return char.charCodeAt(0).toString(16).padStart(4, '0')
  })

  return hexArray
}



function replaceHexValue (hexArray, matrix, messageValue) {
  messageValue = messageValue % 175 // shuffle matrix array according to the message char's   numbers in the unicode table.
  const encryptedMessageArray = hexArray.map(str => {
    let NewValue = ''
    str = str.split('')
    str.forEach((char) => {
      shuffleArray(matrix, messageValue)

      NewValue += matrix[char.charCodeAt(0)]
    })
    return NewValue
  })
  return encryptedMessageArray.join('')
}


function mixMessage (message) {
  let i = 0
  let str1 = ''
  let str2 = ''
  while (i < message.length - 1) {
    str1 += message[i]
    i++
    str2 += message[i]
    i++
  }
  return str1 + str2
}
