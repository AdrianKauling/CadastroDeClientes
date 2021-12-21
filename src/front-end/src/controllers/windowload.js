window.onload = () => {
    fetch('http://localhost:8080/cadastro')
        .then((response) => {
            response.json()
                .then(lista => {
                    lista.forEach(element => {

                        const botao = `<button onclick="popular(${element.cpf})">Popular</button>`

                        const conteudo = `<tr>
                        <td>${element.nome}</td>
                        <td>${element.cpf}</td>
                        <td>${element.dtNasc}</td>
                        <td>${element.sexo}</td>
                        <td>${element.email}</td>
                        <td>${element.profissao}</td>
                        <td>${botao}</td>                      
                        </tr>`
                        const novaLinha = document.createElement('tr')
                        novaLinha.innerHTML = conteudo
                        document.getElementById('tabela').appendChild(novaLinha)
                    });
                })
        })
}