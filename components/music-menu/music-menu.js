import { Component } from "../../framework/components/component.js";
import { navigateRouter } from "../../js/router.handler.js";

export class MusicMenuComponent extends Component {

    constructor() {
        super(import.meta.url)
    }

    closeContextEvent = new CustomEvent("closeContext");
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

       
        navigateRouter(location)

    }
}