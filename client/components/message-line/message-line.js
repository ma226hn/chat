
const template = document.createElement('template')
template.innerHTML =
`

<style>

p#h {
    color: red;
    font-size: larger;
    

}
#messageLine {
  display: flex;
  flex-direction: row;

}

</style>
<div id= 'messageLine'>
<div>
<photo-icon/>
</div>
<div>
<p id="h"></p>
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

    
  console.log(this.getAttribute('message'),'mmmm')
 
   this.shadowRoot.querySelector('p').textContent =  this.getAttribute('message') 
   console.log(this.shadowRoot.querySelector('p').textContent,'ääääääääääääääääääää')
   this.shadowRoot.querySelector('photo-icon').setAttribute('srcImg',this.getAttribute('userImg'))
   this.shadowRoot.querySelector('photo-icon').setAttribute('name',this.getAttribute('userName'))
   this.shadowRoot.querySelector('#messageLine').style.backgroundColor= this.getAttribute('userColor')
  

  }

  static get observedAttributes() { 
    return ['message','user'];
  }

  attributeChangedCallback(message,user) { 
   
  }

}
 customElements.define("message-line", PhotoIcon);