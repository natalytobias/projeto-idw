document.addEventListener('DOMContentLoaded', function() {
    const botaoEncomenda = document.getElementById('botao-encomenda');

    botaoEncomenda.addEventListener('click', function(event) {
        event.preventDefault();

        // Informações do produto
        const cor = document.getElementById('cores-selector').value;
        const tamanhoAgulha = document.getElementById('tamanho-agulha-selector').value;
        const mensagem = document.getElementById('campo-observacao').value;

        // Informações de entrega
        const bairro = document.getElementById('campo-bairro').value;
        const numero = document.getElementById('campo-numero').value;
        const rua = document.getElementById('campo-logadouro').value;
        const cep = document.getElementById('campo-cep').value;

        // Verificação de todos os dados
        if (!cor || !tamanhoAgulha || !bairro || !numero || !rua || !cep) {
            alert('Por favor, preencha todos os campos obrigatórios, são os com *');
            return;
        }

        alert('Pedido realizado com sucesso! Muito obrigada pela preferência :]');

        // Limpar os campos após o envio do pedido
        document.getElementById('cores-selector').value = "";
        document.getElementById('tamanho-agulha-selector').value = "";
        document.getElementById('campo-observacao').value = "";
        document.getElementById('campo-bairro').value = "";
        document.getElementById('campo-numero').value = "";
        document.getElementById('campo-logadouro').value = "";
        document.getElementById('campo-cep').value = "";
    });
});
