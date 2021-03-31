'use strict';
let show_modal = document.querySelectorAll('.show-modal');
let modal = document.querySelectorAll('.modal');
let close_modal = document.querySelectorAll('.close-modal');
let overlay = document.querySelector('.overlay');
for (let i = 0; i < show_modal.length; i++)
  show_modal[i].addEventListener('click', function() {
    modal[i].classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
let closewindow = function() {
	for(let i=0;i<modal.length;i++)
  modal[i].classList.add('hidden');
  overlay.classList.add('hidden');
};
for(let i=0;i<modal.length;i++)
close_modal[i].addEventListener('click', closewindow);
overlay.addEventListener('click', closewindow);
