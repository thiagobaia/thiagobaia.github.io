class MyFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `

          `;
    }
  }
  
  customElements.define("my-footer", MyFooter);
  