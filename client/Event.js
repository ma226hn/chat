
import {User } from "./User.js"
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

  closeChatDialog(e) {
    e.target.remove()
    document.querySelector('#homePageDive').style. display ='block'
    document.body.style.backgroundImage = ' url(./img/backGrundImg.png)'
  }

  showChatBox(actionName)  {
    try{  
      this.checkAndInsertInputValue()
      let user = new User();
      user.setName(this.#userName)
      user.setProfileImg(this.#profileImg)
      document.querySelector('#homePageDive').style. display ='none'
      const chat = document.createElement('chat-box')
      chat.setAttribute('action', actionName)
      chat.setAttribute('roomName',this.#roomName)
      let userAttribute = JSON.stringify (user.getUserInfo())
      chat.setAttribute('currentUser',userAttribute)
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
    if (this.#roomName == '') {
      throw 'you should insert name for the room !';
    }
  }
   
}
  