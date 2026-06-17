console.log("O motor JavaScript foi ativado com sucesso!");

// Variáveis de controle do carrinho
const precoProduto = 299.90; // Simplificação para demonstração
let quantidadeCarrinho = 0;
let valorTotalCarrinho = 0.0;
const limiteStock = 3;

/**
 * Função para adicionar itens ao carrinho
 * @param {number} cardId - Identificador do card para desativar o botão correto
 */
function adicionarAoCarrinho(cardId) {
    if (quantidadeCarrinho < limiteStock) {
        quantidadeCarrinho = quantidadeCarrinho + 1;
        valorTotalCarrinho = quantidadeCarrinho * precoProduto;
        
        // Atualiza o contador visual do carrinho
        document.getElementById("contador-carrinho").innerText = "(" + quantidadeCarrinho + ")";
        console.log("Artigo adicionado. Total: R$ " + valorTotalCarrinho.toFixed(2));
        
        // Se após esta adição chegarmos ao limite do stock:
        if (quantidadeCarrinho === limiteStock) {
            // Seleciona o botão específico dentro do card que foi clicado
            const botao = document.querySelector(`#card-${cardId} button`);
            
            if (botao) {
                // Aplica o atributo HTML que bloqueia o clique
                botao.setAttribute("disabled", "true");
                // Altera o texto para avisar o utilizador
                botao.innerText = "Esgotado";
            }
        }
    }
}

/**
 * Nova Função: Controla a alternância do Dark Mode
 */
function alternarDarkMode() {
    // 1. Selecionamos o elemento body do HTML
    const body = document.body;
    // 2. Selecionamos o botão para alterar o texto/ícone dele
    const botaoTema = document.getElementById("btn-theme");
    
    // 3. O toggle adiciona a classe se ela não existir, e remove se existir
    body.classList.toggle("dark-mode");
    
    // 4. Estrutura condicional para mudar o texto do botão baseado na classe ativa
    if (body.classList.contains("dark-mode")) {
        botaoTema.innerText = "☀️ Modo Claro";
        console.log("Modo escuro ativado.");
    } else {
        botaoTema.innerText = "🌙 Modo Escuro";
        console.log("Modo claro ativado.");
    }
}