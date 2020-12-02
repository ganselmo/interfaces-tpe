
import { Component } from "../../framework/components/component.js";
import { millisToMinutesAndSeconds } from "../../helpers/parsers.js";
import { addMenus, getMenus, menus } from "../../js/multiple-menu.handler.js";
export class LineSongComponent extends Component {

    song
    scoreDesk
    elementer = this
    closeOthers = new CustomEvent('closeContext')
    playerParent = document.querySelector("#player");
    text_info = document.querySelector('#player').shadowRoot.querySelector(".text_info")
    sendData
    constructor() {
        super(import.meta.url)
    }

    init() {
        let elementref = this.elementer
        this.song = JSON.parse(this.attributes.song.value)
        this.shadowRoot.querySelector(".name").innerHTML = this.song.Name
        this.shadowRoot.querySelector(".artist").innerHTML = this.song.Artist
        this.shadowRoot.querySelector(".album").innerHTML = this.song.Album
        this.shadowRoot.querySelector(".time").innerHTML = millisToMinutesAndSeconds(this.song.Duration)

        let rand = this.getRandImage()
        this.shadowRoot.querySelector(".imageSong.image.normal.squared img").setAttribute('src', rand)
        this.song.img = rand
        this.shadowRoot.querySelector(".imageSong2.image.normal.squared img").setAttribute('src', rand)

        let buttonLike = this.shadowRoot.querySelector(".like");
        let buttonFav = this.shadowRoot.querySelector(".score");
        let buttonNotLiked = this.shadowRoot.querySelector(".notliked");
        let buttonLiked = this.shadowRoot.querySelector(".liked");

        let buttonNotFav = this.shadowRoot.querySelector(".notscored");
        let buttonFaved = this.shadowRoot.querySelector(".scored");

        let options = this.shadowRoot.querySelector(".options");

        buttonLike.addEventListener('click', function () {
            buttonLiked.classList.toggle('ocultar')
            buttonNotLiked.classList.toggle('ocultar')
        })

        buttonFav.addEventListener('click', function () {
            buttonNotFav.classList.toggle('ocultar')
            buttonFaved.classList.toggle('ocultar')


        })

        let menu = this.shadowRoot.querySelector(".music-menu");
        addMenus(menu)
        options.addEventListener('click', function () {
            getMenus().forEach(element => {
                if (element != menu) {
                    element.classList.add('ocultaM')
                }
            });
            menu.classList.toggle('ocultaM')


        })
        this.scoreDesk = this.shadowRoot.querySelector('.scoreDesk')
        let scores = this.shadowRoot.querySelectorAll('.score:not(.only)')
        scores.forEach(element => {
            element.addEventListener('click', calific)

        });

        this.sendData = new CustomEvent("changeSong",
            {
                detail: this.song
            });


        function calific() {
            let myvalue = this.attributes["data-score"].value
            for (let index = myvalue; index >= 1; index--) {
                let scorestosignscores = elementref.scoreDesk.querySelector('[data-score="' + index + '"]')
                let notscored = scorestosignscores.querySelector(".notscored")
                let scored = scorestosignscores.querySelector(".scored")

                notscored.classList.add('ocultar')
                scored.classList.remove('ocultar')

            }
            scores.forEach(element => {
                element.removeEventListener('click', calific)
            });
        }
        let imagePlay2 = this.shadowRoot.querySelector('.imagePlay2')

        imagePlay2.addEventListener('click',
            function () {
                elementref.playerParent.dispatchEvent(new CustomEvent('openPlay'))
                elementref.text_info.dispatchEvent(elementref.sendData)
            })

        let imagePlay = this.shadowRoot.querySelector('.imagePlay')

        imagePlay.addEventListener('click',
            function () {
                console.log(elementref.sendData)
                elementref.playerParent.dispatchEvent(new CustomEvent('openPlay'))
                elementref.text_info.dispatchEvent(elementref.sendData)

            })




    }

    changes() {

    }

    getRandImage() {
        return "./assets/contents/images/" + (Math.round(Math.random() * 4) + 1) + "-" + (Math.round(Math.random() * 8) + 1) + ".png"
    }




}