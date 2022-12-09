# **Javascript - DIO**

> Início dos estudos com javascript no bootcamp da DIO.
>
---
## :abacus: **Operações Matemáticas** 
> A pasta **math_operation** contém o arquivo **calculus.js** com a resolução do problema proposto na Aula 1 do módulo "Primriros Passos com JavaScript". Após a primeira parte da aula, na qual o professor Renan ensinou como declarar variáveis em JavaScript, foi proposto um problema aplicando os conceitos estudados em aula.
> 
>Neste desafio, deveríamos calcular o valor de combustível gasto numa determinada viagem de carro. Minha resolução ficou ligeiramente diferente da exibida pelo professor Renan em aula pelos seguintes motivos:
>
> - Tentei resolver o exercício proposto antes que o professor mostrasse a resolução.
> - Formatei o enunciado do problema para que quem vier a abrir o código tenha acesso a ele de um modo mais elegante que um texto comentado.
> - Mexi também na estrutura do enunciado de modo que, pelo menos para mim, ele ficou mais claro.
>
> Apesar dessas pequenas diferenças, se rodarem o código que eu escrevi com os mesmos valores usados pelo professor Renan na aula, chegarão no mesmo resultado.
---
## **Condicionais**
> Nesta segunda aula, foi apresentada a estrutura if/else, estrutura condicional que aceita dois tipos de resposta: verdadeiro ou falso. De acordo com a resposta encontrada, o programa seguirá por um determinado caminho.
> 
> No desafio proposto na aula, refizemos o exercício da viagem de carro feito anteriormente, porém tivemos que determinar qual combustível é usado pelo carro e, com isso, calcular o valor gasto na viagem. Assim como no desafio anterior, procurei resolvê-lo antes do professor e minha resolução ficou ligeiramente diferente daquela proposta pelo professor Renan em aula, pois:
> 
> - Fiz algumas alterações no enunciado do problema.
> - Defini valores diferentes para as variáveis.
> 
> Gostaria de ter implementado uma interação com o usuário através do terminal neste problema, mas não foi possível neste momento (tentei fazer com um método que encontrei e falava que deveria fazer um import de um módulo, mas ele não funcionou). Tal implementação foi feita em exercícios posteriores.
---
## **Exercícios**
> Os próximos três exercícios propostos foram exercícios de fixação. Neles, a proposta era trabalhar com as estruturas condicionais que havíamos aprendido durante o módulo. 
> 
> Para isso, exemplos que tinham contextos diferentes foram propostos. Apesar da temática diferente, a resolução dos três exercícios é basicamente a mesma. Abaixo encontram-se as descrições de cada um deles. 
---
### :100: **Exercício Média**
> Nesse primeiro exercício, deveríamos calcular a média de um aluno edizer, ao final, qual era sua situação (aprovado, exame ou reprovado) de acordo com o resultado da média. O exercício em si tem uma resolução bastante simples que visava o treino do uso da estrutura condicional if/else.
>
> No entanto, como não havia conseguido anteriormente, decidi que nesse exercício implementaria a interação com o usuário via terminal. Tal implementação já havia se mostrado difícil anteriormente, mas achei que seria algo interessante de se aprender.
> 
> Tive vários problemas com ela. O principal deles foi relativo ao import. Há duas formas de fazê-lo. O uso do "import" como feito no Java só pode ser feito no node.js se você o fizer dentro de um módulo ES. Até esse momento, não sabia nem o que era um módulo ES e muito menos como criá-lo.
> 
> Depois de muita pesquisa, encontrei essa explicação sobre o módulo ES e entendi que não daria certo na minha resolução (ainda não aprendi a criar isso). Portanto, teria que fazer esse import usando o "require". O "require" só existe em CommonJS que é um meio do Node.js importar e exportar módulos dentro de uma aplicação. Este, pelo que entendi, é um método mais antigo de implementar a interação com o servidor.
>
> Para mim, esta foi a forma escolhida de implementar a interação com o usuário. Fiz exatamente o que a documentação do [Node.js](https://nodejs.org/api/readline.html) me instruia a fazer. Porém, nada do código funcionar.
>
> Depois de muito tentar (e apanhar), resolvi perguntar para colegas que entendem mais de JavaScript do que eu. No fim, acabou que meu erro era algo simples de ser resolvido, mas que eu, por não conhecer tão bem a linguagem, continuaria procurando por bastante tempo.
>
> Agora, com a implementação da interação com o usuário via terminal, o programa se tornou mais dinâmico, uma vez que possibilita, a cada novo início, inserir valores diferentes de nota para o aluno e recalcular a média.
---
### :balance_scale: **IMC**
> Tendo resolvido o problema da interação com o usuário via terminal no exercício anterior, pude implementá-la nesse exercício também. Isso me permitiu treinar a estrutura da importação e solidificar o conhecimento.
>
> Com relação ao exercício em si, sua proposta era calcular o IMC de uma pessoa a partir da informação sobre seu peso e altura. Depois, o resultado obtido era comparado à classificação presente em uma tabela pré-definida pela OMS e, assim, classificar o indivíduo quanto ao seu peso.
>
> Com a interação com o terminal, foi mais fácil fazer a verificação da classificação de cada pessoa e testar se minhas estruturas condicionais funcionavem de forma adequada.
---
### :money_with_wings: **Pagamento**
> Ao contrário dos exercícios anteriores, optei por não fazer a interação do usuário com o terminal neste exercício. Apesar de simples a resolução com as condições dadas pelo enunciado, quando a implementação da interação fosse feita, novas variáveis entrariam no código e isso levaria mais tempo para destrinchar e fazer com que funcionasse direito.
>
> Por esse motivo, optei por resolver normalmente e, para realizar os testes, alteraria o valor diretamente no código. Futuramente, é possível que reveja a resolução e faça a interação com o usuário.
>
> Explicando o exercício: ele consistia em calcular o valor a ser pago por uma pessoa, num determinado produto, de acordo com a forma de pagamento escolhida. Assim, variando a forma de pagar a compra, poderia haver um desconto, um acréscimo ou pagar o preço cheio presente na etiqueta.
>
> Ao determinar qual seria a forma de pagamento, obrigatoriamente cairíamos dentro de uma das condições dadas e o cálculo seria realizado. Ao final, o preço a ser pago é exibido.
---

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
</a>
<a href="https://nodejs.org">
   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="nodejs" width="40" height="40"/>
</a>   
<a href="https://git-scm.com/">
   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" width="40" height="40"/>
</a>  
<a href="https://code.visualstudio.com/">
   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="vscode" width="40" height="40"/>
</a>

---    
![Image](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![Image](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)

---

[![GitHub SEU NOME]( https://img.shields.io/github/followers/AmandaPardinho?label=follow&style=social)](https://github.com/AmandaPardinho)