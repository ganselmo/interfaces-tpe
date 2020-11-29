import { Component } from "../../framework/components/component.js";

export class AccordComponent extends Component {

    title
    desc
    plus
    minus
    constructor() {
        super(import.meta.url)
    }

    init() {
        let elementer = this
        this.shadowRoot.querySelector('h3').innerHTML = this.attributes.title.value
        this.shadowRoot.querySelector('.desc').innerHTML = this.attributes.desc.value

        this.plus = this.shadowRoot.querySelector('.plus')
        this.minus = this.shadowRoot.querySelector('.minus')

        this.title = this.shadowRoot.querySelector('.title')
        this.desc = this.shadowRoot.querySelector('.desc')
        this.title.addEventListener('click', function () {
            elementer.toggle()
        })
    }
    changes() {

    }
    toggle() {
        this.desc.classList.toggle('opened')
        this.title.classList.toggle('opened')
        this.plus.classList.toggle('opened')
        this.minus.classList.toggle('opened')
    }

}
