import { Component } from "../../framework/components/component.js";
import { contenidos } from "../../mocks/contenidos.js";



export class LandingPage extends Component {


    contenido = contenidos()
    constructor() {
        super(import.meta.url)
    }

    init() {
        const section = this.shadowRoot.querySelector('section')
        this.contenido.forEach(
            element => {
                console.log(element)
                element.data.forEach(data => {
                    console.log(data)
                }
                )
            }
        )
    }
    changes() {

    }





}