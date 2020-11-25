import { Component } from "../../../framework/components/component.js";


export class TestChild extends Component {


    constructor() {
        super(import.meta.url)
    }

    init() {
        this.addEventListener('change', (e) => {
            console.log(e)
        })
        this.addEventListener('click',
            function () {
                this.makeblue(1)
            });

    }
    changes() {
        this.shadowRoot.querySelector('div').innerHTML = this.attributes.value.value
    }

    makeblue(number) {
        {

            // Create a new event
            this.letTheParentKnow('madeBlue',{number})
           

        }
    };



}