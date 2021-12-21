window.onload = () => {
    fetch('http://localhost:8080/cadastro')
        .then((response) => {
            response.json()
                .then(lista => {
                    lista.forEach(formatarTabela);
                })
        })
}