async function cadastrar() {

    const novoCliente = retornarUmCliente()

    const response = await createRequest('POST', 'http://localhost:8080/cadastro', JSON.stringify(novoCliente))

    location.reload()
}

