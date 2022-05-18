// Nome
let inputName = document.querySelector("#input-name");
// Digitar apenas letras
inputName.addEventListener("keydown", function (button) {
    if (button.key >= "0" && button.key <= "9")
    button.preventDefault();
});

inputName.addEventListener("blur", function () {
    let numeros = "1234567890"
    if (hasNumber(inputName.value)) {
        inputName.value = ""
        alert("Há um número no campo de Username.")
    }   
});


function hasNumber(myString) {
    return /\d/.test(myString);
} 


// Celular
let inputCellphone = document.querySelector('#input-cellphone');

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

let inputPassword = document.querySelector("#input-password");

let inputPassword2 = document.querySelector("#input-password2");


inputPassword2.addEventListener("blur", function () {
    if (inputPassword.value == inputPassword2.value) {
        alert("Senhas coincidem.");
    } else {
        alert("Senhas NÃO coincidem!")
    }
});
