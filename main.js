const perguntas = [];

for (let i = 1; i <= 30; i++) {
    let verso = "";
    
    // Lógica da música dos elefantes
    if (i === 1) {
        verso = "1 elefante incomoda muita gente...";
    } else if (i % 2 !== 0) {
        // Números ímpares
        verso = `${i} elefantes incomodam muita gente...`;
    } else {
        // Números pares: repete "incomodam" a quantidade de vezes do número
        let repeticao = Array(i).fill("incomodam").join(", ");
        verso = `${i} elefantes ${repeticao} muito mais!`;
    }

    // Adiciona o objeto no mesmo formato do seu projeto
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

// Se quiser testar e ver como ficou, é só rodar:
// console.log(perguntas);