import { Component } from "../../framework/components/component.js";
import { CancionesService } from "../../services/moks.service.js";
import { TestChild } from "./custom-test-child/test-child.js";


export class CustomTest extends Component {

    gero = 'El pepe';
    canciones;
    cancionesService;
    constructor() {
        super(import.meta.url)
        window.customElements.define('test-child', TestChild);

        this.cancionesService = new CancionesService()
    
    }

    init() {


        this.canciones = this.cancionesService.getCanciones()
     
      
        let ul= this.shadowRoot.querySelector('ul')


        this.canciones.then(

        )
        this.shadowRoot.querySelector('#button1').addEventListener('click', function () {
           
            let value = 1;


            children.forEach(element => {
                element.setAttribute('value', value)
            });
        })

        this.shadowRoot.querySelector('#button2').addEventListener('click', function () {

            let value = 4;


            children.forEach(element => {
                element.setAttribute('value', value)
            });
        })
        this.addEventListener('madeBlue', function (e) {
    
            this.shadowRoot.querySelector('.other').innerHTML  = e.detail.number
        },false)


        this.shadowRoot.querySelector('.other').innerHTML = this.gero
    }
    changes()
    {
   
        
    }

}