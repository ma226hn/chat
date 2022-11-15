import './components/chat-box/index.js'
//import './eventHandler.js'
import { Event} from './Event.js'

const event = new Event()
document.querySelector('#imgInput').addEventListener('change', async(e)=>{
console.log('ÄÄÄ')
event.loadImg(e)})
  
  
  document.body.addEventListener('close', (e)=>  event.closeChatDialog(e)
   )
  
  
  document.querySelector('#startChat').addEventListener('click', ()=> { 
    event.showChatBox('create')
  })
  
  
  
  document.querySelector('#JoinChat').addEventListener('click', ()=> {
    event.showChatBox('join')
  })
  
  
  