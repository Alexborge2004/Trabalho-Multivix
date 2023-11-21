const ModelGrupoGeradores = require('../models/grupogeradores');

module.exports =
{
    async List(req,res) {
        try {
            const grupogeradores = await ModelGrupoGeradores.findAll();
            return res.json(grupogeradores);
        } 
        catch (erro) {
            return console.error("Erro na Listagem : ", erro);
        }
    },

    async Create(req,res) {
        try {
            const grupogeradores = await ModelGrupoGeradores.create(
                {
                    idGrupoGerador : req.body.idGrupoGerador,
                    empresa : req.body.empresa,
                    fabricante : req.body.fabricante,
                    gPotencia : req.body.gPotencia,
                    nSerie : req.body.nSerie,
                    modelo : req.body.modelo,
                    filtro : req.body.filtro,
                    fCompativeis : req.body.fCompativeis,
                    mangueira : req.body.mangueira,
                    mCompativeis : req.body.mCompativeis,
                    tipoOper : req.body.tipoOper,
                    fabMotor : req.body.fabMotor,
                    serie : req.body.serie,
                    mmodelo : req.body.mmodelo,
                    mPotencia : req.body.mPotencia,
                    dataCriacao : req.body.dataCriacao,
                    dataAtualizacao : null,
                }
            );
            return res.json(grupogeradores);

        } 
        catch (erro) {  
            return console.error("Erro no create : ", erro); 
        }     
    },

    async Update(req,res) {
        try {
                const grug = await ModelGrupoGeradores.findByPk(req.body.idGrupoGerador);
                if (grug) {
                    grug.empresa = req.body.empresa,
                    grug.fabricante = req.body.fabricante,
                    grug.gPotencia = req.body.gPotencia,
                    grug.nSerie = req.body.nSerie,
                    grug.modelo = req.body.modelo,
                    grug.filtro = req.body.filtro,
                    grug.fCompativeis = req.body.fCompativeis,
                    grug.mangueira = req.body.mangueira,
                    grug.mCompativeis = req.body.mCompativeis,
                    grug.tipoOper = req.body.tipoOper,
                    grug.fabMotor = req.body.fabMotor,
                    grug.serie = req.body.serie,
                    grug.mmodelo = req.body.mmodelo,
                    grug.mPotencia = req.body.mPotencia,
                    grug.dataAtualizacao = req.body.dataAtualizacao,
                    await grug.save();
                }
                return res.json(grug);
        } 
        catch (erro) {  
            return console.error("Erro na update : ", erro); 
        } 
    },   

    async GetOne(req,res) {
        try {
    
            const grug = await ModelGrupoGeradores.findByPk(req.body.idGrupoGerador);
         
            return res.json(grug);
        } 
        catch (erro) {  
            return console.error("Erro ao obter : ", erro); 
        } 
    },
    
    async Delete(req,res) {
        try {
    
            const grug = await ModelGrupoGeradores.findByPk(req.body.idGrupoGerador);
            await grug.destroy();
            return res.json(grug);
        } 
        catch (erro) {  
            return console.error("Erro ao deletar : ", erro); 
        } 
    }
}