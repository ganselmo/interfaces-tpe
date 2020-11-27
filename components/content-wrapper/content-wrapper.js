import { Component } from "../../framework/components/component.js";


export class ContentWrapperComponent extends Component {

    constructor() {
        super(import.meta.url)
    }

    init() {

        let canciones = JSON.parse(this.attributes.canciones.value)
        console.log(canciones)
        let divTitle = this.shadowRoot.querySelector('.title')
        divTitle.innerHTML = canciones.title

        let divSub = this.shadowRoot.querySelector('.sub')
        divSub.innerHTML = canciones.subtitle

        let divElement = this.shadowRoot.querySelector('.content')
        let elementor = this
        canciones.data.forEach(element => {
           
            let newDiv = document.createElement('div')
            let nameDiv = document.createElement('div')
            nameDiv.innerHTML = element.name
            let img = document.createElement('img')
            img.setAttribute('src',"assets/contents/images/"+element.img+".png")
            newDiv.classList.add('cuadrad')
            newDiv.appendChild(img)
            newDiv.appendChild(nameDiv)
            divElement.appendChild(newDiv)
        });

    }
    changes() {

    }

}