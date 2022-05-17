// Nome
let inputName = document.querySelector("#input-name");
// Digitar apenas letras
inputName.addEventListener("keydown", function (button) {
    if (button.key >= "0" && button.key <= "9")
    button.preventDefault();
});


// Celular
var inputCellphone = document.querySelector('#input-cellphone');

inputCellphone.addEventListener("blur", function () {
  //Remove tudo o que não é dígito
let celular = this.value.replace(/\D/g, "");

if (celular.length == 11) {
    celular = celular.replace(/^(\d{2})(\d)/g, "($1) $2");
    resultado_celular = celular.replace(/(\d)(\d{4})$/, "$1-$2");
    inputCellphone.value = resultado_celular;
} else if (celular.length >= 1) {
    alert("Alert")
}
});
