import { Encrypt} from '../../dec-enc-lib/src/Encryption.js'
import {Decrypt} from '../../dec-enc-lib/src/Decryption.js'
import {template}from './htmlTemplate.js'
import {setUserInfo,getUserInfo} from '../../sessionWrapper.js'

customElements.define('chat-box',   class extends HTMLElement {
#roomName
#messageInput
#socket = io("ws://localhost:3000");

constructor () {
  super()
  this.attachShadow({ mode: 'open' })
    .appendChild(template.content.cloneNode(true))
  this.#messageInput = this.shadowRoot.querySelector('#messageInput')
  this.shadowRoot.querySelector('#close').addEventListener('click',()=> {
      this.#socket.emit('closeChat');
      this.dispatchEvent(new CustomEvent('close', {  bubbles: true }))
  })
  this.#messageInput.addEventListener('keydown', ()=> {
      this.#socket.emit('notifyUser')
  }) 
  this.shadowRoot.querySelector('#form').addEventListener('submit', (e)=> {
  e.preventDefault ()
  this.sendMessage()
   })
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
  let user = getUserInfo()
  this.#socket.emit(`${action}`,`${this.#roomName}`,user);
  this.#socket.on('create', (room,user )=> {
    this.#roomName =room
    this.shadowRoot.querySelector('#roomName').textContent = `Room Name ${this.#roomName}`
     setUserInfo(user)
  })
  this.#socket.on('info', (user )=>{
    this.shadowRoot.querySelector('#roomName').textContent = `Room Name ${this.#roomName}`
    setUserInfo(user)
  })
  this.#socket.on('join', (user )=>{
    this.notify(`${user} has joined in chat`)
  })
  this.#socket.on('chatMessage', (from, msg) => {
    this.receiveMessage(from,msg)
  })
  this.#socket.on('notifyUser',  (sendingUser)=> {
   let thisUser = getUserInfo()
   if(thisUser.id != sendingUser.id) {
     this.notify(`${sendingUser.name} is typing ...`)
   }
 })
  this.#socket.on('closeChat', (user)=>  {
    this.notify( `${user.name} has left `)
 })
}

notify (str) {
  this.shadowRoot.querySelector('#notifyUser').textContent = str
  setTimeout(()=> {
    this.shadowRoot.querySelector('#notifyUser').textContent = ''
  } ,1000)
}

sendMessage () {  
  if (this.#messageInput .value !== ''){
    let message = this.#messageInput .value 
    let encryptedMessage = Encrypt(message)
    this.#socket.emit('chatMessage', encryptedMessage);
    this.#messageInput .value=''
    this.#messageInput .focus()
  }
}

receiveMessage(from,msg) {
  let user = getUserInfo()
  var messageLine = document.createElement('li')
  const messageDiv = document.createElement('message-line')
  messageDiv.setAttribute('userName',from.name)
  messageDiv.setAttribute('userColor',from.color)
  messageDiv.setAttribute('userImg',from.profileImg)
  if (user.id === from.id) {
     messageDiv.setAttribute('myMessage','')
  }
  let decryptedMessage = Decrypt(msg);
  messageDiv.setAttribute('message',decryptedMessage)
  messageLine.appendChild(messageDiv)
  this.shadowRoot.querySelector('#messages').append(messageLine);
  }
}

)
