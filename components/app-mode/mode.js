import { Component } from "../../../framework/components/component.js";


export class ModeComponent extends Component {


    constructor() {
        super(import.meta.url)
    }

    parent =  document.querySelector('#equalizer');
    closeEvent = new CustomEvent("closeEq");
    openEvent = new CustomEvent("openEq");


    init() {
        let element = this
        let selected = false;
        //#region captura de buttons
        let btnRun= this.shadowRoot.querySelector("#btn_run");
        let btnRunSel= this.shadowRoot.querySelector("#btn_run_sel");
        let btnWork= this.shadowRoot.querySelector("#btn_work");
        let btnWorkSel= this.shadowRoot.querySelector("#btn_work_sel");
        let btnTrial= this.shadowRoot.querySelector("#btn_trial");
        let btnTrialSel= this.shadowRoot.querySelector("#btn_trial_sel");
        //#endregion

        //#region funcionalidad change
        btnRun.addEventListener('click',function(){
            if(!selected){
            this.classList.toggle("oculto");
            btnRunSel.classList.toggle("oculto");
            selected = true;
            }
        });
        btnRunSel.addEventListener('click',function(){
            this.classList.toggle("oculto");
            btnRun.classList.toggle("oculto");
            selected = false;

        });

        btnWork.addEventListener('click',function(){
            if(!selected){
            this.classList.toggle("oculto");
            btnWorkSel.classList.toggle("oculto");
            selected = true;
            }
        });
        btnWorkSel.addEventListener('click',function(){
            this.classList.toggle("oculto");
            btnWork.classList.toggle("oculto");
            selected = false;

        });

        btnTrial.addEventListener('click',function(){
            if(!selected){
            this.classList.toggle("oculto");
            btnTrialSel.classList.toggle("oculto");
            selected = true;
        }

        });
        btnTrialSel.addEventListener('click',function(){
            this.classList.toggle("oculto");
            btnTrial.classList.toggle("oculto");
            selected = false;
        });
        //#endregion

        //#region evento temporal
        btnWorkSel.addEventListener('mousedown', modificar);
        btnRunSel.addEventListener('mousedown', modificar);
        btnTrialSel.addEventListener('mousedown', modificar);

        //#endregion 



        function modificar() {
            setTimeout(function(){ 
            element.parent.dispatchEvent(element.openEvent);
            }, 1000);
        }
        
    }
    changes() {

    }

    



}