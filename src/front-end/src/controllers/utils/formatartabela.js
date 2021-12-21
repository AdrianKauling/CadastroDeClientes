function formatarTabela(element){

    const dataNascArray = element.dtNasc.split('-')
    const nascFormatado = `${dataNascArray[2]}/${dataNascArray[1]}/${dataNascArray[0]}`
    console.log(dataNascArray)
    const botao = `<button onclick="popular(${element.cpf})">Popular</button>`
    
    const conteudo = `<tr>
    <td>${element.nome}</td>
    <td>${element.cpf}</td>
    <td>${nascFormatado}</td>
    <td>${element.sexo}</td>
    <td>${element.email}</td>
    <td>${element.profissao}</td>
    <td>${botao}</td>                      
    </tr>`
    const novaLinha = document.createElement('tr')
    novaLinha.setAttribute('name','registros')
    novaLinha.innerHTML = conteudo
    document.getElementById('tabela').appendChild(novaLinha)
}