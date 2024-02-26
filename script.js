// [].push para adicionar um elemento em um array
// [].pop para remover
let res = document.querySelector('div#res');

function Inserir(valor){
    
    const ultimo = res.innerHTML.slice(-1);
    if(Operador(ultimo) && Operador(valor)){
        // Se os dois forem operadores, substitui um pelo outro;
        res.innerHTML = res.innerHTML.slice(0, -1) + valor;
    } else {
        res.innerHTML += valor;
    }
    
}
function Operador(op){
    return ['+', '-', '*', '/', '%', '.'].includes(op);
}

function result(){
    res.innerHTML = eval(res.innerHTML);
}

function limpar(){
    res.innerHTML = '';
}

function voltar(){
    let resultado = res.innerHTML;
    res.innerHTML = resultado.substring(0, resultado.length -1);
}