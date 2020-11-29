import { Component } from "../../framework/components/component.js";
import { ayuda } from "../../mocks/ayuda.js";

export class HelpPage extends Component {

    ayuda = ayuda()
    constructor() {
        super(import.meta.url)
    }


    init() {
        const article = this.shadowRoot.querySelector('article')
        this.ayuda.forEach(
            element => {
                let contentWrapper = document.createElement('app-accord')
                contentWrapper.setAttribute('title', element.title)
                contentWrapper.setAttribute('desc', element.description)
                article.appendChild(contentWrapper)
            }
        )

    }
    changes() {

    }

}
