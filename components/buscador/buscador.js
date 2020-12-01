
import { Component } from "../../framework/components/component.js";
import { navigateRouter } from "../../js/router.handler.js";


export class BuscadorComponent extends Component {


    closeBuscadorEvent = new CustomEvent("closeBuscador");
    buscador = document.querySelector('#lupaBuscador')
    filters = document.querySelector('#filters-panel')
    closeFilterEvent = new CustomEvent("openFilters");
    constructor() {
        super(import.meta.url)
    }

    init() {
        let element = this
        element.shadowRoot.querySelector('.lupa').addEventListener('click',function()
        {
            element.filters.dispatchEvent(element.closeFilterEvent);
            navigateRouter('search-page')   
        })
    }
    changes() {

    }
    find(location) {
        console.log(location)
    }
}