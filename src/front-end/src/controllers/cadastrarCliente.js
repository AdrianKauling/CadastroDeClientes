async function cadastrar() {

    const novoCliente = retornarUmCliente()

    createRequest('POST', 'http://localhost:8080/cadastro', JSON.stringify(novoCliente)).then(() => {
        location.reload()
    })
}