import { Component } from "../../framework/components/component.js";

import { contenidos } from "../../mocks/contenidos.js";



export class LandingPage extends Component {


    contenido = contenidos()
    constructor() {
        super(import.meta.url)
    }

    init() {
        let elementer = this.shadowRoot
        const section = this.shadowRoot.querySelector('section')
        this.contenido.forEach(
            element => {
                let contentWrapper = document.createElement('content-wrapper')
                contentWrapper.setAttribute('canciones', JSON.stringify(element))
                elementer.appendChild(contentWrapper)
            }
        )

    }
    
    changes() {

    }

}