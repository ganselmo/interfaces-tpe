import { Component } from "../../../framework/components/component.js";


export class FilterComponent extends Component {


    
    closeFiltersEvent = new CustomEvent("closeFilters");
    filters = document.querySelector('#filters-panel')
    
    constructor() {
        super(import.meta.url)
    }

    init() {
        console.log(this.attributes.name.value)
        this.shadowRoot.querySelector('button').innerHTML =this.attributes.name.value
        let element = this
        element.shadowRoot.querySelector('button').addEventListener('click',function()
        {

            element.filters.dispatchEvent(element.closeFiltersEvent);
        
        })
    }

    changes() {
      
    }





}