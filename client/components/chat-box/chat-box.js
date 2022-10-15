
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
    #roomName {
      background: #2D9F0B;
      color:#FFF;
      width: 100%;
      height: 20px;
      position:sticky;
      margin-bottom: 20px;

    }
 
   
  

</style>

<div id="chatDiv">
<div id="roomName">
<p ></p>
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



/**
 * Constructor for class .
 */
constructor () {
  super()

  this.attachShadow({ mode: 'open' })
    .appendChild(template.content.cloneNode(true))
 
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
 
   var socket = io("ws://localhost:3000");
  let user =JSON.parse (sessionStorage.getItem('user'))
  console.log(action)
  console.log(user.profileImg,'ååå')
  socket.emit(`${action}`,`${this.#roomName}`,user);
  socket.on('create', (room,user )=> {

this.#roomName =room
console.log(user.profileImg,'ååå')
this.shadowRoot.querySelector('#roomName').textContent = `Room Name ${this.#roomName}`
sessionStorage.setItem('user', JSON.stringify(user))

   });
socket.on('join', (user )=>{
  this.shadowRoot.querySelector('#roomName').textContent = `Room Name ${this.#roomName}`

  sessionStorage.setItem('user',JSON.stringify(user))
    })

 var messageInput = this.shadowRoot.querySelector('#messageInput')

   this.shadowRoot.querySelector('#form').addEventListener('submit', (e)=>
  {
    e.preventDefault ()
     var user = JSON.parse (sessionStorage.getItem('user'))
    var message = messageInput.value 
    socket.emit('chatMessage', user, message,this.#roomName);
   
    messageInput.value=''
  })
  socket.on('chatMessage', (from, msg) => {
   
    console.log(from,msg)
    var messageLine = document.createElement('li')
    const messageDiv = document.createElement('message-line')
    messageDiv.setAttribute('userName',from.name)
    messageDiv.setAttribute('userColor',from.color)
    messageDiv.setAttribute('userImg',from.profileImg)

    messageDiv.setAttribute('message',msg)
    messageLine.appendChild(messageDiv)

  
    
    
    this.shadowRoot.querySelector('#messages').append(messageLine);
     });
     
    




 messageInput.focus();


messageInput.addEventListener('keydown', ()=>

{
  console.log('key')
    let user =JSON.parse (sessionStorage.getItem('user'))

socket.emit('notifyUser', user,this.#roomName)
}
)      



socket.on('notifyUser',  (sendingUser)=> {
   let thisUser =JSON.parse (sessionStorage.getItem('user'))
   console.log(sendingUser.name)
  if(thisUser.id != sendingUser.id) {
  
this.shadowRoot.querySelector('#notifyUser').textContent = `${sendingUser.name} is typing ...`
console.log(this.shadowRoot.querySelector('#notifyUser').textContent)

}
setTimeout(()=>
{
    this.shadowRoot.querySelector('#notifyUser').textContent = ''
} ,1000)

 });
 socket.on('connect_failed', function() {
  console.log("Sorry, there seems to be an issue with the connection!");
})

  

}
  }


)
