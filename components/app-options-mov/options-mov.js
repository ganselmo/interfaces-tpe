import { Component } from "../../framework/components/component.js";


export class OptionsComponent extends Component {


  constructor() {
    super(import.meta.url)
  }
  parent =  document.querySelector('#equalizer');
  closeEvent = new CustomEvent("closeEq");
  openEvent = new CustomEvent("openEq");
  
  modeparent= document.querySelector('#mode');
  closeMode= new CustomEvent("closeMode");
  openMode= new CustomEvent("openMode");
 
  scoreparent= document.querySelector('#myPopup');
  closeScore= new CustomEvent("closeScore");
  openScore= new CustomEvent("openScore");


  init() {
    let element = this
    //#region obtencion de Buttons
    let btnEq = this.shadowRoot.querySelector("#btn_eq");
    let btnEqSel = this.shadowRoot.querySelector("#btn_eqsel");
    let btnMod = this.shadowRoot.querySelector("#btn_mod");
    let btnModSel = this.shadowRoot.querySelector("#btn_modsel");
    let btnRandom = this.shadowRoot.querySelector("#btn_random");
    let btnRandomSel = this.shadowRoot.querySelector("#btn_randomsel");
    let btnRepeat = this.shadowRoot.querySelector("#btn_repeat");
    let btnRepeatSel = this.shadowRoot.querySelector("#btn_repeatsel");
    let btnScore = this.shadowRoot.querySelector("#btn_score");
    let btnScored = this.shadowRoot.querySelector("#btn_scored");
  //#endregion
  //#region cambios de estado
 
    btnEq.addEventListener('click',function (){
      this.classList.toggle("oculto");
      btnEqSel.classList.toggle("oculto");
      element.parent.dispatchEvent(element.openEvent);

    });
    btnEqSel.addEventListener('click',function (){
      this.classList.toggle("oculto");
      btnEq.classList.toggle("oculto");
      element.parent.dispatchEvent(element.closeEvent);
    });

    btnMod.addEventListener('click',function (){
      this.classList.toggle("oculto");
      btnModSel.classList.toggle("oculto");
      element.modeparent.dispatchEvent(element.openMode);
    });

    btnModSel.addEventListener('click',function (){
      this.classList.toggle("oculto");
      btnMod.classList.toggle("oculto");
      element.modeparent.dispatchEvent(element.closeMode);
    });

    btnRandom.addEventListener('click',function (){
      this.classList.toggle("oculto");
      btnRandomSel.classList.toggle("oculto");

    });

    btnRandomSel.addEventListener('click',function (){
      this.classList.toggle("oculto");
      btnRandom.classList.toggle("oculto");

    });

    
    btnRepeat.addEventListener('click',function (){
      this.classList.toggle("oculto");
      btnRepeatSel.classList.toggle("oculto");

    });
    btnRepeatSel.addEventListener('click',function (){
      this.classList.toggle("oculto");
      btnRepeat.classList.toggle("oculto");

    });
    // respectivo a score POP-UP
    btnScore.addEventListener('click', function(){
      this.classList.toggle("oculto");
      btnScored.classList.toggle("oculto");
      element.scoreparent.dispatchEvent(element.openScore);
      console.log(element.scoreparent);
     });
    btnScored.addEventListener('click', function(){
      this.classList.toggle("oculto");
      btnScore.classList.toggle("oculto");
      element.scoreparent.dispatchEvent(element.closeScore);

    });

  //#endregion


  }
  changes() {

  }

}