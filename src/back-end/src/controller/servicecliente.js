class ServiceCliente {
    constructor(model) {
        this.cliente = model
    }
    async adicionarCliente(req ,res) {
            const body = req.body
            const novoCliente = await this.cliente.create(body)

            res.json(novoCliente)
    }
    async getAll(res) {  
        const litaDeClientes = await this.cliente.findAll()
        res.json(litaDeClientes)
    }
    async getOne(req,res) {
        const buscarCpf = req.params.cpf
        const cliente = await this.cliente.findAll({where: {
            cpf : buscarCpf
        }})
        res.json(cliente)
    }

    async editar(req,res) {
        const buscarCpf = req.params.cpf
        const body = req.body

        const clienteEditado = await this.cliente.update({
            cpf : body.cpf,
            nome : body.nome,
            dtNasc : body.dtNasc,            
            sexo : body.sexo,
            email : body.email,
            profissao : body.profissao,
        },{
            where: {cpf : buscarCpf}
        }) 
        
        console.log(clienteEditado)
        res.json(clienteEditado)
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