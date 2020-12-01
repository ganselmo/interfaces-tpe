import { Component } from "../../../framework/components/component.js";


export class SongComponent extends Component {

    constructor() {
        super(import.meta.url);
    }

    init() {
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