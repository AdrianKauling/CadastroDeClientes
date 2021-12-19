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


async function cadastrar() {
    
     const novoCliente = retornarUmCliente()

    const response = await createRequest('POST', 'http://localhost:8080/cadastro', JSON.stringify(novoCliente))


    console.log(response)

}

async function buscar() {
    const buscarCpf = document.getElementById('filtroCpf').value

    const reposta = await fetch(`http://localhost:8080/cadastro/${buscarCpf}`, {
        method: "GET"
    })
    reposta.json().then(dado=> {
        const cpf = document.getElementById('cpf')
        const nome = document.getElementById('nome')
        const dtNasc = document.getElementById('dtNasc')
        const sexo = document.getElementsByName('sexo')
        const email = document.getElementById('email')
        const profissao = document.getElementById('profissao')
        console.log(dado[0].dtNasc)

        cpf.value = dado[0].cpf
        nome.value = dado[0].nome
        dtNasc.value = dado[0].dtNasc

        email.value = dado[0].email
        profissao.value = dado[0].profissao

        if(dado[0].sexo == sexo[0].value) {
            sexo[0].checked = true
        }else{
            sexo[1].checked = true
        }
    })
}

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