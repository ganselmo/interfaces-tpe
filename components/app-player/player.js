import { Component } from "../../framework/components/component.js";


export class PlayerComponent extends Component {


    constructor() {
        super(import.meta.url)
    }

    parent =  document.querySelector('#comand_player')
    closeEvent = new CustomEvent("closeComand");
    openEvent = new CustomEvent("openComand");

    init() {
        //#region captura de buttons
        let element = this;
        let btnLike = this.shadowRoot.querySelector("#btn_like");
        let btnLiked = this.shadowRoot.querySelector("#btn_liked");
        /* let btnScore = this.shadowRoot.querySelector("#btn_score");
        let btnScored = this.shadowRoot.querySelector("#btn_scored"); */
        let btnPlay = this.shadowRoot.querySelector("#btn_play");
        let btnPause = this.shadowRoot.querySelector("#btn_pause");
        let btnOption = this.shadowRoot.querySelector("#btn_options");
        //#endregion
        //#region accionamiento Botones consola 
        btnLike.addEventListener('click', function(){
            this.classList.toggle("button_oculto");
            btnLiked.classList.toggle("button_oculto");
        });
        btnLiked.addEventListener('click', function(){
            this.classList.toggle("button_oculto");
            btnLike.classList.toggle("button_oculto");
        });
       /*  btnScore.addEventListener('click', function(){
            this.classList.toggle("button_oculto");
            btnScored.classList.toggle("button_oculto");
        });
        btnScored.addEventListener('click', function(){
            this.classList.toggle("button_oculto");
            btnScore.classList.toggle("button_oculto");
        }); */


        btnPlay.addEventListener('click',function (){
            this.classList.toggle("button_oculto");
            btnPause.classList.toggle("button_oculto");
        });
        btnPause.addEventListener('click',function (){
            this.classList.toggle("button_oculto");
            btnPlay.classList.toggle("button_oculto");
        });

        btnOption.addEventListener('click',function(){
            element.parent.dispatchEvent(element.openEvent);
        });
        //#endregion 
    }
    changes() {

    }




}