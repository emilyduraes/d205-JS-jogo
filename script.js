// função de aleatório
function aleatorio (min, max){
    return Math.floor(Math.random() * (max - min +1)) + min;
}

// função de trocar a cor aleatoreamente dos quadradinhos de uma página ao clicar 
let quadradinhos = document.querySelectorAll(".dentro");

for (let quadradinho of quadradinhos){
    quadradinho.onclick = function() {
        quadradinho.style.backgroundColor = `rgb(${aleatorio(0,255)}, ${aleatorio(0,255)}, ${aleatorio(0,255)})`;
    }
}

// função de trocar a cor dos inputs de acordo com o que tá escrito no mesmo, funcionando através da tecla enter
let imputs = document.querySelectorAll(".dentro");

for (let input of inputs){
    input.onkeyup = function(evento){
        if(evento.key === "Enter"){
        event.target.style.backgroundColor = input.value;
        }
    }

    // função que impede que o usuário cole informações do site em outros inputs
    input.onpaste = function(evento){
        evento.preventDefault();
        evento.target.value = "Cópia não comédia";
    }
}

