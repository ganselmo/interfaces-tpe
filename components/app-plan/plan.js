import { Component } from "../../../framework/components/component.js";


export class PlanComponent extends Component {


    constructor() {
        super(import.meta.url)
    }

    init() {
        let title = this.shadowRoot.querySelector("#pricing-title");
        title.innerHTML = this.attributes.title.value;

        let annual = this.shadowRoot.querySelector("#pricing-annual");
        annual.innerHTML = this.attributes.annual.value;

        let monthly = this.shadowRoot.querySelector("#pricing-monthly");
        monthly.innerHTML = this.attributes.monthly.value;

        let user = this.shadowRoot.querySelector("#pricing-user");
        user.innerHTML = this.attributes.user.value;
    }

    changes() {
      
    }





}