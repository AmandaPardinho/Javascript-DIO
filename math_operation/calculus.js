console.log("Dadas as seguintes variáveis, faça um programa para calcular o valor gasto de combustível em uma viagem. Em seguida, imprima o valor que será gasto de combustível para realização da viagem. Suponha que seja um carro que faça 15 km/L de gasolina na estrada.\n\
Variáveis:\n\
1 - preço do combustível;\n\
2 - gasto médio de combustível do carro por quilômetro;\n\
3 - distância, em quilômetros, da viagem.")

let precoCombustivel = 5.04; // R$ por litro de gasolina; poderia ser uma constante e não uma variável
let distanciaViagem = 3500; //Distância (km) de Campinas-SP até o Hospedagem Jalapão - TO (ida e volta)
let valorMedio = ((distanciaViagem * precoCombustivel) / 15);

console.log("O valor gasto será de R$ " + valorMedio.toFixed(2));

