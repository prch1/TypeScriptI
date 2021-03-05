
class NegociacaoController
{

    private  _inputData : HTMLInputElement;
    private  _inputQuantidade : HTMLInputElement;
    private  _inputValor : HTMLInputElement;

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

            console.log(negociacao);
    }


}