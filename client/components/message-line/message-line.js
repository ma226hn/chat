
const template = document.createElement('template')
template.innerHTML =
`

<style>


#messageLine {
  display: flex;
  flex-direction: row;
  gap: 60px;

}
#talkBubble {
  width: auto;
  min-width: 100px;
  height: 80px;
  background: rgb(236, 226, 226);
  position: relative;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
}
#talkBubble:before {
  content: "";
  position: absolute;
  right: 100%;
  top: 26px;
  width: 0;
  height: 0;
  border-top: 13px solid transparent;
  border-right: 26px solid rgb(236, 226, 226);
  border-bottom: 13px solid transparent;
}
p#messageText{
  margin : 20px;
}

</style>
<div id= 'messageLine'>
<div>
<photo-icon/>
</div>
<div id="talkBubble">
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

    

 
   this.shadowRoot.querySelector('p').textContent =  this.getAttribute('message') 
 
   this.shadowRoot.querySelector('photo-icon').setAttribute('srcImg',this.getAttribute('userImg'))
   this.shadowRoot.querySelector('photo-icon').setAttribute('name',this.getAttribute('userName'))
   this.shadowRoot.querySelector('#talkBubble').style.color= this.getAttribute('userColor')
  console.log(this.getAttribute('userColor'))

  }

  static get observedAttributes() { 
    return ['message','user'];
  }

  attributeChangedCallback(message,user) { 
   
  }

}
 customElements.define("message-line", PhotoIcon);