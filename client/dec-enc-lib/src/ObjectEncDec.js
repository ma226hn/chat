import { Decrypt } from './Decryption.js'
import { Encrypt } from './Encryption.js'



export function EncryptObj (object) {
  if (typeof object !== 'object') { throw new TypeError(' the inserted value is not object') }
  const message = JSON.stringify(object)

  const encryptedMessage = Encrypt(message)
  return encryptedMessage
}



export function DecryptObj (message) {
  if ((!message) || (typeof message !== 'string')) { throw new TypeError('not valid argument') }

  message = Decrypt(message)

  const originalObj = JSON.parse(message)

  return (originalObj)
}
