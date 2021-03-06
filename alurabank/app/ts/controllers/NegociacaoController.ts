
class NegociacaoController
{

    private  _inputData : HTMLInputElement;
    private  _inputQuantidade : HTMLInputElement;
    private  _inputValor : HTMLInputElement;
    private  _negociacoes = new Negociacoes(); //funciona dessa forma resumida também;
    //private  _negociacoes : Negociacoes = new Negociacoes(); definir o tipo e instanciar 
    private _negociacoesView = new NegociacoesView('#negociacoesView');

      //Conversão do tipo muito generico para um bem especifico de forma implicita

    constructor()
    {
      this._inputData = <HTMLInputElement>document.querySelector('#data');
      this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
      this._inputValor = <HTMLInputElement>document.querySelector('#valor');
    }

    adiciona(event : Event)
    {
        event.preventDefault();
       
        //converter as string para o respectivo tipo esperado pelo constructor() de Negociacao.

        const negociacao = new Negociacao
            (
                     new Date(this._inputData.value.replace(/-/g,',')),
                     parseInt(this._inputQuantidade.value),
                     parseFloat(this._inputValor.value)
            );

            this._negociacoes.adiciona(negociacao);

            this._negociacoesView.update(this._negociacoes);

           /*
            //console.log(this._negociacoes.paraArray()); exibir tudo de uma vez

            this._negociacoes.paraArray().length = 0; //apagar todos os elementos do array 
       
                this._negociacoes.paraArray().forEach(negociacao => {
                console.log(negociacao.data);
                console.log(negociacao.quantidade);
                console.log(negociacao.valor);
            });
            */
    }

}