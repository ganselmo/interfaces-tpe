
import { Component } from "../../framework/components/component.js";
import { millisToMinutesAndSeconds } from "../../helpers/parsers.js";
import { addMenus, getMenus } from "../../js/multiple-menu.handler.js";
export class LineLibraryComponent extends Component {

    song
    scoreDesk
    elementer = this
    closeOthers = new CustomEvent('closeContext')
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

        this.shadowRoot.querySelector(".imageSong2.image.normal.squared img").setAttribute('src',rand)

        let buttonLike = this.shadowRoot.querySelector(".like");
        let buttonFav = this.shadowRoot.querySelector(".score");
        let buttonNotLiked = this.shadowRoot.querySelector(".notliked");
        let buttonLiked = this.shadowRoot.querySelector(".liked");

  

        let options = this.shadowRoot.querySelector(".options");

        buttonLike.addEventListener('click', function () {
            buttonLiked.classList.toggle('ocultar')
            buttonNotLiked.classList.toggle('ocultar')
        })

        // buttonFav.addEventListener('click', function () {
        //     buttonNotFav.classList.toggle('ocultar')
        //     buttonFaved.classList.toggle('ocultar')


        // })

        let buttonTrash = this.shadowRoot.querySelector(".trash");

        buttonTrash.addEventListener('click', function () {
 
            elementref.shadowRoot.querySelector('.parent').style.display ='none'

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
                console.log(element)
                element.removeEventListener('click',calific)
            });
        }

    }

    changes() {

    }

    getRandImage() {
        return "./assets/contents/images/" + (Math.round(Math.random() * 4) + 1) + "-" + (Math.round(Math.random() * 8) + 1) + ".png"
    }




}