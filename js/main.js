"use strict"
import { EquComponent } from '../components/app-equ/equ.js';
import { SliderComponent } from '../components/app-slider/slider.js';
import { CustomTest } from '../components/custom-test/test.js'
import { HeaderComponent } from '../components/spoiler-header/header.js'

document.addEventListener("DOMContentLoaded", async function () {

    window.customElements.define('custom-test', CustomTest);
    window.customElements.define('spoiler-header', HeaderComponent);
    window.customElements.define('app-equ', EquComponent);
    window.customElements.define('app-slider', SliderComponent);
})
