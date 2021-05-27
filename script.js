
var calcular = document.getElementById("calcular");

function imc (){
    var nome = document.getElementById("nome").value;
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    var resultado = document.getElementById("resultado");

    if (nome !== "" && altura !== "" && peso !== ""){
       const valorIMC = (peso / (altura * altura)).toFixed(1);

       resultado.textContent = valorIMC;

        let classificacao = "";

        if( valorIMC < 17){
            classificacao = "muito abaixo do peso";
        }else if ( valorIMC < 18.4){
            classificacao = "abaixo do peso";
        }else if ( valorIMC < 24.99){
            classificacao = "peso normal";
        }else if ( valorIMC < 29.99){
            classificacao = "acima do peso";
        }else if( valorIMC < 34.99){
            classificacao = "obesidade I";
        }else if ( valorIMC < 39.99){
            classificacao = "obesidade II (severa)";
        }else{
            classificacao = "obesidade III(móbida)";
        }

        resultado.textContent = nome+" seu IMC é "+valorIMC+" e você está "+ classificacao;

    }else{
        resultado.textContent = ("Preencha todos os campos")
    }
}
calcular.addEventListener("click", imc)
