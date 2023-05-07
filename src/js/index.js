/* Objetivo
Quando clicarmos na aba,temos que mostrar o conteudo da aba que foi clicada pelo usuário e esconder o conteúdo da aba anterior.

- passo 1 - Dar um jeito de pegar os elementos que representa as abas do HTML.

- passo 2 - dar um jeito de indentificar o clique no elemento aba

- passo 3 - quando o usuario clicar, desmarcas a aba selecionada

- passo 4 - marcar a aba clicada como selecionado

- passo 5 - esconder o conteudo anterior

-passo 6 - mostrar o conteudo da aba selecionada 

*/

//passo 1 - Dar um jeito de pegar os elementos que representa as abas do HTML.
//buscar no document todos os elementos com a classe aba
//const para criar uma variavel constante com o nome abas
const abas = document.querySelectorAll(".aba");


abas.forEach(aba => {
    // passo 2 - dar um jeito de indentificar o clique no elemento aba
    aba.addEventListener("click", function(){

        //para nao executar o codigo repeditamente de forma desnecessária
        if(aba.classList.contains("selecionado")){
            return;
        }
        

        selecionarAba(aba)

       mostrarInformacoesDaAba(aba)


    });
});

function selecionarAba(aba){
    //passo 3 - quando o usuario clicar, desmarcas a aba selecionada
    const abaSelecionada =document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado")

    //passo 4 - marcar a aba clicada como selecionado
    aba.classList.add("selecionado")

}

function mostrarInformacoesDaAba(aba){
     //passo 5 - esconder o conteudo anterior
     const informacaoSelecionada = document.querySelector(".informacao.selecionado");
     informacaoSelecionada.classList.remove
     ("selecionado");

     //passo 6 - mostrar o conteudo da aba selecionada 
     const idDoElementoDeInforcoesDaAba =`informacao-${aba.id}`

     const informacaoASerMostrada =document.getElementById(idDoElementoDeInforcoesDaAba)
     informacaoASerMostrada.classList.add("selecionado");
     
     
}
