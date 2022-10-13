

const template = document.createElement('template')
template.innerHTML =
`

<style>

.name-p {
  margin: 0%;
  
  margin-top :80%;
 
  text-align: center;
width: 50%;
height:15px;
border-radius: 50% 10%;
  background-color: rgb(247, 250, 252);
  border-width: 3px;
 
}
#photo-icon {
  width:70px;
  height:70px;
  
 padding-left:2%;

  border-radius: 50% ;
  border-style: groove;
  border-width: 3px;
  border-color: blue;
    background-repeat:no-repeat;
    background-size: 100% 100%;
}

</style>
<div id= 'photo-icon'>

<p class='name-p'> </p>



</div>
`
 class PhotoIcon extends HTMLElement {

  
  constructor () { 
    super()
    this.attachShadow({ mode: 'open' })
    .appendChild(template.content.cloneNode(true))
    console.log( this.shadowRoot.querySelectorAll('p'))
   
   
     
  }

  connectedCallback() { 
   setInterval(() => {
  
   this.shadowRoot.querySelector('p').style.color =` rgb(${Math.random()* 250},${Math.random()* 250}, ${Math.random()* 250}) `
    
   }, 1000);
   console.log(this.shadowRoot.querySelectorAll('p'))
   this.shadowRoot.querySelector('p').textContent =  this.getAttribute('name') 
   this.shadowRoot.querySelector('div').style.backgroundImage = this.getAttribute('srcImg')
  

  }

  static get observedAttributes() { 
    return ['pColor','srcImg','name'];
  }

  attributeChangedCallback(pColor,srcImg) { 
   
  }

}
 customElements.define("photo-icon", PhotoIcon);