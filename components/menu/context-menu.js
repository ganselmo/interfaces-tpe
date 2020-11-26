import { Component } from "/framework/components/component.js";

export class MenuComponent extends Component {

    constructor() {
        super(import.meta.url)
    }

    init() {

        let array = JSON.parse(this.attributes.menus.value)

        const elementer = this
        array.forEach((element, index) => {

            let div = document.createElement('div')
            div.innerHTML = element.name.trim()
            div.setAttribute('class', 'words base normal')
            div.addEventListener('click', function () {
                elementer.goTo(element.link)
            })
            let separator = document.createElement('div')
            separator.setAttribute('class', 'line secondary')
            this.shadowRoot.querySelector('.main').appendChild(div)
            if (index != array.length - 1) {
                this.shadowRoot.querySelector('.main').appendChild(separator)
            }

        });

    }
    changes() {

    }
    goTo(location) {
        console.log(location)
    }
}