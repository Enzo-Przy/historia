// Array contendo apenas as frases dos versos
const versos = [];

// Gera a letra dos 30 elefantes
for (let i = 1; i <= 30; i++) {
    let texto = "";
    
    if (i === 1) {
        texto = "1 elefante incomoda muita gente...";
    } else if (i % 2 !== 0) {
        texto = `${i} elefantes incomodam muita gente...`;
    } else {
        let repeticao = Array(i).fill("incomodam").join(", ");
        texto = `${i} elefantes ${repeticao} muito mais!`;
    }

    versos.push(texto);
}

// Seleção dos elementos do HTML
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

let indiceAtual = 0;

function mostraVerso() {
    // Se passou do último verso, mostra a tela final
    if (indiceAtual >= versos.length) {
        exibeFim();
        return;
    }

    // Substitui o texto anterior pelo verso atual
    caixaPerguntas.textContent = versos[indiceAtual];
    
    // Limpa a área do botão
    caixaAlternativas.innerHTML = "";

    // Cria o BOTAO ÚNICO de avanço
    const botaoProximo = document.createElement("button");
    botaoProximo.textContent = indiceAtual === versos.length - 1 ? "Finalizar Música ➔" : "Próximo Verso ➔";

    // Ao clicar, avança para o próximo
    botaoProximo.addEventListener("click", () => {
        indiceAtual++;
        mostraVerso();
    });

    caixaAlternativas.appendChild(botaoProximo);
}

function exibeFim() {
    caixaPerguntas.classList.add("escondido");
    caixaAlternativas.classList.add("escondido");
    caixaResultado.classList.remove("escondido");
    textoResultado.textContent = "Ufa! Você cantou a música inteira e aguentou os 30 elefantes!";
}

// Inicia a exibição no primeiro verso
mostraVerso();