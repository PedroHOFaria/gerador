let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#"
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;

}
function generatePassword(){
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
        //sliderElement.value é a quantidade de caracteres que foi selecionado pelo usuário//
        /**Math.floor para pegar número inteiro, Math.random para gerar número aleatório e "n"
        para o tamanho do charset**/
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;

}

function copyPassword(){
    if (navigator.clipboard) {
        navigator.clipboard.writeText(novaSenha)
            .then(function () {
                alert("Texto copiado para a área de transferência!");
            })
            .catch(function (err) {
                alert("Não foi possível copiar o texto para a área de transferência.");
                console.error(err);
            });
    } else {
        alert("A API Clipboard não é suportada neste navegador. Você pode usar a abordagem anterior.");
}
}