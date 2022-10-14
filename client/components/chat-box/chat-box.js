

/**
 * The component for massenger.
 *
 * @author // Manar Alibrahim <ma226hn@student.lnu.se>
 *
 */

const template = document.createElement('template')
template.innerHTML =
`
<style>

form {
     background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%;
     }
form input {
     border: 0; padding: 10px; width: 90%; margin-right: .5%;
     }
form #button {
     color:#FFF; background: #2D9F0B; border: none; padding: 10px;  width: 9%; 
    }
#messages {
     list-style-type: none; margin: 0; padding: 0;
     }

#notifyUser {
     position: fixed; bottom: 42px; width: 100%;
     }

</style>

<div id="chatDiv">
    <ul id="messages"></ul>
    <span id="notifyUser"></span>
    <form id="form" action="" > 
      <input type="hidden" id="user" value="" />
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
#socket


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




// exit () {
//  // this.#socket.close()
//   this.remove()
// }


async contact (action) {
   var socket = io("ws://localhost:3000");
  let user =JSON.parse (localStorage.getItem('user'))
  console.log(action)
  socket.emit(`${action}`,`${this.#roomName}`,user);
  socket.on('create', (room,user )=> {
console.log(room,'ölölöl')
this.#roomName =room
localStorage.setItem('user', JSON.stringify(user))

   });
socket.on('join', (user )=>{
    localStorage.setItem('user',JSON.stringify(user))
    })

 var messageInput = this.shadowRoot.querySelector('#messageInput')

   this.shadowRoot.querySelector('#form').addEventListener('submit', (e)=>
  {
    e.preventDefault ()
     var user = JSON.parse (localStorage.getItem('user'))
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


messageInput.addEventListener('keyup', ()=>

{
    var user =JSON.parse (localStorage.getItem('user'))

socket.emit('notifyUser', user,this.#roomName)
}
)      



socket.on('notifyUser',  (sendingUser)=> {
   let thisUser =JSON.parse (localStorage.getItem('user'))
  if(thisUser.id != sendingUser.id) {
  
this.shadowRoot.querySelector('#notifyUser').textContent = `${sendingUser.name} is typing ...`

}
setTimeout(()=>
{
    this.shadowRoot.querySelector('#notifyUser').textContent = ''
} ,1000)

 });



  

}
  }


)
