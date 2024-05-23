// theme quantity 
let theme_quantity = document.querySelector("quantity-input input");
console.log("theme_quantity", theme_quantity);
const priceElements = document.querySelectorAll('.product_price_cod');
let badge = document.querySelector(".quantity_cod_badge p");
console.log( "badge", badge.textContent)
function extractPrice(text) {
    return parseFloat(text.replace(/[^0-9.-]+/g, ""));
}
const basePrices = Array.from(priceElements).map(priceElement => extractPrice(priceElement.textContent));
function updatePrices() {
    let quantity = parseInt(theme_quantity.value, 10);
    if (isNaN(quantity) || quantity < 1) {
        quantity = 1;
        theme_quantity.value = 1;
    }
    priceElements.forEach((priceElement, index) => {
        const newPrice = basePrices[index] * quantity;
        priceElement.textContent = `$${newPrice.toFixed(2)}`; 
    });
    logCurrentValue();
}
theme_quantity.addEventListener('change', () => {
    let currentValue = parseInt(theme_quantity.value, 10);
    if (isNaN(currentValue) || currentValue < 1) {
        theme_quantity.value = 1;
    }
    updatePrices();
     badge.textContent = theme_quantity.value;
});
function logCurrentValue() {
    console.log(theme_quantity.value);
}
updatePrices();
logCurrentValue();
    // end


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


