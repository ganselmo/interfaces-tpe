import { Component } from "../../framework/components/component.js";


export class FiltersComponent extends Component {


    constructor() {
        super(import.meta.url)
    }

    init() {


        let array = JSON.parse(this.attributes.filters.value)

        const elementer = this
        let filters=[];
        array.forEach((element) => {


            let elementFilter = new CustomEvent(element.value);
            let filter = document.createElement('app-filter')
            filter.innerHTML = element.name.trim()
            filter.setAttribute('class', 'normal')
            filter.setAttribute('name', element.name)
            filter.setAttribute('isClicked', false)

            filter.addEventListener('click', function () {
                filters.forEach(element => {

                    element.setAttribute("isClicked", false)
                });
                filter.setAttribute("isClicked", true)
            })
            filters.push(filter)
            elementer.shadowRoot.querySelector('.main').appendChild(filter)
        });

        filters[0].setAttribute("isClicked", true)
    }

    filter(filter) {

        // document.querySelector('search-page').dispatchEvent(filter);
    }





}