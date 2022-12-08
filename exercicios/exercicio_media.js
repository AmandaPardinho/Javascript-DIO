console.log("Faça um algoritmo que, dadas as três notas tiradas por um aluno em um semestre da faculdade, calcule e imprima sua média e sua classificação de acordo com a tabela abaixo:\n\
\n\
Média = (n1 + n2 + n3) / 3;\n\
\n\
Classificação:\n\
- Média menor que 5: reprovado;\n\
- Média entre 5 e 7: exame;\n\
- Média acima de 7: aprovado.");

const readline = require(`node:readline`);
const {stdin: input, stdout: output} = require(`node:process`);

const leitor = readline.createInterface({
    input,
    output    
});

leitor.question("Qual é a nota n1?", (answer1) => {
    leitor.question("Qual é a nota n2?", (answer2) => {
        leitor.question("Qual é a nota n3?", (answer3) => {
            let media = (+answer1 + +answer2 + +answer3) / 3;
            console.log(`Sua média final é ${media.toFixed(2)}`);
            if(media >= 7){
                console.log("Parabéns!!! Você foi aprovado!");
            }else if(media >= 5 && media <= 7){
                console.log("Exame");
            }else{
                console.log("Reprovado");
            };
            leitor.close();
        });
    });
});
