

import {template} from './htmlTemplate.js'
 class PhotoIcon extends HTMLElement {

  constructor () { 
    super()
    this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true)) 
  }

  connectedCallback() { 
    this.shadowRoot.querySelector('p').textContent =  this.getAttribute('name') 
    if (this.getAttribute('srcImg') !== ''){
      this.shadowRoot.querySelector('div').style.backgroundImage = `url(${this.getAttribute('srcImg')}) `
    }
  }

  static get observedAttributes() { 
    return ['pColor','srcImg','name'];
  }
}
customElements.define("photo-icon", PhotoIcon);