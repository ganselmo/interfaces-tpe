"use strict"
import { EquComponent } from '../components/app-equ/equ.js';
import { ModeComponent } from '../Components/app-mode/mode.js';
import { OptionsComponent } from '../Components/app-options-mov/options-mov.js';
import { PlayerComponent } from '../Components/app-player/player.js';
import { SliderStateComponent } from '../Components/app-slider-state/slider-state.js';
import { SliderComponent } from '../components/app-slider/slider.js';
import { CustomTest } from '../components/custom-test/test.js';
import { HeaderComponent } from '../components/spoiler-header/header.js';

document.addEventListener("DOMContentLoaded", async function () {

    window.customElements.define('custom-test', CustomTest);
    window.customElements.define('spoiler-header', HeaderComponent);
    window.customElements.define('app-equ', EquComponent);
    window.customElements.define('app-slider', SliderComponent);
    window.customElements.define('app-player', PlayerComponent);
    window.customElements.define('app-slider-state', SliderStateComponent);
    window.customElements.define('app-options-mov', OptionsComponent);
    window.customElements.define('app-mode', ModeComponent);


})
