
let buscador = document.querySelector('#lupaBuscador');
document.addEventListener("DOMContentLoaded", function () {
    buscador.addEventListener('openBuscador',openBuscador)

    buscador.addEventListener('closeBuscador',closeBuscador)
    

    closeBuscador()
    // document.querySelector('main').addEventListener('click',closeBuscador)
})



export function openBuscador() {
    buscador.style.display = 'initial'
}

export function closeBuscador() {
    buscador.style.display = 'none'
}