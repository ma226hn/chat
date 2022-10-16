import { Encrypt} from '../../dec-enc-lib/src/Encryption.js'
import {Decrypt} from '../../dec-enc-lib/src/Decryption.js'


const template = document.createElement('template')
template.innerHTML =
`
<style>

form {
     background: #000;
      padding: 3px;
       position: fixed;
        bottom: 0;
         width: 100%;
     }
form input {
     border: 0;
      padding: 10px;
       width: 90%;
        margin-right: .5%;
     }
form #button {
     color:#FFF;
      background: #2D9F0B;
       border: none; 
       padding: 10px;
         width: 9%; 
    }
#messages {
     list-style-type: none;
      margin: 0; 
      padding: 0;
      margin-bottom : 200px;
     }

#notifyUser {
  
     color:red;
     }
     li {
   
      margin-bottom: 5%;
    }
    #toolBarDiv {
      background: #2D9F0B;
      color:#FFF;
      width: 100%;
      height: 20px;
      position:sticky;
      margin-bottom: 20px;
      display :flex;
      flex-direction: row;
      gap:4px;
      padding: 0;
    


    }
    #close {
      color:#FFF;
      background: red;
      width :20px;
      heigh :40px;
    }
   #close:hover , #close:active {
    background-color:rgb(79, 26, 253)
   }
#roomName
{
  margin: 0; padding: 0;
}
 
#joinLeftNotify{
  width:auto;
  heigh : auto;
  opacity:80%;
  background-color: black;
}
  

</style>

<div id="chatDiv">
<div id="toolBarDiv">
<button id = "close">X </button>
<p id="roomName"></p>
</div>
    <ul id="messages"></ul>
   
    <form id="form" action="" > 
    <p id="notifyUser"></p>
    
      <input id="messageInput" autocomplete="off" " placeholder="Type yor message here.." /><input type="submit" id="button" value="Send"/> 
    </form>
  </div>


`
customElements.define('chat-box',

  /**
   * Class.
   */
  class extends HTMLElement {
#roomName

 #socket = io("ws://localhost:3000");

/**
 * Constructor for class .
 */
constructor () {
  super()

  this.attachShadow({ mode: 'open' })
    .appendChild(template.content.cloneNode(true))
    this.shadowRoot.querySelector('#close').addEventListener('click',()=>
    {
      
      this.#socket.emit('closeChat');
      this.dispatchEvent(new CustomEvent('close', {  bubbles: true }))
     
     

    }

    )
 
}
/**
 * When component upload.
 */
async connectedCallback () {
  
  
    this.shadowRoot.querySelector('#messageInput').focus()
     let action = this.getAttribute('action')
     this.#roomName = this.getAttribute('roomName')
  

    this.contact(action)
 
  }



async contact (action) {
 

  let user =JSON.parse (sessionStorage.getItem('user'))
  console.log(action)
  
  this.#socket.emit(`${action}`,`${this.#roomName}`,user);
  this.#socket.on('create', (room,user )=> {

this.#roomName =room

this.shadowRoot.querySelector('#roomName').textContent = `Room Name ${this.#roomName}`
sessionStorage.setItem('user', JSON.stringify(user))

   });
   this.#socket.on('info', (user )=>{
  this.shadowRoot.querySelector('#roomName').textContent = `Room Name ${this.#roomName}`
console.log(user)
  sessionStorage.setItem('user',JSON.stringify(user))
    })
    this.#socket.on('join', (user )=>{
    this.notify(`${user} has joined in chat`)
        })
    
 var messageInput = this.shadowRoot.querySelector('#messageInput')

   this.shadowRoot.querySelector('#form').addEventListener('submit', (e)=>
  {
    e.preventDefault ()
    if (messageInput.value !== '')
    {
     
    let message = messageInput.value 
    let encryptedMessage = Encrypt(message)
    this.#socket.emit('chatMessage', encryptedMessage);
   
    messageInput.value=''
    messageInput.focus();}
  })
  this.#socket.on('chatMessage', (from, msg) => {
   let user = sessionStorage.getItem('user')
    user= JSON.parse(user)
    var messageLine = document.createElement('li')
    const messageDiv = document.createElement('message-line')
    messageDiv.setAttribute('userName',from.name)
    messageDiv.setAttribute('userColor',from.color)
    messageDiv.setAttribute('userImg',from.profileImg)
    console.log(user.id,from.id)
    if (user.id === from.id)
    {
      console.log('do')
      messageDiv.setAttribute('flex','')}

    let decryptedMessage = Decrypt(msg);

    messageDiv.setAttribute('message',decryptedMessage)
    messageLine.appendChild(messageDiv)

  
    
    
    this.shadowRoot.querySelector('#messages').append(messageLine);
     });
     
    







messageInput.addEventListener('keydown', ()=>

{
  console.log('key')
    

    this.#socket.emit('notifyUser')
}
)      



this.#socket.on('notifyUser',  (sendingUser)=> {
   let thisUser =JSON.parse (sessionStorage.getItem('user'))
   console.log(sendingUser.name)
  if(thisUser.id != sendingUser.id) {
    this.notify(`${sendingUser.name} is typing ...`)
  }
 })
 this.#socket.on('closeChat', (user)=>  {
  console.log(`${user.name} has left `)
this.notify( `${user.name} has left `)
 

})

  
 
}
  
    notify (str) {
      
this.shadowRoot.querySelector('#notifyUser').textContent = str


setTimeout(()=>
{
    this.shadowRoot.querySelector('#notifyUser').textContent = ''
} ,1000)

   }

  }

)
