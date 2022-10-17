function validaPeso(peso){
    if(peso > 0 && peso < 300){
        return true;
    }
    else{
        return false;
    }
}
function validaAltura(altura){
    if(altura > 0 && altura <= 3.00){
        return true;
    }
    else{
        return false;
    }
}
function calculaIMC(peso, altura){
    var imc = 0;
    imc = peso / (altura*altura);
    return imc.toFixed(2); // .toFixed(2) limita o número de casas decimais em 2
}

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");


for(var i = 0; i<pacientes.length; i++){ // .length faz percorrer ate o final da lista pacientes
    var paciente = pacientes[i];
    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;
    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;
    var tdimc = paciente.querySelector(".info-imc");

    var valtura = validaAltura(altura);
    var vpeso = validaPeso(peso);

    if(!validaPeso){
        console.log("Peso Inválido!");
        vpeso = false;
        tdpeso.textContent = "Peso errado!"
    }
    if(!validaAltura){
        console.log("Altura Inválida!");
        valtura = false;
        tdaltura.textContent = "Altura errada!"
    }
    if(vpeso && valtura){
        var imc = calculaIMC(peso,altura);
        tdimc.textContent = imc;
    }else{
        tdimc.textContent = "Informação errada!";
        paciente.classList.add("pacienteInvalido");
    }
}
