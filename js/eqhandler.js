let eq = document.querySelector("#equalizer");
let comandPlay = document.querySelector("#comand_player");
let modeSelect = document.querySelector("#mode");
let setPlayer = document.querySelector("#player");

let popupAction = document.querySelector("#myPopup");
let volumen = document.querySelector("#volumen");

document.addEventListener("DOMContentLoaded", function () {

    comandPlay.addEventListener('openComand', openComand);
    comandPlay.addEventListener('closeComand', closeComand);

    popupAction.addEventListener('openScore', openScore);
    popupAction.addEventListener('closeScore', closeScore);


    eq.addEventListener('openEq', openEq);
    eq.addEventListener('closeEq', closeEq);

    volumen.addEventListener('showVolumen', showVolumen);

    modeSelect.addEventListener('openMode', openMode);
    modeSelect.addEventListener('closeMode', closeMode);
    setPlayer.addEventListener('openPlay', openPlay);
    setPlayer.addEventListener('closePlay', closePlay);


    closeEq();
    closeMode();
    closeComand();
    closePlay();


    document.querySelector('main').addEventListener('click', closeEq);
    document.querySelector('main').addEventListener('click', closeMode);
    document.querySelector('main').addEventListener('click', closeComand);
    document.querySelector('#routerLink').addEventListener('click', closeScore);

})

export function openEq() {
    eq.style.display = 'initial'
}

export function closeEq() {
    eq.style.display = 'none'
}

export function openComand() {
    comandPlay.style.display = 'initial'
    closeVolume();

}

export function closeComand() {
    comandPlay.style.display = 'none'
}

export function openMode() {
    modeSelect.style.display = 'initial'
}

export function closeMode() {
    modeSelect.style.display = 'none'
}

export function openPlay() {
    setPlayer.style.display = 'initial'
}
export function closePlay() {
    setPlayer.style.display = 'none'
}

export function openScore() {
    popupAction.classList.add("show");
    popupAction.classList.remove("oculto");
}

export function closeScore() {
    popupAction.classList.remove("show");
    popupAction.classList.add("oculto");
}


export function showVolumen() {

    closeEq();
    closeMode();
    closeComand();

    volumen.classList.toggle("oculto");
}
export function closeVolume() {

    volumen.classList.add("oculto");
} 