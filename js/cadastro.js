document.addEventListener('DOMContentLoaded', function() {
    const botaoCadastro = document.getElementById('botao-cadastro');

    botaoCadastro.addEventListener('click', function(event) {
        event.preventDefault(); // previne o comportamento padrão de submit do botão

        // pega os valores dos campos
        const nome = document.getElementById('campo-nome').value.trim();
        const sobrenome = document.getElementById('campo-sobrenome').value.trim();
        const email = document.getElementById('email').value.trim();

        // Verifica se os campos obrigatórios estão preenchidos (nome e sobrenome)
        if (nome === '' || sobrenome === '') {
            alert('Por favor, preencha seu nome e sobrenome.');
            return; //medida de segurança, envio do formulario apenas com campos obrigatorios
        }

       

        
        alert(`Cadastro realizado com sucesso!\nNome: ${nome} ${sobrenome}\nEmail: ${email}`);
        
        
        document.getElementById('campo-nome').value = '';
        document.getElementById('campo-sobrenome').value = '';
        document.getElementById('email').value = '';
    });
});
