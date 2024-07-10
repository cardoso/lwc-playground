import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
  @track data = { foo: 'foa'}

  connectedCallback() {
    setInterval(() => {
      this.data = { foo: 'foa' }
    }, 1000)
  }

  renderedCallback() {
    
  }
}