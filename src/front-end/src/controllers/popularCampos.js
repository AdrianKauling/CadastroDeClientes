async function popular(cpf) {

    const reposta = await fetch(`http://localhost:8080/cadastro/${cpf}`)
    reposta.json().then(dado => {
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

        if (dado[0].sexo == sexo[0].value) {
            sexo[0].checked = true
        } else {
            sexo[1].checked = true
        }
    })
}