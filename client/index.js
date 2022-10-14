import './components/chat-box/index.js'
// const socket = io("ws://localhost:3000");
var profileImg =''
var userName = ''
var roomName =''
document.querySelector('#imgInput').addEventListener('change', (e)=>
{

  let file = e.target.files[0];

 
  let reader = new FileReader();
 reader.readAsDataURL(file);
  reader.onloadend = function() {
     // console.log(reader.result)
     profileImg = reader.result 
     document.querySelector('#profileImg').setAttribute('src',profileImg)    
}

})
function checkInputValue()
{
  userName = document.querySelector('#nameInput').value
  if (userName == '')
  throw 'you should insert your name !';
   roomName = document.querySelector('#roomName').value
  if (roomName == '')
  throw 'you should insert name for the room !';
  
}

document.querySelector('#startChat').addEventListener('click', ()=>
{ 
  showChatBox('create')
})
// socket.on('create', function(room,user ){
// console.log(room)
// beginChat()
//    });
document.querySelector('#JoinChat').addEventListener('click', ()=>
{
  showChatBox('join')


})
function showChatBox(actionName)
{
  try{  
    checkInputValue()
  let  user = {
     name :`${userName}`,
     profileImg : `${profileImg}`
     
   }
   document.querySelector('#homePageDive').style. display ='none'
   localStorage.setItem('user', user)
   const chat = document.createElement('chat-box')
   chat.setAttribute('action', actionName)
   chat.setAttribute('roomName',roomName)
   document.body.appendChild(chat)
  // socket.emit(`${actionName}`,`${roomName}`,user);
   
 }
 catch (e){
   console.log(e)
 
 }
}
// socket.on('join', function(user ){
//  beginChat()
//     })


//       function beginChat(){
//         localStorage.setItem('user', user)
//       }


// //localStorage.setItem('name','manar')

// var messageInput = document.querySelector('#m')
// var myRoom 
//    document.querySelector('#form').addEventListener('submit', (e)=>
//   {
//     e.preventDefault ()
//      var from = localStorage.getItem('name')
//     var message = messageInput.value 
//     socket.emit('chatMessage', from, message,myRoom);
   
//     messageInput.value=''
//   })




// messageInput.focus();
// //   return false;

// messageInput.addEventListener('keyup', ()=>

// {
//     var user = localStorage.getItem('name')
// console.log(user)
// socket.emit('notifyUser', user,myRoom);}
// )      

//  socket.on('chatMessage', function(from, msg){
// //   var me = $('#user').val();
//   var color =  '#009afd';
// //   var from = (from == me) ? 'Me' : from;
// console.log(from,msg)
// var messageLine = document.createElement('li')
// messageLine.textContent = msg


// document.querySelector('#messages').append(messageLine);
//  });
 
//  socket.on('hi', function( userId ){

//   console.log(userId,'id')
//  })

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








// $(document).ready(function(){
//   var name = makeid();
//   $('#user').val(name);
//   socket.emit('chatMessage', 'System', '<b>' + name + '</b> has joined the discussion');
// });

// function makeid() {
//   var text = "";
//   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//   for( var i=0; i < 5; i++ ) {
//     text += possible.charAt(Math.floor(Math.random() * possible.length));
//   }
//   return text;
// }