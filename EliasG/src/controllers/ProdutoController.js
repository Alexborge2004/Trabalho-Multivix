const ModelProduto = require('../models/produto');

module.exports =
{
    async List(req,res) {
        try {
            const produtos = await ModelProduto.findAll();
            return res.json(produtos);
        } 
        catch (erro) {
            return console.error("Erro na Listagem : ", erro);
        }
    },

    async Create(req,res) {
        try {
            const produtos = await ModelProduto.create(
                {
                    idProduto : req.body.idProduto,
                    nomeProduto : req.body.nomeProduto,
                    codInterno : req.body.codInterno,
                    codigo : req.body.codigo,
                    quantidade : req.body.quantidade,
                    valor : req.body.valor,
                    observacoes : req.body.observacoes,
                    dataCriacao : req.body.dataCriacao,
                    dataAtualizacao : null,
                }
            );
            return res.json(produtos);

        } 
        catch (erro) {  
            return console.error("Erro na criação : ", erro); 
        }     
    },

    async Update(req,res) {
        try {
                const prod = await ModelProduto.findByPk(req.body.idProduto);
                if (prod) {
                    prod.nomeProduto = req.body.nomeProduto;
                    prod.codInterno = req.body.codInterno;
                    prod.codigo = req.body.codigo;
                    prod.quantidade = req.body.quantidade;
                    prod.valor = req.body.valor;
                    prod.observacoes = req.body.observacoes;
                    prod.dataAtualizacao = req.body.dataAtualizacao;
                    await prod.save();
                }
                return res.json(prod);
        } 
        catch (erro) {  
            return console.error("Erro no update : ", erro); 
        } 
    },   

    async GetOne(req,res) {
        try {
    
            const prod = await ModelProduto.findByPk(req.body.idProduto);
         
            return res.json(prod);
        } 
        catch (erro) {  
            return console.error("Erro ao obter : ", erro); 
        } 
    },
    
    async Delete(req,res) {
        try {
    
            const prod = await ModelProduto.findByPk(req.body.idProduto);
            await prod.destroy();
            return res.json(prod);
        } 
        catch (erro) {  
            return console.error("Erro ao deletar : ", erro); 
        } 
    }
}