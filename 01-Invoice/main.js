// =========
// variables 
// ===========================
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector); 

let sidebar = $('.sidebar');
let InputName = $('#InputName');
let textName = $('#textName');
let printHtml = $('#print');

textName.innerHTML = "Text Name";

// =========
// fuctions
// ===========================
InputName.addEventListener('input', (e) => {
    textName.innerHTML = InputName.value;
});


