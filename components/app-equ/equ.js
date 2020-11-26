import { Component } from "/interfaces-tpe/framework/components/component.js";


export class EquComponent extends Component {


    constructor() {
        super(import.meta.url)
    }

    init() {
    let button = this.shadowRoot.querySelector('button');
    let attributes = this.attributes
    button.addEventListener('click',function()
    {
        console.log(attributes)
        alert(attributes.value.value)
    })

    }
    changes() {
      
    }





}