function inserir(num){
    var numero = document.querySelector('div.res').innerHTML;
    document.querySelector('div.res').innerHTML = numero + num;   
}

function back(){
    var backspace = document.querySelector('div.res').innerHTML;
    document.querySelector('div.res').innerHTML = backspace.substring(0, backspace.length -1);
}

function limpar(){
    document.querySelector('div.res').innerHTML = "";
}

function calcular(){
    var resultado = document.querySelector('div.res').innerHTML;

    if(resultado){
        document.querySelector('div.res').innerHTML = eval(resultado);
    } else {
        document.querySelector('div.res').innerHTML = 'Insira o números... (Aperte C)';
    }
}

