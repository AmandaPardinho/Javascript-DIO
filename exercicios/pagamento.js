console.log("Elabore um algoritmo que calcule o que deve ser pago por um produto, coniderando o preço normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado:\n\
\n\
Condições de pagamento:\n\
-À vista (débito): 10% de desconto;\n\
-À vista (dinheiro ou PIX): 15% de desconto;\n\
-Em 2x: preço da etiqueta sem desconto;\n\
-Acima de 2x: preço da etiqueta com acréscimo de 10% de juros.\n");

//variáveis
let valorEtiqueta = 100.99;
let debito = (valorEtiqueta * 0.9);
let dinheiroPix = (valorEtiqueta * 0.85);
let duasVezes = valorEtiqueta;
let acimaDuasVezes = (valorEtiqueta * 1.1);
let totalAPagar;
let formaPagamento = debito;

if(formaPagamento === debito){
    totalAPagar = debito;
    console.log("O valor a ser pago é de R$ " + totalAPagar.toFixed(2));
}else if(formaPagamento === dinheiroPix){
    totalAPagar = dinheiroPix;
    console.log("O valor a ser pago é de R$ " + totalAPagar.toFixed(2));
}else if(formaPagamento === duasVezes){
    totalAPagar = duasVezes;
    console.log("O valor a ser pago é de R$ " + totalAPagar.toFixed(2));
}else {
    totalAPagar = acimaDuasVezes;
    console.log("O valor a ser pago é de R$ " + totalAPagar.toFixed(2));
};