import { Component } from "../../framework/components/component.js";
import { closeProfileContext } from "../../js/context-menu.handler.js";

export class HeaderComponent extends Component {

    constructor() {
        super(import.meta.url)
    }
    contextMenu = document.querySelector('#profile-menu')
    closeContextEvent = new CustomEvent("closeContext");
    openContextEvent = new CustomEvent("openContext");
    buscador = document.querySelector('#lupaBuscador')
    closeBuscadorEvent = new CustomEvent("closeBuscador");
    openBuscadorEvent = new CustomEvent("openBuscador");
    
    init() {
        let profile = this.shadowRoot.querySelector('#profile')
        console.log(profile)
        let elementer = this
        profile.addEventListener('click',
            function () {
                elementer.toggleMenu();
            })
        let base = this.shadowRoot.querySelectorAll('nav >div:not(#profile)')
        base.forEach(element => {
            element.addEventListener('click', closeProfileContext)
        });

        let lupa = this.shadowRoot.querySelector(".lupa.notlinked")
        lupa.addEventListener('click', function () {
            elementer.openLupa()
        })

    }
    changes() {


    }
    toggleMenu() {
        if (this.getContextStatus() === 'hidden') {
            this.contextMenu.dispatchEvent(this.openContextEvent);
        }
        else {
            this.contextMenu.dispatchEvent(this.closeContextEvent);
        }

    }
    getContextStatus() {
        return this.contextMenu.style.visibility
    }

    getBuscadorStatus() {
        return this.buscador.style.display
    }
    openLupa() {
        console.log(this.getBuscadorStatus())
        if (this.getBuscadorStatus() === 'none') {
            this.buscador.dispatchEvent(this.openBuscadorEvent);
        }
        else {
            this.buscador.dispatchEvent(this.closeBuscadorEvent);
        }
    }


}