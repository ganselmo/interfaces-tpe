import { Component } from "../../../framework/components/component.js";


export class SliderComponent extends Component {


  constructor() {
    super(import.meta.url)
  }

  init() {

    var elInput = document.querySelector('#input');
    if (elInput) {
      var etiqueta = document.querySelector('#etiqueta');
      if (etiqueta) {
        etiqueta.innerHTML = elInput.value;
        elInput.addEventListener('input', function () {
          etiqueta.innerHTML = elInput.value;
        }, false);
      }
    }

  }
  changes() {

  }





}