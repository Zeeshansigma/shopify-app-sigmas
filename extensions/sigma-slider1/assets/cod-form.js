let cod_btn = document.querySelector(".cod-btn button");
let cod_form = document.querySelector(".cod-form-layer-main");
let cod_cross = document.querySelector(".cross");

let newDivHTML = '<div class="new-div" style="display: none !important;"></div>';
document.body.insertAdjacentHTML('afterbegin', newDivHTML);
let newDiv = document.querySelector('.new-div');
newDiv.appendChild(cod_form);
cod_btn.addEventListener("click", function() {
    newDiv.style.setProperty('display', 'block', 'important');
});
cod_cross.addEventListener("click", function() {
    newDiv.style.setProperty('display', 'none', 'important');
});
