import { Component } from "../../../framework/components/component.js";


export class CommentInsertComponent extends Component {

    constructor() {
        super(import.meta.url);
    }

    init() {
        //#region Seccion Calificacion
        let header = this.shadowRoot.querySelector(".comment-header");
        header.classList.add("oculto");
        //#endregion

        //#region Seccion Escribir Comentario de Cancion
        if (this.classList.contains("destacado")) {
            let container = this.shadowRoot.firstChild;
            container.classList.add("destacado");
            container.firstElementChild.classList.remove("oculto");
            let score = container.firstElementChild.firstElementChild.firstElementChild;
            let children = score.children;
            score.classList.add("bigger");
            for (const star of children) {
                star.classList.add("gira");
            }
            let autor = container.firstElementChild.lastElementChild;
            autor.classList.add("oculto");
            autor.previousElementSibling.classList.add("oculto");
        }
        //#endregion

        let summit = this.shadowRoot.querySelector(".comment-summit");
        summit.addEventListener("click", ocultar);
        
        function ocultar() {
            let container = this.parentElement.parentElement;
            container.classList.add("oculto");
        }
        //#region Score Stars
        let scoreStars = this.shadowRoot.querySelectorAll(".score");

        for (let i = 0; i < scoreStars.length; i++) {
            const scoreStar = scoreStars[i];
            scoreStar.addEventListener("click", score);
            scoreStar.setAttribute("target", i);
        }

        function score() {
            for (let i = 0; i < scoreStars.length; i++) {
                const elem = scoreStars[i];
                if (elem.classList.contains("scored")) {
                    elem.classList.remove("scored");
                }
                if (i <= this.attributes.target.value) {
                    elem.classList.add("scored");
                }
                elem.classList.remove("gira");
            }
        }
        //#endregion

        //#region See more/less icons
        let seeIcons = this.shadowRoot.querySelectorAll(".comment-expand img");

        for (let i = 0; i < seeIcons.length; i++) {
            const seeIcon = seeIcons[i];
            seeIcon.addEventListener("click", mostrar);
            seeIcon.setAttribute("target", i);
        }

        function mostrar() {
            for (let i = 0; i < seeIcons.length; i++) {
                const e = seeIcons[i];
                if (e.classList.contains("oculto")) {
                    e.classList.remove("oculto");
                } else {
                    e.classList.add("oculto");
                }
            }
        }
        //#endregion
    }

    changes() {

    }

}