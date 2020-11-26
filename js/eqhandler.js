let eq = document.querySelector("#equalizer");
let comandPlay = document.querySelector("#comand_player");

document.addEventListener("DOMContentLoaded", function () {
    comandPlay.addEventListener('openComand',openComand);
    comandPlay.addEventListener('closeComend',closeComand);
    eq.addEventListener('openEq',openEq);
    eq.addEventListener('closeEq',closeEq);

    closeEq();
    closeComand();

    document.querySelector('main').addEventListener('click',closeEq);
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