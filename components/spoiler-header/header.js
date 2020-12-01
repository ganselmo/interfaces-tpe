import { Component } from "../../framework/components/component.js";
import { closeProfileContext } from "../../js/context-menu.handler.js";
import { navigateRouter } from "../../js/router.handler.js";

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
     filters = document.querySelector('#filters-panel');

    closeFilters = new CustomEvent("closeFilters");
    openFilters_ = new CustomEvent("openFilters");


    init() {
        let profile = this.shadowRoot.querySelector('#profile')
        let elementer = this
        profile.addEventListener('click',
            function () {
                elementer.buscador.dispatchEvent(elementer.closeBuscadorEvent);
                elementer.filters.dispatchEvent(elementer.closeFilters);
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
        let lupaOpened = this.shadowRoot.querySelector(".lupa.linked")
        lupaOpened.addEventListener('click', function () {
            elementer.openFilters()
    
        })

        let library = this.shadowRoot.querySelectorAll(".library")

        library.forEach(element => {
            element.addEventListener('click',function()
            {
                elementer.buscador.dispatchEvent(elementer.closeBuscadorEvent);
                elementer.filters.dispatchEvent(elementer.closeFilters);
                navigateRouter('library-page')
            })
        });

        let navigate = this.shadowRoot.querySelectorAll(".navigate")

        navigate.forEach(element => {
            element.addEventListener('click',function()
            {
                elementer.buscador.dispatchEvent(elementer.closeBuscadorEvent);
                elementer.filters.dispatchEvent(elementer.closeFilters);
                navigateRouter('landing-page')
            })
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
        if (this.getBuscadorStatus() === 'none') {
            this.buscador.dispatchEvent(this.openBuscadorEvent);
            this.filters.dispatchEvent(this.openFilters_);
        }
        else {
            this.buscador.dispatchEvent(this.closeBuscadorEvent);
            this.filters.dispatchEvent(this.closeFilters);
        }
    }
    openFilters() {
            this.filters.dispatchEvent(this.openFilters_);
            navigateRouter('search-page')   
     
    }


}