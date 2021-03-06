import { Component } from "../../framework/components/component.js";


export class CommentReplyComponent extends Component {

    constructor() {
        super(import.meta.url);
    }

    init() {
        //#region Seccion Calificacion
        let footer = this.shadowRoot.querySelector(".comment-footer");
        footer.classList.add("oculto");
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
                if(e.classList.contains("oculto")) {
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