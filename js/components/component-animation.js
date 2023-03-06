class animationComponent extends HTMLElement{
    constructor(){
        super();
        this.skin;
    }

    static get observedAttributes(){
        return ['skin'];
    }

    attributeChangedCallback(nameAtr, oldValue, newValue){
        switch (nameAtr){
            case "skin":
                this.skin = newValue;
            break;
            

        }
    }

    //${this.nbatch}
    connectedCallback(){
        this.innerHTML = `
        <select name="animation" id="animation" data-user-animations>
            <option selected value="${this.skin}">atacc</option>
            <option value="${this.skin}-relax">chill</option>

        </select>`
    }
}
window.customElements.define("animation-component", animationComponent);
