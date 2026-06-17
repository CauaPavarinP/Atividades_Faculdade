console.log("O motor JavaScript foi ativado com sucesso");

//Valores fixos do produto
const nomeProduto = "Tenis Speed Pro";
const precoProduto = 299.90;

let quantidadeCarrinho = 0;
let valorTotalCarrinho = 0.0;

function adicionarCarrinho(){

    // 1. Incremente a quantidade usando operador aritmético 
    quantidadeCarrinho = quantidadeCarrinho + 1;

    // 2. Calcula o novo total
    valorTotalCarrinho = quantidadeCarrinho * precoProduto;

    // 3. Exibe o resultado no console do desenvolvedor para testar a lógica
    console. log("-------------------------");
    console. log("Produto adicionado: " + nomeProduto);
    console. log("Quantidade no carrinho: " + quantidadeCarrinho);
    console.log("Valor Total: R$ " + valorTotalCarrinho.toFixed(2));

}
