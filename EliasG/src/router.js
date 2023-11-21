const express = require('express');
const controllerProduto = require('./controllers/ProdutoController');
const controllerEmpresa = require('./controllers/EmpresaController');
const controllerEndereco = require('./controllers/EnderecoController');
const controllerGrupoGeradores = require('./controllers/GrupoGeradoresController');

const routers = express.Router();

//Rotas Produto
routers.get('/api/ListarProdutos',controllerProduto.List);
routers.post('/api/AdicionarProduto',controllerProduto.Create);
routers.post('/api/UpdateProduto',controllerProduto.Update);
routers.get('/api/GetProdutoId',controllerProduto.GetOne);
routers.post('/api/DeletarProduto',controllerProduto.Delete);

//Rotas Empresa
routers.get('/api/ListarEmpresas',controllerEmpresa.List);
routers.post('/api/AdicionarEmpresa',controllerEmpresa.Create);
routers.post('/api/UpdateEmpresa',controllerEmpresa.Update);
routers.get('/api/GetEmpresaId',controllerEmpresa.GetOne);
routers.post('/api/DeletarEmpresa',controllerEmpresa.Delete);

//Rotas Endereco
routers.get('/api/ListarEnderecos',controllerEndereco.List);
routers.post('/api/AdicionarEndereco',controllerEndereco.Create);
routers.post('/api/UpdateEndereco',controllerEndereco.Update);
routers.get('/api/GetEnderecoId',controllerEndereco.GetOne);
routers.post('/api/DeletarEndereco',controllerEndereco.Delete);

//Rotas Produto
routers.get('/api/ListarGrupoGeradores',controllerGrupoGeradores.List);
routers.post('/api/AdicionarGrupoGeradores',controllerGrupoGeradores.Create);
routers.post('/api/UpdateGrupoGeradores',controllerGrupoGeradores.Update);
routers.get('/api/GetGrupoGeradoresId',controllerGrupoGeradores.GetOne);
routers.post('/api/DeletarGrupoGeradores',controllerGrupoGeradores.Delete);

module.exports = routers;