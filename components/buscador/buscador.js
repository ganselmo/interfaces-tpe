
import { Component } from "/framework/components/component.js";


export class BuscadorComponent extends Component {

    constructor() {
        super(import.meta.url)
    }

    init() {

    }
    changes() {

    }
    find(location) {
        console.log(location)
    }
}