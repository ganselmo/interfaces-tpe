"use strict"
let routerOutlet = document.querySelector('#routerLink')
export function navigateRouter(path) {
    const event = new CustomEvent("routerDispatcher",
        {
            detail: path
        });
    routerOutlet.dispatchEvent(event);
}

document.addEventListener("DOMContentLoaded", async function () {


    console.log(routerOutlet)

    routerOutlet.addEventListener('routerDispatcher', function (e) {
        dispatchTo(e.detail)
    
       
    })

    navigateRouter("landing-page")

    function dispatchTo(path)
    {
        routerOutlet.innerHTML = ''
        let newElement = document.createElement(path)
        routerOutlet.appendChild(newElement)
      

        
    }

})



const routes = [
    { name: "landing-page", element: "landing-page" }
]


