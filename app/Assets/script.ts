let innerContent = document.querySelector<HTMLElement>('.cod_title_settings .cod_inner_content');
let btnClick = document.querySelector<HTMLElement>('.form_cod_title span');
console.log(btnClick);
btnClick?.addEventListener("click", function() {
    if (innerContent) {
        innerContent.style.display = "block";
    }
});
console.log(innerContent);