async function deletar() {
    const clienteEditado = retornarUmCliente()

    const response = await fetch(`http://localhost:8080/cadastro/${clienteEditado.cpf}`, options('DELETE', clienteEditado))

    if (response.ok) {
        limparCampos()
    }
    location.reload()
}