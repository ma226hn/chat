# dec-enc-lib

Node.js dec-enc-lib library<br/>

* Pure JavaScript
* Encryption and decryption string
* Encryption and decryption object
* Provides additional encryption with  a user-entered password . 



## Installing

```shell
npm i dec-enc-lib
```


### Testing

```shell
npm test
```

## Work environment

This library developed and tested primary for Node.js

## license
MIT
## Usage

### Decryption and Encryption string


#### Example

```javascript
// For string
import { Encrypt} from 'dec-enc-lib/src/Encryption.js'
import {Decrypt} from 'dec-enc-lib/src/Decryption.js'

const text = 'Hello there!';
const encryptedMessage = Encrypt(text);
console.log('encrypted: ', encrypted);
const decryptedMessage = Decrypt(encryptedMessage);
console.log('decrypted: ', decryptedMessage);
```

### Decryption and Encryption object


#### Example


```javascript
// For object
import {EncryptObj,DecryptObj} from 'dec-enc-lib/src/ObjectEncDec.js'

const object = { name :'manar' , age : 34 , children :['jory','horeya','shams']};
const encrypted = EncryptObj(object);
console.log('encrypted: ', encrypted);
const decrypted = DecryptObj(encrypted);
console.log('decrypted: ', decrypted);
```

###  Extra Decryption and Encryption for string with password


#### Example


```javascript
// With password
import {EncryptWithPass,DecryptWithPass} from 'dec-enc-lib/src/PassEncDec.js'

const message = ' my name is Manar Alibrahim';
const password = 'key88';
const encrypted = EncryptWithPass(message,password);
console.log('encrypted: ', encrypted);
const decrypted = DecryptWithPass(encrypted, password);
console.log('decrypted: ', decrypted);
```


## Keywords
 Decryption- Encryption  - password - object