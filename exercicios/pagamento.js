console.log("Elabore um algoritmo que calcule o que deve ser pago por um produto, coniderando o preço normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado:\n\
\n\
Condições de pagamento:\n\
-À vista (débito): 10% de desconto;\n\
-À vista (dinheiro ou PIX): 15% de desconto;\n\
-Em 2x: preço da etiqueta sem desconto;\n\
-Acima de 2x: preço da etiqueta com acréscimo de 10% de juros.\n");

//variáveis
let debito;
let dinheiroPix;
let duasVezes;
let acimaDuasVezes;
let valorEtiqueta;
let totalAPagar;

if(debito === true){
    totalAPagar = valorEtiqueta * 0.9;
    console.log("O valor a ser pago é de R$ " + totalAPagar.toFixed(2));
}else if(dinheiroPix === true){
    totalAPagar = valorEtiqueta * 0.85;
    console.log("O valor a ser pago é de R$ " + totalAPagar.toFixed(2));
}else if(duasVezes === true){
    totalAPagar = valorEtiqueta;
    console.log("O valor a ser pago é de R$ " + totalAPagar.toFixed(2));
}else {
    totalAPagar = valorEtiqueta * 1.1;
    console.log("O valor a ser pago é de R$ " + totalAPagar.toFixed(2));
};