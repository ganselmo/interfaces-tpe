import { Component } from "../../../framework/components/component.js";


export class FilterComponent extends Component {


    
    closeFiltersEvent = new CustomEvent("closeFilters");
    filters = document.querySelector('#filters-panel')
    
    constructor() {
        super(import.meta.url)
    }

    init() {
      
        this.shadowRoot.querySelector('button').innerHTML =this.attributes.name.value

        if(this.attributes.isClicked.value=='true')
        {
            this.shadowRoot.querySelector('button').classList.remove('secondary') 
            this.shadowRoot.querySelector('button').classList.add('tertiary') 
        }
        else{
            this.shadowRoot.querySelector('button').classList.remove('tertiary') 
            this.shadowRoot.querySelector('button').classList.add('secondary') 
        }
    }

    changes() {
        if(this.attributes.isClicked.value=='true')
        {
            this.shadowRoot.querySelector('button').classList.remove('secondary') 
            this.shadowRoot.querySelector('button').classList.add('tertiary') 
        }
        else{
            this.shadowRoot.querySelector('button').classList.remove('tertiary') 
            this.shadowRoot.querySelector('button').classList.add('secondary') 
        }
    }





}