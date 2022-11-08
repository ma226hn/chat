import './components/chat-box/index.js'
import './eventHandler.js'

var profileImg =''
var userName = ''
var roomName =''

document.querySelector('#imgInput').addEventListener('change', async(e)=> {

  let file = e.target.files[0];
  let reader = new FileReader();
 reader.readAsDataURL(file);
  reader.onloadend = await function() { 
     profileImg = reader.result 
     document.querySelector('#profileImg').setAttribute('src',profileImg)    
    }

})


document.body.addEventListener('close', (e)=> {
 
  e.target.remove()
  document.querySelector('#homePageDive').style. display ='block'
  sessionStorage.setItem('user','')
  document.body.style.backgroundImage = ' url(./img/backGrundImg.png)'
})


document.querySelector('#startChat').addEventListener('click', ()=> { 
  showChatBox('create')
})



document.querySelector('#JoinChat').addEventListener('click', ()=> {
  showChatBox('join')
})


function showChatBox(actionName)  {
  try{  
    checkAndInsertInputValue()
  let  user = {
     name :`${userName}`,
     profileImg : `${profileImg}`
     }
   document.querySelector('#homePageDive').style. display ='none'
   sessionStorage.setItem('user',JSON.stringify (user))
   const chat = document.createElement('chat-box')
   chat.setAttribute('action', actionName)
   chat.setAttribute('roomName',roomName)
   document.body.appendChild(chat)
   document.body.style.backgroundImage = 'unset'
 }
 catch (error){
   document.querySelector('#errorMessage').textContent = `${error}`
 
 }
}



function checkAndInsertInputValue() {
  userName = document.querySelector('#nameInput').value
  if (userName == '')
  throw 'you should insert your name !';
   roomName = document.querySelector('#roomName').value
  if (roomName == '')
  throw 'you should insert name for the room !';
  
}


