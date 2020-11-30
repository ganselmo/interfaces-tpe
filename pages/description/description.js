import { Component } from "../../framework/components/component.js";

import { comentarios } from "../../mocks/comentarios.js";



export class DescriptionPage extends Component {


    comentarios = comentarios()
    constructor() {
        super(import.meta.url)
    }
    init() {

        const section = this.shadowRoot.querySelector('section')
        this.contenido.forEach(
            element => {
                let contentWrapper = document.createElement('content-wrapper')
                contentWrapper.setAttribute('canciones', JSON.stringify(element))
                section.appendChild(contentWrapper)
            }
        )

    }
    
    changes() {

    }

}