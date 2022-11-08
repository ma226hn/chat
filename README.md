# Chat
- Realtime (chat) app built with HTML,pure JavaScript, Node, express and socket.io
- User can create new chat room or join existing chat room.
- The user invites other users to the chat room by sending the name of the room by e-mail, SMS or any other means.
- User can send and receive text messages from all members in the chat room.
- Users in the chat room cannot read or receive the message from other chat rooms.
- Users in the chat room notifies when a new member join to the chatroom, ,leave the chatroom or when a member write a message.
- The app uses a library (dec-enc-lib) that I Wrote for encryption and decryption
- [README file to Dec-Enc-lib](./client/dec-enc-lib/README.md 'README file to Dec-Enc-lib')
- [DEVELOPER file to Dec-Enc-lib](./client/dec-enc-lib/DEVElOPer.md ' DEVELOPER file to ')

## Installing
. download the project or clone it 
```shell
git clone https://github.com/ma226hn/chat.git
```
. Navigate to the project's root.
```shell
cd  root
```
. install node packets.
```shell
npm install
```
. Create a .env file.
Copy and paste the texts in .env.example to .env and change the port value if you want

. Run the project
```shell
npm run dev
```
## Usage
-  The main interface for project 

![mainSide](images/mainInterface.PNG "main interface")


- The user should insert his name and room's name.
- If the user did not insert (name , room's name ) error message appear 

 ![errorMessage](images/insertRoomName.PNG "error message")

 - The chat interface appears and contains the final room name that the user sends to other users (via SMS, email or other methods)

  ![roomName](images/joinRoom.PNG "roomName")

  - An unlimited number of members can participate in the room

   ![mulimember](images/multimember.PNG "multi member")

   
   ## demo
   - demo video link
  -  https://youtu.be/FYC1I_oRTY0