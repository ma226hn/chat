
import {template} from './htmlTemplate.js'
 class PhotoIcon extends HTMLElement {

  
  constructor () { 
    super()
    this.attachShadow({ mode: 'open' })
    .appendChild(template.content.cloneNode(true))     
  }


  connectedCallback() { 

    this.shadowRoot.querySelector('p').textContent =  this.getAttribute('message') 
    this.shadowRoot.querySelector('photo-icon').setAttribute('srcImg',this.getAttribute('userImg'))
    this.shadowRoot.querySelector('photo-icon').setAttribute('name',this.getAttribute('userName'))
    this.shadowRoot.querySelector('#talkBubble').style.color= this.getAttribute('userColor')
    if (this.hasAttribute('myMessage')) {
      this.changeMessageDir()
    }
  }


changeMessageDir() {
  this.shadowRoot.querySelector('#talkBubble').removeAttribute('class')
  this.shadowRoot.querySelector('#talkBubble').setAttribute('class','talkBubbleRight')
  this.shadowRoot.querySelector('#messageLine').removeAttribute('class')
  this.shadowRoot.querySelector('#messageLine').setAttribute('class','messageLineRight')
}


}
customElements.define("message-line", PhotoIcon);