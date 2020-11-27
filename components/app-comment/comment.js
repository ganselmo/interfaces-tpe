import { Component } from "../../../framework/components/component.js";


export class CommentComponent extends Component {

    comments = [];

    constructor() {
        super(import.meta.url);
    }

    init() {
        let btns = this.shadowRoot.querySelectorAll(".score");
        for (let i = 0; i < btns.length; i++) {
            const btn = btns[i];
            btn.addEventListener("click", score);
            btn.setAttribute("target", i);
        }

        function score() {
            for (let i = 0; i < btns.length; i++) {
                const element = btns[i];
                if(element.classList.contains("scored")) {
                    element.classList.remove("scored");
                }
                if(i <= this.attributes.target.value) {
                    element.classList.add("scored");
                }
            }
        }
    }

    changes() {
        
    }

}