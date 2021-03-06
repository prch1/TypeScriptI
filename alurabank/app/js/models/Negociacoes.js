class Negociacoes {
    constructor() {
        //forma de declarar o array
        // private _negociacoes : Array<Negociacao> =[]; 
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        //antes de usar programação defensiva
        //return this._negociacoes;
        return [].concat(this._negociacoes); //transferindo dados para um clone do array negociacoes
    }
}
