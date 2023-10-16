const enviar = document.getElementById("btn");

const inputText = document.querySelectorAll(".text");

const ocultar = document.querySelectorAll(".esconder");




enviar.addEventListener("click", () => {
    inputText.forEach(function(input, indice){

        if(input.value !== ""){
            input.classList.add("campoPreenchido")
            input.classList.remove("campoObrigatorio", "bordaVermelha");
            ocultar[indice].classList.add("esconder")
        } else if (input.value === ""){
            input.classList.add("campoObrigatorio", "bordaVermelha");
            input.classList.remove("campoPreenchido")
            ocultar[indice].classList.remove("esconder")
        }
    })
})