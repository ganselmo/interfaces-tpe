import { Component } from "../../framework/components/component.js";


export class FiltersComponent extends Component {


    constructor() {
        super(import.meta.url)
    }

    init() {


        let array = JSON.parse(this.attributes.filters.value)

        const elementer = this

        array.forEach((element) => {

            let filter = document.createElement('app-filter')
            filter.innerHTML = element.name.trim()
            filter.setAttribute('class', 'normal')
            filter.setAttribute('name', element.name)
          
            filter.addEventListener('click', function () {
                elementer.filter(element.value)
            })
            elementer.shadowRoot.querySelector('.main').appendChild(filter)
        });

    }

    filter(filter) {
      console.log(filter)
    }





}