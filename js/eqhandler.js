let eq = document.querySelector("#equalizer");
let comandPlay = document.querySelector("#comand_player");
let modeSelect = document.querySelector("#mode");
let setPlayer = document.querySelector("#player");
let popup = document.querySelector("#myPopup");



document.addEventListener("DOMContentLoaded", function () {
    comandPlay.addEventListener('openComand',openComand);
    comandPlay.addEventListener('closeComend',closeComand);
    comandPlay.addEventListener('openScore',openScore);
    comandPlay.addEventListener('closeScore',closeScore);

    eq.addEventListener('openEq',openEq);
    eq.addEventListener('closeEq',closeEq);



    modeSelect.addEventListener('openMode',openMode);
    modeSelect.addEventListener('closeMode',closeMode);
    setPlayer.addEventListener('openPlay',openPlay);
    setPlayer.addEventListener('closePlay',closePlay);


    closeEq();
    closeMode();
    closeComand();
    //closePlay();


    document.querySelector('main').addEventListener('click',closeEq);
    document.querySelector('main').addEventListener('click',closeMode);
    document.querySelector('main').addEventListener('click',closeComand);


})

export function openEq() {
    eq.style.display = 'initial'
}

export function closeEq() {
    eq.style.display = 'none'
}

export function openComand() {
    comandPlay.style.display = 'initial'
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

function openScore(){
    popup.classList.toggle("show");
}


function closeScore(){
    popup.classList.toggle("show");
}

