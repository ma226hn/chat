import { setUserInfo } from "./sessionWrapper.js"
export class Event {
    #profileImg
    #userName
    #roomName
  
    constructor () {
      this.#profileImg=''
      this.#userName = ''
      this.#roomName =''

    }
  
  
    get profileImg () {
      return this.#profileImg
    }
    get userName () {
        return this.#userName
    }
    get roomName () {
        return this.#roomName
    }

    loadImg(e) {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = ()=> { 
          this.#profileImg = reader.result 
           document.querySelector('#profileImg').setAttribute('src',this.#profileImg)    
        }
     }

   closeChatDialog(e)
    {
        e.target.remove()
        document.querySelector('#homePageDive').style. display ='block'
        setUserInfo('')
        document.body.style.backgroundImage = ' url(./img/backGrundImg.png)'
    }
 showChatBox(actionName)  {
    try{  
      this.checkAndInsertInputValue()
      let  user = {
         name :`${this.#userName}`,
         profileImg : `${this.#profileImg}`
       }
     document.querySelector('#homePageDive').style. display ='none'
     setUserInfo(JSON.stringify (user))
     const chat = document.createElement('chat-box')
     chat.setAttribute('action', actionName)
     chat.setAttribute('roomName',this.#roomName)
     document.body.appendChild(chat)
     document.body.style.backgroundImage = 'unset'
   }
   catch (error){
     document.querySelector('#errorMessage').textContent = `${error}`
   
   }
}
  
  checkAndInsertInputValue() {
    this.#userName = document.querySelector('#nameInput').value
    if (this.#userName == '')
    throw 'you should insert your name !';
     this.#roomName = document.querySelector('#roomName').value
    if (this.#roomName == '')
    throw 'you should insert name for the room !';
    
  }
   
  }
  