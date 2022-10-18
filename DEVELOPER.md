# Chat App

## Application requirement
-Node.js
-express
-socket.io
-dec-enc-lib


## Application advantages
- Application using pure javascript , express,node and socket.io .
- application can send just text message between  the participate in the same room 
- Application send notify when a new participate join in the room and when one let´ft and when one write .
- Application provide decryption and encryption .
## Application  development 
- Sending an error message when the user wants to join a non-existent room instead of creating a new room
- add a  voice call and video call to the chat.
- add the ability to send and receive photos.
- add database to save the conversations and the participates.
## Application problem 
 - When using (dec-enc-lib) library i could'nt use import from the node module so i added the library manuel (dec-enc-lib) to the client folder 
 - 


## testing
 | test cases    | Output| PASS/FAIL | 
| --------- |----|----- | 
|user doesn't insert name  | error message appears "you should insert your name"| pass |
|user insert name but doesn't insert room name| error message appears""you should insert the room's name| pass|
|Users send and receive messages to the common room|-|pass|
|User can only see messages in his room and can't see messages in other rooms |-|pass|
|User joins a non-existent room | create a new room with the same name |pass|
| Users are notified when a user joins  the room| message appears "(the users's name) has joined"|pass|
|Users are notified when a user  left t the room| message appears "(the users's name) has left "|pass|
| Users are notified when a user write message | message appears "(the users's name) typing "|pass|

 ## modules
 ### Server.js
 -  server code where app uses socket.io and http server to emit messages between all the participants .
 ## Client
 ### Components

  I used following customElements  
 -  chat-box : It contains the main interface for chatting.
 - message-line : components for each message consists of one message and Photo-icon component
 - photo-icon : components consists of user's name  and user's photo .
 

