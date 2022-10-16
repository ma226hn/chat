
const template = document.createElement('template')
template.innerHTML =
`

<style>


.messageLineRight {
  display: flex;
  flex-direction: row;

  gap: 40px;

}
.talkBubbleRight {
  width: auto;
  min-width: 100px;
  height: 80px;
  background: rgb(236, 226, 226);
  position: relative;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
}
.talkBubbleRight:before {
  content: "";
  position: absolute;
  right: 100%;
  top: 26px;
  width: 0;
  height: 0;
  border-top: 13px solid transparent;
  
  border-bottom: 13px solid transparent;
  border-right: 26px solid rgb(236, 226, 226);
}
.messageLineLift {
  display: flex;
  flex-direction: row-reverse;

  gap: 40px;

}
.talkBubbleLeft {
  width: auto;
  min-width: 100px;
  height: 80px;
  background: rgb(236, 226, 226);
  position: relative;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
}
.talkBubbleLeft:before {
  content: "";
  position: absolute;
  left: 100%;
  top: 26px;
  width: 0;
  height: 0;
  border-top: 13px solid transparent;
  
  border-bottom: 13px solid transparent;
  border-left: 26px solid rgb(236, 226, 226);
}
p#messageText{
  margin : 20px;
}

</style>
<div id = "messageLine" class= 'messageLineLift'>
<div>
<photo-icon/>
</div>
<div id="talkBubble"  class="talkBubbleLeft">
<p id="messageText"></p>
</div>

</div>
`
 class PhotoIcon extends HTMLElement {

  
  constructor () { 
    super()
    this.attachShadow({ mode: 'open' })
    .appendChild(template.content.cloneNode(true))
    
   
   
     
  }

  connectedCallback() { 

    console.log('^^^^^^^^^^^^')

 
   this.shadowRoot.querySelector('p').textContent =  this.getAttribute('message') 
 
   this.shadowRoot.querySelector('photo-icon').setAttribute('srcImg',this.getAttribute('userImg'))
   this.shadowRoot.querySelector('photo-icon').setAttribute('name',this.getAttribute('userName'))
   this.shadowRoot.querySelector('#talkBubble').style.color= this.getAttribute('userColor')
   if (this.hasAttribute('flex'))
   { console.log('flex')
   this.shadowRoot.querySelector('#talkBubble').removeAttribute('class')
   this.shadowRoot.querySelector('#talkBubble').setAttribute('class','talkBubbleRight')
   this.shadowRoot.querySelector('#messageLine').removeAttribute('class')
   this.shadowRoot.querySelector('#messageLine').setAttribute('class','messageLineRight')
  }
   

  }

  static get observedAttributes() { 
    return ['message','user'];
  }

  attributeChangedCallback(message,user) { 
   
  }

}
 customElements.define("message-line", PhotoIcon);