
import { Component } from "../../framework/components/component.js";


export class BuscadorComponent extends Component {


    closeBuscadorEvent = new CustomEvent("closeBuscador");
    buscador = document.querySelector('#lupaBuscador')
    constructor() {
        super(import.meta.url)
    }

    init() {
        let element = this
        element.shadowRoot.querySelector('.lupa').addEventListener('click',function()
        {
            let input = element.shadowRoot.querySelector('input')
            element.find(input.value)
            input.value = ''
            element.buscador.dispatchEvent(element.closeBuscadorEvent);
        
        })
    }
    changes() {

    }
    find(location) {
        console.log(location)
    }
}