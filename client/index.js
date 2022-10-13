

const socket = io("ws://localhost:3000");
localStorage.setItem('name','manar')

var messageInput = document.querySelector('#m')
var myRoom 
  var form = document.querySelector('#form').addEventListener('submit', (e)=>
  {
    e.preventDefault ()
     var from = localStorage.getItem('name')
    var message = messageInput.value 
    socket.emit('chatMessage', from, message,myRoom);
   
    messageInput.value=''
  })




messageInput.focus();
//   return false;

messageInput.addEventListener('keyup', ()=>

{
    var user = localStorage.getItem('name')
console.log(user)
socket.emit('notifyUser', user,myRoom);}
)      

 socket.on('chatMessage', function(from, msg){
//   var me = $('#user').val();
  var color =  '#009afd';
//   var from = (from == me) ? 'Me' : from;
console.log(from,msg)
var messageLine = document.createElement('li')
messageLine.textContent = msg


document.querySelector('#messages').append(messageLine);
 });
 
 socket.on('hi', function( userId ){

  console.log(userId,'id')
 })

socket.on('notifyUser', function (user){
//   var me = $('#user').val();
 //  if(user != 'me') {
  
document.querySelector('#notifyUser').textContent = `${user} is typing ...`

// }
setTimeout(()=>
{
    document.querySelector('#notifyUser').textContent = ''
} ,1000)

 });


 document.querySelector('#startGame').addEventListener('click', ()=>
 { 
  myRoom =document.querySelector('#roomName').value
   //const socket = io.connect();
   console.log(myRoom,'*****')
  
 socket.emit('create',`${myRoom}`);
 
 })
 document.querySelector('#JoinGame').addEventListener('click', ()=>
 {
  myRoom =document.querySelector('#roomName').value
   //const socket = io.connect();
  // let myRoom =document.querySelector('#roomName').value
 socket.emit('create',`${myRoom}`);
 })

 socket.on('create', function (room){



console.log(room,'room in server')





 })








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