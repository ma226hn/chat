import { shuffleArray , replacementArray } from './ReplacementArray.js'

export function Decrypt (message) {
  const replacementArrayCopy = [...replacementArray]
  if ((!message) || (typeof message !== 'string')) { throw new TypeError('not valid argument') }

  const rearrangedMessage = rearrangeMessageChar(message)
  const arrayFromMessageChar = rearrangedMessage.split('')
  const arrayOfString = convertMessageToArrayOfString(arrayFromMessageChar)
  const valueOfLastElement = replacementArray.findIndex(element => element === arrayOfString[arrayOfString.length - 1])
  arrayOfString.pop()// delete the last element (this element is the value oh the message and not a char in the message)
  const sumValueOfAllCharsInMessage = valueOfLastElement
  const replacementValueArray = findReplacementValue(arrayOfString, sumValueOfAllCharsInMessage, replacementArrayCopy)
  const arrayOfChars = findCharCorrespondingDecimalValue(replacementValueArray)

  let messageText = (arrayOfChars.join(''))
  messageText = messageText.replaceAll('//', ' ')
  return messageText
}



function rearrangeMessageChar (message) {
  let i = 0
  let j = message.length / 2
  let rearrangedMessage = ''
  while (j < message.length) {
    rearrangedMessage += `${message[i]}${message[j]}`
    i++
    j++
  }
  return rearrangedMessage
}



function convertMessageToArrayOfString (message) {
  let buffer = ''
  const arrayOfString = []

  for (let i = 0; i < message.length; i += 4) {
    for (let j = 0; j < 4; j++) {
      buffer += message[i + j]
    }
    arrayOfString.push(buffer)
    buffer = ''
  }
  return arrayOfString
}


function findReplacementValue (message, mValue, matrix) {
  let index
  const valueArray = []

  message.forEach(member => {
    shuffleArray(matrix, mValue)

    index = matrix.findIndex(element => element === member)
    valueArray.push(String.fromCharCode(index))
  })
  return valueArray
}



function findCharCorrespondingDecimalValue (message) {
  const decimalValueArray = convertHexStringToDecimalArray(message)

  const charArray = decimalValueArray.map(element => { return String.fromCharCode(element) })

  return charArray
}


function convertHexStringToDecimalArray (message) {
  const decimalValueArray = []
  for (let i = 0; i < message.length; i += 4) { decimalValueArray.push(parseInt((message.slice(i, i + 4)).join(''), 16)) }
  return decimalValueArray
}
