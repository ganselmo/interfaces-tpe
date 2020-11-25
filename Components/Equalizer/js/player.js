'use strict'

let btnPlay = document.querySelector(".button_play")
btnPlay.addEventListener('click',function() {
    this.classList.toggle('paused');
    return false;
  });



/*   
$(document).ready(function() {
    var btn = $(".button");
    btn.click(function() {
      btn.toggleClass("paused");
      return false;
    });
  }); */