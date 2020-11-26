let eq = document.querySelector("#equalizer");
let comandPlay = document.querySelector("#comand_player");
let modeSelect = document.querySelector("#mode");

document.addEventListener("DOMContentLoaded", function () {
    comandPlay.addEventListener('openComand',openComand);
    comandPlay.addEventListener('closeComend',closeComand);
    eq.addEventListener('openEq',openEq);
    eq.addEventListener('closeEq',closeEq);
    modeSelect.addEventListener('openMode',openMode);
    modeSelect.addEventListener('closeMode',closeMode);


    closeEq();
    closeMode();
    closeComand();

    document.querySelector('main').addEventListener('click',closeEq);
    document.querySelector('main').addEventListener('click',closeMode);
    document.querySelector('main').addEventListener('click',closeComand);

})

export function openEq() {
    eq.style.visibility = 'initial'
}

export function closeEq() {
    eq.style.visibility = 'hidden'
}

export function openComand() {
    comandPlay.style.visibility = 'initial'
}

export function closeComand() {
    comandPlay.style.visibility = 'hidden'
}

export function openMode() {
    modeSelect.style.visibility = 'initial'
}

export function closeMode() {
    modeSelect.style.visibility = 'hidden'
}