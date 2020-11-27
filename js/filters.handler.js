
let filters = document.querySelector('#filters-panel');
document.addEventListener("DOMContentLoaded", function () {
    console.log(filters)
    filters.addEventListener('openFilters',openFilters)

    filters.addEventListener('closeFilters',closeFilters)
    

    closeFilters()
    document.querySelector('main').addEventListener('click',closeFilters)
})



export function openFilters() {
    filters.style.display = 'initial'
}

export function closeFilters() {
    filters.style.display = 'none'
}

