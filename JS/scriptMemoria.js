function embaralhar(lista){
    let valorTemporario;
    let indiceAlatorio;

    for(let i = lista.length - 1; i !== 0; i --){
        indiceAlatorio = Math.floor(Math.random() * i);
        valorTemporario = lista[i];
        lista[i] = lista[indiceAlatorio];
        lista[indiceAlatorio] = valorTemporario;
    }
    return lista;
}

let cartas = document.querySelectorAll(".card");

let imagensSalvas = ["Bee.png", "blue-boss.png",  "clown.png", "Cuphoof.png", "dice-man.png", "kettle.png", "mugman.png", "the-devil.png"];

let imagens = imagensSalvas.concat(imagensSalvas);

imagens = embaralhar(imagens);

for(let i = 0; i < cartas.length; i++){
    cartas[i].style.backgroundImage = `url("images/${imagens[i]}")`;
}
