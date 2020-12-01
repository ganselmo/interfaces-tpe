import { Component } from "../../../framework/components/component.js";


export class CommentComponent extends Component {

    constructor() {
        super(import.meta.url);
    }

    init() {
        //#region Score Stars
        let scoreStars = this.shadowRoot.querySelectorAll(".score");

        for (let i = 0; i < scoreStars.length; i++) {
            const scoreStar = scoreStars[i];
            scoreStar.addEventListener("click", score);
            scoreStar.setAttribute("target", i);
        }

        function score() {
            for (let i = 0; i < scoreStars.length; i++) {
                const e = scoreStars[i];
                if (e.classList.contains("scored")) {
                    e.classList.remove("scored");
                }
                if (i <= this.attributes.target.value) {
                    e.classList.add("scored");
                }
            }
        }

        let comments = document.querySelectorAll("app-comment");
        let lastReply;
        let commentFooterOptions;
        
        for (let i = 0; i < comments.length; i++) {
            if (comments[i].shadowRoot.lastChild != null) {
                lastReply = comments[i].shadowRoot.lastChild;
            }
        }
        
        commentFooterOptions = lastReply.previousElementSibling.lastElementChild.firstElementChild;

        commentFooterOptions.childNodes.forEach(e => {
            if(e.firstChild != null) {
                if(e.classList.contains("comment-expand")) {
                    e.addEventListener("click", appendSeeOption);
                }
                if(e.classList.contains("comment-reply")) {
                    e.addEventListener("click", appendInput);
                }
            }
        });

        function appendSeeOption() {

            let self = this.parentElement.parentElement.parentElement;
            let replyPanel = self.nextElementSibling;
            replyPanel.childNodes.forEach(element => {
                let e = element.shadowRoot.firstElementChild;
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
            console.log(window);
            this.classList.add("oculto");
            let insertComment = document.createElement("app-comment-insert");
            if(window.innerWidth < 600) {
                insertComment.style.transform = "scale(0.8)";
            }
            this.parentElement.parentElement.parentElement.appendChild(insertComment);
            console.log(insertComment);
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

        //#region Append random replies
        let rdm = Math.trunc((Math.random() * 10 + 1));

        let replyContainer = this.shadowRoot.querySelector(".comment-reply-container");
        let reply;
        for (let i = 0; i < rdm; i++) {
            reply = document.createElement("app-comment-reply");
            replyContainer.appendChild(reply);
        }
        //#endregion

    }

    changes() {

    }

}