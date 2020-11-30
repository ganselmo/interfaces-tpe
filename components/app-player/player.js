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
        let paused = true;
        let btnLike = this.shadowRoot.querySelector("#btn_like");
        let btnLiked = this.shadowRoot.querySelector("#btn_liked");
        let btnScore = this.shadowRoot.querySelector("#btn_score_desk");
        let btnScored = this.shadowRoot.querySelector("#btn_scored_desk"); 
        let btnPlay = this.shadowRoot.querySelector("#btn_play");
        let btnPause = this.shadowRoot.querySelector("#btn_pause");
        let btnOption = this.shadowRoot.querySelector("#btn_options");
        let spiner = this.shadowRoot.querySelector("#spiner");
        spiner.classList.toggle("button_oculto");
        let elem = this.shadowRoot.querySelector("#myBar"); 
        let width = 1;
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
        btnScore.addEventListener('click', function(){
            this.classList.toggle("button_oculto");
            btnScored.classList.toggle("button_oculto");
        });
        btnScored.addEventListener('click', function(){
            this.classList.toggle("button_oculto");
            btnScore.classList.toggle("button_oculto");
        }); 


        btnPlay.addEventListener('click',function() {
            spiner.classList.toggle("button_oculto");
            setTimeout(function(){
                spiner.classList.toggle("button_oculto");
                btnPlay.classList.toggle("button_oculto");
                btnPause.classList.toggle("button_oculto");
                move();
                paused = false;
            }, 2000);
        });

        btnPause.addEventListener('click',function (){
            this.classList.toggle("button_oculto");
            btnPlay.classList.toggle("button_oculto");
            paused = true;
        });

        btnOption.addEventListener('click',function(){
            element.parent.dispatchEvent(element.openEvent);
        });
        //#endregion 


        function move() {
            let id = setInterval(frame, 500);
            function frame() {
              if (width >= 100){
                clearInterval(id);
                width = 1;
                elem.style.width = width + '%'; 
              } else {
                  if (!paused)
                    width++; 
                    elem.style.width = width + '%'; 
              }
            }
        }
    }
    changes() {

    }


    


}