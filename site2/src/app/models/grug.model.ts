export type GruG = {
    idgrupogeradores? : number,
    empresa : string,
    fabricante : string,
    gPotencia : number,
    nSerie : String,
    modelo : string,
    filtro : string,
    fCompativeis : number,
    mangueira : string,
    mCompativeis : number,
    tipoOper : number,
    fabMotor : string,
    serie : string,
    mmodelo : string,
    mPotencia : string,
    dataCriacao: string,
    dataAtualizacao?: string
}

export type GruGCadastrar = Omit<GruG, 'idgrupogeradores'>;