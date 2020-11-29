import { Component } from "../../framework/components/component.js";


export class ContentWrapperComponent extends Component {

    constructor() {
        super(import.meta.url)
    }

    init() {

        let canciones = JSON.parse(this.attributes.canciones.value)

        let divTitle = this.shadowRoot.querySelector('.title')
        divTitle.innerHTML = canciones.title

        let divSub = this.shadowRoot.querySelector('.sub')
        divSub.innerHTML = canciones.subtitle

        let divElement = this.shadowRoot.querySelector('.content')
        let elementor = this
        canciones.data.forEach(element => {
           
            let newDiv = document.createElement('div')
            let nameDiv = document.createElement('div')
            let playDiv = document.createElement('div')
            playDiv.classList.add('playButton')
            nameDiv.classList.add('name')
            nameDiv.innerHTML = element.name
            let img = document.createElement('img')
            img.setAttribute('src',"assets/contents/images/"+element.img+".png")
            let play = document.createElement('img')
            play.setAttribute('src',"./assets/buttons/button_play_nobg.svg")
            playDiv.appendChild(play)
            newDiv.classList.add('cuadrad')
            newDiv.appendChild(playDiv)
            newDiv.appendChild(img)
            newDiv.appendChild(nameDiv)
            divElement.appendChild(newDiv)
        });

    }
    changes() {

    }

}