"use strict"
import { CommentComponent } from '../components/app-comment/comment.js';
import { EquComponent } from '../components/app-equ/equ.js';
import { FilterComponent } from '../components/app-filters/app-filter/filter.js';
import { FiltersComponent } from '../components/app-filters/filters.js';
import { PlanComponent } from '../components/app-plan/plan.js';
import { BuscadorComponent } from '../components/buscador/buscador.js';
import { SliderComponent } from '../components/app-slider/slider.js';
import { CustomTest } from '../components/custom-test/test.js'
import { MenuComponent } from '../components/menu/context-menu.js';
import { HeaderComponent } from '../components/spoiler-header/header.js'
import { ModeComponent } from '../Components/app-mode/mode.js';
import { OptionsComponent } from '../Components/app-options-mov/options-mov.js';
import { PlayerComponent } from '../Components/app-player/player.js';
import { SliderStateComponent } from '../Components/app-slider-state/slider-state.js';

document.addEventListener("DOMContentLoaded", async function () {

    window.customElements.define('custom-test', CustomTest);
    window.customElements.define('spoiler-header', HeaderComponent);
    window.customElements.define('app-equ', EquComponent);
    window.customElements.define('app-plan', PlanComponent);
    window.customElements.define('app-comment', CommentComponent);
    window.customElements.define('context-menu', MenuComponent);
    window.customElements.define('app-buscador', BuscadorComponent);
    window.customElements.define('app-filters', FiltersComponent);
    window.customElements.define('app-filter', FilterComponent);
    window.customElements.define('app-slider', SliderComponent);
    window.customElements.define('app-player', PlayerComponent);
    window.customElements.define('app-slider-state', SliderStateComponent);
    window.customElements.define('app-options-mov', OptionsComponent);
    window.customElements.define('app-mode', ModeComponent);


})
