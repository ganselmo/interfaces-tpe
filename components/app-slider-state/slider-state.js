import { Component } from "../../../framework/components/component.js";


export class SliderStateComponent extends Component {


    constructor() {
        super(import.meta.url)
    }

    init() {
         

    }
    changes() {

    }
    
}

function move() {
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