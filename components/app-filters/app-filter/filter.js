import { Component } from "../../../framework/components/component.js";


export class FilterComponent extends Component {


    constructor() {
        super(import.meta.url)
    }

    init() {
        console.log(this.attributes.name.value)
        this.shadowRoot.querySelector('button').innerHTML =this.attributes.name.value
    }

    changes() {
      
    }





}