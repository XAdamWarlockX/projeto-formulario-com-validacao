const inputs = document.querySelectorAll(".input");
const btnEnviar = document.querySelector(".btn-enviar");
inputs.forEach((campo) => {
    // Verifica se os campos foram preenchidos
    campo.addEventListener("keyup", () => {
        if (campo.value !== "") {
            campo.classList.remove("campo-vazio");
            campo.classList.add("campo-preenchido");
        }
        else {
            campo.classList.remove("campo-preenchido");
            campo.classList.add("campo-vazio");
        }
    });
    // Varifica se tem algum campo vazio ao clicar para enviar
    btnEnviar.addEventListener("click", () => {
        if (campo.value !== "") {
            campo.classList.remove("campo-vazio");
        }
        else {
            campo.classList.add("campo-vazio");
        }
    });
});
