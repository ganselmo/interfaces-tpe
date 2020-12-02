import { Component } from "../../framework/components/component.js";


export class ContentWrapperComponent extends Component {
    text_info = document.querySelector('#player').shadowRoot.querySelector(".text_info")
    playerParent = document.querySelector("#player");
    constructor() {
        super(import.meta.url)
    }
    sendData
    init() {

        let canciones = JSON.parse(this.attributes.canciones.value)

        let divTitle = this.shadowRoot.querySelector('.title')
        divTitle.innerHTML = canciones.title

        let divSub = this.shadowRoot.querySelector('.sub')
        divSub.innerHTML = canciones.subtitle

        let divElement = this.shadowRoot.querySelector('.content')
        let elementor = this



        let imgsrc;

        canciones.data.forEach(element => {
     
            const elementer= element
            imgsrc ="assets/contents/images/" + element.img + ".png"
            element.img = imgsrc
            element.Name = element.name
            let sendData = new CustomEvent("changeSong",
                {
                    detail: elementer
                });
              
            let newDiv = document.createElement('div')
            let nameDiv = document.createElement('div')
            let playDiv = document.createElement('div')
            playDiv.classList.add('playButton')
            playDiv.addEventListener('click', function () {

                elementor.playerParent.dispatchEvent(new CustomEvent('openPlay'))
                elementor.text_info.dispatchEvent(sendData)
            })
            nameDiv.classList.add('name')
            nameDiv.innerHTML = element.name
            let img = document.createElement('img')
            img.setAttribute('src', imgsrc)
            let play = document.createElement('img')
            play.setAttribute('src', "./assets/buttons/button_play_nobg.svg")
            playDiv.appendChild(play)
            newDiv.classList.add('cuadrad')
            newDiv.appendChild(playDiv)
            newDiv.appendChild(img)
            newDiv.appendChild(nameDiv)
            divElement.appendChild(newDiv)
            newDiv.addEventListener('click', function () {
                elementor.playerParent.dispatchEvent(new CustomEvent('openPlay'))
                elementor.text_info.dispatchEvent(sendData)
            })
        });

    }
    changes() {

    }

}