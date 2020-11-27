import { Component } from "../../../framework/components/component.js";


export class SliderStateComponent extends Component {


    constructor() {
        super(import.meta.url)
    }
    parent =  document.querySelector('#setPlayer');
    closeEvent = new CustomEvent("closePlay");
    openEvent = new CustomEvent("openPlay");
    state = 1;

    init() {
      /* let element = this; */

       /*  this.move(); */

    }
    changes() {

    }
    
    move() {
      var elem = document.getElementById("myBar");   
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
        } else {
          width++; 
          elem.style.width = width + '%'; 
        }
      }
  }
}

