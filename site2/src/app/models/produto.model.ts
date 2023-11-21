export type Produto = {
    idProduto?: number,  
    nomeProduto: string,
    codInterno: number,
    codigo: number,
    quantidade: number,
    valor: number,
    observacoes: string,
    dataCriacao?: string,
    dataAtualizacao?: string
}

export type ProdutoCadastrar = Omit<Produto, 'idProduto'>;