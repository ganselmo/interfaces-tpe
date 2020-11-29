import { Component } from "../../framework/components/component.js";
import { navigateRouter } from "../../js/router.handler.js";


export class ProfilePage extends Component {


    constructor() {
        super(import.meta.url)
    }

    init() {
        let atrasButton = this.shadowRoot.querySelector('.atras')
        atrasButton.addEventListener('click',function(){
            navigateRouter('landing-page')
        })
    }
    changes() {

    }





}