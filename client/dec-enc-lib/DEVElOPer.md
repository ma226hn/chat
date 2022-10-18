# Dec-ENC-LIB

## Application requirement
Pure JavaScript


## Application advantages
- Encryption and decryption string
- Encryption and decryption object
- Provides additional encryption with a user-entered password .
## Application  development 
- add a  function to decrypt and encrypt voice messages .
- add the ability to decrypt and encrypt photos .
- The algorithm needs more complexity to make it more difficult to hack .
## Application problem 
 - lib har problem med declaration file . i tried to fix that but it needs more time to understand these type of files and what should i write in .
 - 


## testing
 | Function|test case      | input | output |  PASS/FAIL | 
| ----------|------------- | ----- | ------ | ------- |
|  Encrypt/Decrypt| insert invalid value for the message  | input = ('')or(undefined)or(notString)or(null)    |  Error       |    pass     |
|EncryptWithPass/ DecryptWithPass | insert invalid value for the message or the password    |  input(message or password) = ('')or(undefined)or(notString)or(null)   |  Error       |    pass     |
| EncryptObj | insert value not of type object | input = not object  |  Error  (invalid argument )     |    pass     |
|   Encrypt/Decrypt  |insert  string to encrypt function and the result to the Decrypt function     | "My name is manar"  |  My name is manar        |    pass     
|  EncryptWithPass/ DecryptWithPass | insert  string  and password to EncryptWithPass function and the result to the DecryptWithPass function  |  message = 'hello' , password =' key'   | hello     |    pass     |

 ## modules
 ### Decryption

 ### Encryption
 ### ObjectEncDec
 ### PassEncDec
 ### ReplacementArray

## diagram 
![diagram](./diagram.PNG "diagram")