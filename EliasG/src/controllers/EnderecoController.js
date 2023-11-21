const ModelEndereco = require('../models/endereco');

module.exports =
{
    async List(req,res) {
        try {
            const endereco = await ModelEndereco.findAll();
            return res.json(endereco);
        } 
        catch (erro) {
            return console.error("Erro na listagem : ", erro);
        }
    },

    async Create(req,res) {
        try {
            const endereco = await ModelEndereco.create(
                {
                    idEndereco : req.body.idEndereco,
                    endereco : req.body.endereco,
                    cep : req.body.cep,
                    numero : req.body.numero,
                    bairro : req.body.bairro,
                    cidade : req.body.cidade,
                    estado : req.body.estado,
                    dataCriacao : req.body.dataCriacao,
                    dataAtualizacao : null,
                }
            );
            return res.json(endereco);

        } 
        catch (erro) {  
            return console.error("Erro na criação : ", erro); 
        }     
    },

    async Update(req,res) {
        try {
                const ender = await ModelEndereco.findByPk(req.body.idEndereco);
                if (ender) {
                    ender.endereco = req.body.endereco,
                    ender.cep = req.body.cep,
                    ender.numero = req.body.numero,
                    ender.bairro = req.body.bairro,
                    ender.cidade = req.body.cidade,
                    ender.estado = req.body.estado,
                    ender.dataAtualizacao = req.body.dataAtualizacao,
                    await ender.save();
                }
                return res.json(ender);
        } 
        catch (erro) {  
            return console.error("Erro na update : ", erro); 
        } 
    },   

    async GetOne(req,res) {
        try {
    
            const ender = await ModelProduto.findByPk(req.body.idEndereco);
         
            return res.json(ender);
        } 
        catch (erro) {  
            return console.error("Erro ao obter : ", erro); 
        } 
    },
    
    async Delete(req,res) {
        try {
    
            const ender = await ModelProduto.findByPk(req.body.idEndereco);
            await ender.destroy();
            return res.json(ender);
        } 
        catch (erro) {  
            return console.error("Erro ao deletar : ", erro); 
        } 
    }
}