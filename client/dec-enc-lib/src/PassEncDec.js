import { Decrypt } from './Decryption.js'
import { Encrypt } from './Encryption.js'


export function EncryptWithPass (message, password) {
  if ((!message) || (!password) || (typeof message !== 'string') || (typeof password !== 'string')) {
    throw new TypeError('not valid argument')
  }

  const sumPassCharsValue = countStringValue(password.split(''))

  const divideCounter = (sumPassCharsValue % (password.length)) + 1

  const encryptedMessage = Encrypt(message)

  let encryptedMessageWithPass = ''

  let i = 0
  while (i < encryptedMessage.length) {
    encryptedMessageWithPass += encryptedMessage.slice(i, i + divideCounter)
    i = i + divideCounter
    encryptedMessageWithPass += Math.random().toString(16).substr(2, 8)
  }
  return encryptedMessageWithPass
}


function countStringValue (message) {
  let sum = 0
  message.forEach(element => {
    sum += element.charCodeAt(0)
  })
  return sum
}




export function DecryptWithPass (message, password) {
  if ((!message) || (!password) || (typeof message !== 'string') || (typeof password !== 'string')) {
    throw new TypeError('not valid argument')
  }

  const passValue = countStringValue(password.split(''))

  const divideCounter = (passValue % (password.length)) + 1
  let rearrangedMessage = ''
  let i = 0
  while (i < message.length) {
    rearrangedMessage += message.slice(i, i + divideCounter)
    i = i + divideCounter + 8
  }
  const decryptedMessage = Decrypt(rearrangedMessage)

  return decryptedMessage
}
