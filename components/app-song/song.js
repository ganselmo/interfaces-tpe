import { Component } from "../../../framework/components/component.js";


export class SongComponent extends Component {

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
        //#endregion

        //#region 3d effect
        let display = this.shadowRoot.querySelector(".song-container");

        display.addEventListener('mousemove', function (e) {

            let xAxis = (window.innerWidth / 2 - e.pageX) / -30;
            let yAxis = (window.innerHeight / 2.5 - e.pageY) / 30;
            display.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
    }

    changes() {

    }

}