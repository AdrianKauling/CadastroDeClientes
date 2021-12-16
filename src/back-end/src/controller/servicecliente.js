class ServiceCliente {
    constructor(model) {
        this.cliente = model
    }
    async adicionarCliente(req,res) {
            const body = req.body
            const novoCliente = await this.cliente.create(body)

            res.json(novoCliente)
    }
    async getAll(res) {
        const litaDeClientes = await this.cliente.findAll()
        console.log(litaDeClientes)
        res.json(litaDeClientes)
    }
    async getOne(req,res) {
        const id = req.params.id
        const cliente = await this.cliente.findByPk(id)
        res.json(cliente)
    }

    async editar(req,res) {
        const id = req.params.id
        const body = req.body

        const cliente = await this.cliente.findByPk(id)
        cliente.cpf = body.cpf
        cliente.nome = body.nome
        cliente.dtNasc = body.dtNasc
        cliente.sexo = body.sexo
        cliente.email = body.email
        cliente.profissao = body.profissao

        await cliente.save()
        res.json(cliente)
    }

    async delete(req,res) {
        const id = req.params.id
        const clienteDeletado = await this.cliente.destroy({where : {
            id: id
        }})
        res.json(clienteDeletado) 
    }
}

module.exports = ServiceCliente