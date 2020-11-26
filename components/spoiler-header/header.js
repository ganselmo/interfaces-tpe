import { Component } from "../../../framework/components/component.js";
import { closeProfileContext } from "../../js/context-menu.handler.js";

export class HeaderComponent extends Component {

    constructor() {
        super(import.meta.url)
    }
    parent =  document.querySelector('#profile-menu')
    closeEvent = new CustomEvent("closeContext");
    openEvent = new CustomEvent("openContext");
    init() {

                
   
        let profile =  this.shadowRoot.querySelector('#profile')
        console.log(profile)
        let elementer = this
        profile.addEventListener('click',
        function()
        {
            elementer.toggleMenu();
        })
        let base =   this.shadowRoot.querySelectorAll('nav >div:not(#profile)')
        base.forEach(element => {
            element.addEventListener('click',closeProfileContext)
        });

        let lupa = this.shadowRoot.querySelector(".lupa.notlinked")
        lupa.addEventListener('click',function()
        {
            elementer.openLupa()
        })
        
    }
    changes()
    {
   
        
    }
    toggleMenu()
    {
        if(this.getStatus()==='hidden')
        {
            this.parent.dispatchEvent(this.openEvent);
        }
        else{
            this.parent.dispatchEvent(this.closeEvent);
        }
        
    }
    getStatus()
    {
        return this.parent.style.visibility
    }
    openLupa()
    {
        console.log(this)
    }
    

}