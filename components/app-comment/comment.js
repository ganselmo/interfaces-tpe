import { Component } from "../../../framework/components/component.js";


export class CommentComponent extends Component {

    constructor() {
        super(import.meta.url);
    }

    init() {
        //#region reply
        let comments = this.shadowRoot.querySelectorAll("app-comment");

        let commentFooterOptions = this.shadowRoot.querySelector(".comment-footer-options");

        for (let i = 0; i < commentFooterOptions.children.length; i++) {
            const elem = commentFooterOptions.children[i];
            if (elem.firstChild != null) {
                if (elem.classList.contains("comment-expand")) {
                    elem.addEventListener("click", appendSeeOption);
                }
                if (elem.classList.contains("comment-reply")) {
                    elem.addEventListener("click", appendInput);
                }
            }
        }
        
        function appendSeeOption() {
            
            let self = this.parentElement.parentElement.parentElement;
            let replyPanel = self.nextElementSibling;
            replyPanel.childNodes.forEach(element => {
                let e = element.shadowRoot.firstElementChild;
                console.log(e);
                if (e.style.maxHeight) {
                    e.style.maxHeight = 0;
                    setTimeout(function () {
                        e.style.display = "none";
                        e.style.maxHeight = null;
                    }, 2000)
                } else {
                    e.style.display = "flex";
                    e.style.maxHeight = e.scrollHeight + "vh";
                }
            });
        }


        function appendInput() {
            this.classList.add("oculto");
            let insertComment = document.createElement("app-comment-insert");
            if (window.innerWidth < 600) {
                insertComment.style.transform = "scale(0.8)";
            }
            this.parentElement.parentElement.parentElement.appendChild(insertComment);
        }
        //#endregion

        //#region Append random replies
        let rdm = Math.trunc((Math.random() * 10 + 1));

        let replyContainer = this.shadowRoot.querySelector(".comment-reply-container");
        let reply;
        for (let i = 0; i < rdm; i++) {
            reply = document.createElement("app-comment-reply");
            replyContainer.appendChild(reply);
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