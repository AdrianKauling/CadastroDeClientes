class Clientes{
    constructor(nome,cpf,sexo,email,profissao) {
        this.nome = nome
        this.cpf = cpf
        this.sexo = sexo
        this.email = email
        this.profissao = profissao
        // console.log(this)
    }

    info() {
        console.log(`${this.nome}:\n 
        ${this.profissao}\n
        ${this.cpf}\n
        ${this.email}
        `)
    }

    set setEmail(novoEmail) {
        this.email = novoEmail
    }

    get getEmail() {
        return this.email
    }

}

let cliente1 = new Clientes('Adrian','2121212','masculino','adrian@gmail.com','Desenvolverdor de Software')

let cliente2 = new Clientes('Ana','121212121','femenino','ana@gmail.com','Reporter')

// console.log(cliente1)

cliente1.setEmail = "adriankauling2@gmail.com"

cliente1.info()
cliente2.info()

console.log(`${cliente1.getEmail} / ${cliente2.getEmail}`)





class Livro {
    constructor(nome,editora,paginas) {
        this.nome = nome,
        this.editora = editora,
        this.paginas = paginas
    }

    get getNome(){
        return this.nome
    }

    get getEditora(){
        return this.editora
    }

    get getPaginas() {
        return this.paginas
    }

}

const livro1 = new Livro('Programador apaixonado', 'Casa do código', 185)

console.log(livro1)