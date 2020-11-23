"use strict"
import { CustomTest } from '../components/custom-test/test.js'
import { HeaderComponent } from '../components/spoiler-header/header.js'
document.addEventListener("DOMContentLoaded", async function () {

    window.customElements.define('custom-test', CustomTest);
    window.customElements.define('spoiler-header', HeaderComponent);

})
