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
import { ModeComponent } from '../components/app-mode/mode.js';
import { OptionsComponent } from '../components/app-options-mov/options-mov.js';
import { PlayerComponent } from '../components/app-player/player.js';
import { SliderStateComponent } from '../components/app-slider-state/slider-state.js';
import { ContentWrapperComponent } from '../components/content-wrapper/content-wrapper.js';
import { LandingPage } from '../pages/landing/landing.js';
import { ProfilePage } from '../pages/profile/profile.js';
document.addEventListener("DOMContentLoaded", async function () {

    //COMPONENTS
    window.customElements.define('custom-test', CustomTest);
    window.customElements.define('spoiler-header', HeaderComponent);
    window.customElements.define('app-equ', EquComponent);
    window.customElements.define('app-plan', PlanComponent);
    window.customElements.define('context-menu', MenuComponent);
    window.customElements.define('app-buscador', BuscadorComponent);
    window.customElements.define('app-filters', FiltersComponent);
    window.customElements.define('app-filter', FilterComponent);
    window.customElements.define('app-slider', SliderComponent);
    window.customElements.define('app-player', PlayerComponent);
    window.customElements.define('app-slider-state', SliderStateComponent);
    window.customElements.define('app-options-mov', OptionsComponent);
    window.customElements.define('app-mode', ModeComponent);
    window.customElements.define('content-wrapper', ContentWrapperComponent);

    //PAGES
    window.customElements.define('landing-page', LandingPage);
    window.customElements.define('profile-page', ProfilePage);
})
