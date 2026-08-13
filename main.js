// Array para armazenar os versos da história
const perguntas = [];

// Gerador automático da letra da música
for (let i = 1; i <= 30; i++) {
    let verso = "";
    
    if (i === 1) {
        verso = "1 elefante incomoda muita gente...";
    } else if (i % 2 !== 0) {
        verso = `${i} elefantes incomodam muita gente...`;
    } else {
        let repeticao = Array(i).fill("incomodam").join(", ");
        verso = `${i} elefantes ${repeticao} muito mais!`;
    }

    perguntas.push({
        enunciado: verso,
        alternativas: [
            {
                texto: "Cantar o próximo verso!",
                afirmacao: `Você teve fôlego e cantou a parte dos ${i} elefantes com muita empolgação.`
            },
            {
                texto: "Chega, não aguento mais!",
                afirmacao: `A cantoria cansou e você desistiu no elefante número ${i}.`
            }
        ]
    });
}

// Seleção de elementos da DOM
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        exibeResultadoFinal();
        return;
    }
    
    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";

    perguntaAtual.alternativas.forEach(alternativa => {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botao);
    });
}

function respostaSelecionada(opcao) {
    historiaFinal += opcao.afirmacao + " ";
    
    // Se o usuário clicar em "Chega, não aguento mais!", encerra a cantoria
    if (opcao.texto.includes("Chega")) {
        exibeResultadoFinal();
    } else {
        atual++;
        mostraPergunta();
    }
}

function exibeResultadoFinal() {
    caixaPerguntas.classList.add("escondido");
    caixaAlternativas.classList.add("escondido");
    caixaResultado.classList.remove("escondido");
    textoResultado.textContent = historiaFinal;
}

// Inicia a aplicação
mostraPergunta();