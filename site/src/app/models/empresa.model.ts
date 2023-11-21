export type Empresa = {
    idEmpresa?: number,  
    razaoSocial: string,
    nomeFantasia: string,
    telefone: string,
    email: string,
    cnpj: string,
    site: string,
    dataCriacao?: string,
    dataAtualizacao?: string
}

export type EmpresaCadastrar = Omit<Empresa, 'idEmpresa'>;