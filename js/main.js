"use strict"
import { EquComponent } from '../components/app-equ/equ.js';
import { FilterComponent } from '../components/app-filters/app-filter/filter.js';
import { FiltersComponent } from '../components/app-filters/filters.js';
import { PlanComponent } from '../components/app-plan/plan.js';
import { BuscadorComponent } from '../components/buscador/buscador.js';
import { SliderComponent } from '../components/app-slider/slider.js';
import { CustomTest } from '../components/custom-test/test.js'
import { MenuComponent } from '../components/menu/context-menu.js';
import { HeaderComponent } from '../components/spoiler-header/header.js'

document.addEventListener("DOMContentLoaded", async function () {

    window.customElements.define('custom-test', CustomTest);
    window.customElements.define('spoiler-header', HeaderComponent);
    window.customElements.define('app-equ', EquComponent);
    window.customElements.define('app-plan', PlanComponent);
    window.customElements.define('context-menu', MenuComponent);
    window.customElements.define('app-buscador', BuscadorComponent);
    window.customElements.define('app-filters', FiltersComponent);
    window.customElements.define('app-filter', FilterComponent);
    window.customElements.define('app-slider', SliderComponent);
})
