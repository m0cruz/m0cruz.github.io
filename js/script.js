function simularEnvio(event) {
    event.preventDefault(); // impede o comportamento de submissão (tentar enviar form via URL)
    verificarPreenchimento();
};

function verificarPreenchimento(){

    // busca os campos do formulário
    const nome = document.getElementById("nome");
    const mail = document.getElementById("mail");
    const mensagem = document.getElementById("mensagem");

    if (nome.value.length !== 0 && mail.value.length !== 0 && mensagem.value.length !== 0) {
        // passa o e-mail a ser verificado
        verificarEmailValido(mail);
    } else {
        // caso algum campo não estiver preenchido
        mostraPopUpAviso();
    };
};

function verificarEmailValido(mail){
    const RegexEmailValido = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)+$/i; // Verifica se o e-mail segue a estrutura example@example.com

    const validade = RegexEmailValido.test(mail.value); // Faz o teste do e-mail digitado

    if (validade) {
        mostraPopUpSucesso();
        limparFormulario();
    } else {
        mostraPopUpEmailInvalido();
    };
};

function mostraPopUpSucesso() {
    document.getElementById('popup-sucesso').style.display = 'block';
};

function mostraPopUpEmailInvalido() {
    document.getElementById('popup-erro').style.display = 'block';
};

function mostraPopUpAviso() {
    document.getElementById('popup-aviso').style.display = 'block';
};

function fecharPopUp() {
    document.getElementById('popup-sucesso').style.display = 'none';
    document.getElementById('popup-erro').style.display = 'none';
    document.getElementById('popup-aviso').style.display = 'none';
};

function limparFormulario() {
    document.getElementById('contato-form').reset();
}