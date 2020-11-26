"use strict"
import { EquComponent } from '../components/app-equ/equ.js';
import { PlanComponent } from '../components/app-plan/plan.js';
import { CustomTest } from '../components/custom-test/test.js'
import { MenuComponent } from '../components/menu/context-menu.js';
import { HeaderComponent } from '../components/spoiler-header/header.js'

document.addEventListener("DOMContentLoaded", async function () {

    window.customElements.define('custom-test', CustomTest);
    window.customElements.define('spoiler-header', HeaderComponent);
    window.customElements.define('app-equ', EquComponent);
    window.customElements.define('app-plan', PlanComponent);
    window.customElements.define('context-menu', MenuComponent);

})
