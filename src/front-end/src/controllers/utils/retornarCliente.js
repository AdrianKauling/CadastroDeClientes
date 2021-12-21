function retornarUmCliente() {
    const cpf = document.getElementById('cpf').value
    const nome = document.getElementById('nome').value
    const dtNasc = document.getElementById('dtNasc').value
    const sexo = document.querySelector('input[name="sexo"]:checked').value
    const email = document.getElementById('email').value
    const profissao = document.getElementById('profissao').value

    const cliente = Cliente(Number(cpf), nome, dtNasc, sexo, email, profissao)

    return cliente
}