# Clean Code  Reflection
(Clean Code) The book is a book that will make any developer rethink coding and change his way of  coding. Every time you need to code a program you need to quickly check t the book and every time you read the book you discover many new ideas and feel that you need to modify your code. This is what I encountered when I wrote this application. I wrote the code and every time I read a chapter in the book I modify the code so I feel like the modification is endless.
## Meaningful Names 
___

using the right names for the programmer and developer gives a common starting point. Using intention -revealing names makes it easier to understand what this variable does. for example . 
-  in (dec-enc-lib)  i used (replacementArray) as the name of a variable and when anyone reads the name know  that this variable is will used to replace another variable or value.
 -  in  chat application (server.js) i use (currentUser- currentRoom) as a variable name, and it gives everyone the right sense of what that variable really means
- using searchable names .I tried to choose variable names, function names, and class names from plain English words for easier (decryption, encryption , chat-box , message-line ,notifyUser)
- On the other hand, it was difficult to find suitable names for some functions (findCharCorrespondingDecimalValue(decryption.js)-countMessageCharsValue(encryption.js))

 ## functions
 ___

 ### I use many function in both (dec-lib) and in ( chat app)  the most of the function are small (2-6 lines) , doing one thing  and monadic for example :
 - convertHexStringToDecimalArray (decryption.js):  five lines code 
 - countStringValue(passEncDec) : four lines 
 - sendMessage (chat-box.js): sex lines 
 ### and there is some function are dyadic (receiveMessage(chat-box.js)
 - DecryptWithPass(passEncDec.js))
 ### I used object as  argument to reduce the number of the arguments

 ```javascript
 
  let user =JSON.parse (sessionStorage.getItem('user'))
  this.#socket.emit(`${action}`,`${this.#roomName}`,user);


  this.#socket.on('create', (room,user )=> {


```
### in (Decrypt()decryption.js) and ((Encrypt(Encryption.js)) I tried to avoid the side effects by modified on the copy of the (ReplacementArray)
### i last version of (dec-enc-lib) there was a duplication in the code so i fixed that and added a module for the common function to avoid duplication and achieve the rule (do not repeat your self).

## comments
___
###  There are few comments in the code I tried to explain the meaning of the code using the name of functions and variables and the code itself
### There are a few cases where I thought I should clarify the purpose of the code
 - decryption.js 
  ```javascript
 arrayOfString.pop()// delete the last element (this element is the value oh the message and not a char in the message)
  ```
  - server.js

   ```javascript

  socket.on('create', (room,user) => {
    let finalRoomName= room+ rooms.length // To make sure the name is unique 
   ``` 

## Formatting
____
### Vertical formatting
- In general, all functions that are related to each other or  have the same concepts are vertically close, to each other and placed where  a function that is called should be below a function that does the calling
- All classes and module are not  long 
### Horizontal formatting
- I used packet (@lnu/eslint) to help me to mange(indentation-Breaking Indentation) 

##objects and Data structures
- there is a main different between object and data structure
Objects hide their data behind and expose functions . Data structure expose their data and have no meaningful functions
so what determine what type should we use  is if we want this structure to use just data or to  use data to change a program behavior .
in my code I can say that i use both types ,but  in different way from the book because there is a bit different between java and java script .
- The object (user) i used in the (chat-box.js) and (server.js)  is a kind of data structure

- customs elements (chat-box, message-line, photo-icon) are a kind of object structure and (oo) because we have data that we process through function and events

## Error Handling
- The programmer's job is to prevent the program from crashing.
- When the programmer writes code, he must be sure that the program will not crash or give an incomprehensible error message.
- Use error handling with( try --catch )and explicitly error's message help to avoid this.
- Tried to handle user error by  adding
(try catch) and this function 
```javascript
function checkAndInsertInputValue() {
  userName = document.querySelector('#nameInput').value
  if (userName == '')
  throw 'you should insert your name !';
   roomName = document.querySelector('#roomName').value
  if (roomName == '')
  throw 'you should insert name for the room !';
  
}
```
- In the (dec-enc-lib) I used try catch in each module to handle  wrong argument type 
```javascript
   if ((!message) || (typeof message !== 'string')) { throw new TypeError('not valid argument') }
```
-Of course I have to add error handling in (server.js) to handle server error and I'll do that in the next release.

## Boundaries
____
 
 - using (dec-enc-lib) considered 3rd party code, but because I wrote   the library, so I didn't need to read about it or not be sure about the fit of using it
 
 - Using socket.io is 3rd party code but it is known to us and we can read about it from the documentation and we can write a little code to test it so that we can define what this code does and what it can do 


## Unit Test
- After reading the (unit test) in the book, I decided to modify all the tests I made in (dec-enc-lib) in the next version because it's not a clean test. You've thought wrongly about how important tests are. . "Test code is just as important as production code". 

## Classes
- according to the book the classes should be (small) and  (Single Responsibility principle)  and that what I did in (chat-box, message-line, photo-icon) classes .
- Every class is responsible for one thing.
- chat-box for mange connection between the client and server 
- message-line display one message 
- photo-icon show the user information 
- modules like (Decryption.js, Encryption.js,PassEncDec.js) all these modules do one thing 
## System
-  the book explains how to separate the system and how to divide the responsibility between all classes .
 

