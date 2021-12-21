
function buscar() {
    const cpfElement = document.getElementById('filtroCpf')
    
    const cpf = cpfElement.value 
    const tabela = document.getElementsByName('registros')

    tabela.forEach((element) => {
        element.innerText = ''
    })

    fetch(`http://localhost:8080/cadastro/${cpf}`)
        .then(response => {
            response.json()
                .then(filtro => {
                    filtro.forEach(formatarTabela)
                })
        })

}