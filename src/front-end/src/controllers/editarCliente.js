function editar() {
    const clienteEditado = retornarUmCliente()

    const options = {
        method: 'PUT',
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify(clienteEditado)
    }

    fetch(`http://localhost:8080/cadastro/${clienteEditado.cpf}`, options)
        .then(response => {
            response.json()
                .then(dado => {
                    console.log(dado)
                })
        })

}
