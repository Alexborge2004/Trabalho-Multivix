const ModelEmpresa = require('../models/empresa');

module.exports =
{
    async List(req,res) {
        try {
            const empresa = await ModelEmpresa.findAll();
            return res.json(empresa);
        } 
        catch (erro) {
            return console.error("Erro na Listagem : ", erro);
        }
    },

    async Create(req,res) {
        // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);
        try {
            const empresa = await ModelEmpresa.create(
                {
                    idEmpresa : req.body.idEmpresa,
                    razaoSocial : req.body.razaoSocial,
                    nomeFantasia : req.body.nomeFantasia,
                    telefone : req.body.telefone,
                    email : req.body.email,
                    cnpj : req.body.cnpj,
                    site : req.body.site,
                    dataCriacao : req.body.dataCriacao,
                    dataAtualizacao : null,
                }
            );
            return res.json(empresa);

        } 
        catch (erro) {  
            return console.error("Erro na criação : ", erro); 
        }     
    },

    async Update(req,res) {
        try {
                const emp = await ModelEmpresa.findByPk(req.body.idEmpresa);
                if (emp) {
                    emp.razaoSocial = req.body.razaoSocial,
                    emp.nomeFantasia = req.body.nomeFantasia,
                    emp.telefone = req.body.telefone,
                    emp.email = req.body.email,
                    emp.cnpj = req.body.cnpj,
                    emp.site = req.body.site,
                    emp.dataAtualizacao = req.body.dataAtualizacao,
                    await emp.save();
                }
                return res.json(emp);
        } 
        catch (erro) {  
            return console.error("Erro no update : ", erro); 
        } 
    },   

    async GetOne(req,res) {
        try {
    
            const emp = await ModelEmpresa.findByPk(req.body.idEmpresa);
         
            return res.json(emp);
        } 
        catch (erro) {  
            return console.error("Erro ao obter : ", erro); 
        } 
    },
    
    async Delete(req,res) {
        try {
    
            const emp = await ModelEmpresa.findByPk(req.body.idEmpresa);
            await emp.destroy();
            return res.json(emp);
        } 
        catch (erro) {  
            return console.error("Erro ao deletar : ", erro); 
        } 
    }
}