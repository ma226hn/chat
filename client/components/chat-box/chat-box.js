
import { get } from 'node-emoji'
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
#messages li {
     padding: 5px 10px; 
    }
#messages li:nth-child(odd) {
     background: #eee; 
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
#end
#log
#username
#socket
#timer

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
  this.#socket = io("ws://localhost:3000");
  let user = localStorage.getItem('user')
  socket.emit(`${actionName}`,`${this.#roomName}`,user);
  socket.on('create', (room,user )=> {
console.log(room)
this.#roomName =room
localStorage.setItem('user',user)

   });
socket.on('join', function(user ){
    localStorage.setItem('user',user)
    })

 var messageInput = this.shadowRoot.querySelector('#messageInput')

   this.shadowRoot.querySelector('#form').addEventListener('submit', (e)=>
  {
    e.preventDefault ()
     var user = localStorage.getItem('user')
    var message = messageInput.value 
    socket.emit('chatMessage', user, message,this.#roomNme);
   
    messageInput.value=''
  })
  socket.on('chatMessage', function(from, msg){
    //   var me = $('#user').val();
      var color =  '#009afd';
    //   var from = (from == me) ? 'Me' : from;
    console.log(from,msg)
    var messageLine = document.createElement('li')
    
    messageLine.textContent = msg
    
    
    document.querySelector('#messages').append(messageLine);
     });
     
    




 messageInput.focus();
// //   return false;

messageInput.addEventListener('keyup', ()=>

{
    var user = localStorage.getItem('user')
console.log(user)
socket.emit('notifyUser', user,this.#roomName);}
)      



// socket.on('notifyUser', function (user){
// //   var me = $('#user').val();
//  //  if(user != 'me') {
  
// document.querySelector('#notifyUser').textContent = `${user} is typing ...`

// // }
// setTimeout(()=>
// {
//     document.querySelector('#notifyUser').textContent = ''
// } ,1000)

//  });


//  socket.on('create', function (room){



// console.log(room,'room in server')





//  })






  
}
}


)
