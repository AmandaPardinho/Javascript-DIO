console.log("\n\
    Faça um programa para calcular o valor de uma viagem supondo o uso de um carro que faça 12 km/L quando usa gasolina e 9 km/L quando usa etanol. Nele existirão as seguintes variáveis obrigatórias:\n\
    \n\
        1 - preço do etanol;\n\
        2 - preço da gasolina;\n\
        3 - tipo de combustível que está no carro;\n\
        4 - gasto médio de combustível do carro, por quilômetro;\n\
        5 - distância, em quilômetros, da viagem.\n\
    \n\
    Imprima no console o valor que será gasto para realizar a viagem.");

let precoEtanol = 2.99; //Preço médio do etanol hoje em Campinas - SP
let precoGasolina = 4.92; //Preço médio da gasolina hoje em Campinas - SP
let combustivel = "Etanol";
let gastoCombustivel;
let distanciaViagem = 648; //Distância, em quilômetros, de ida de Campinas (SP) à Cabo Frio (RJ)



if(combustivel === "Gasolina"){
    gastoCombustivel = ((distanciaViagem * precoGasolina)/12);
    console.log(gastoCombustivel.toFixed(2));
}else{
    gastoCombustivel = ((distanciaViagem * precoEtanol)/9);
    console.log(gastoCombustivel.toFixed(2));
};


