
var botaoAdd = document.querySelector("#adicionar-paciente");
botaoAdd.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = ObterFormulario(form);
    var pacienteTr = CriaTr(paciente);
    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagemErros(erros);
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset(); // limpa o formulario
    var uldeerro = document.querySelector("#uldeerro");

    uldeerro.innerHTML = "";


});

function ObterFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }
    return paciente;
}
function CriaTr(paciente){
    var pacienteTr = document.createElement("tr"); // Cia uma tag no HTML
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(MontaTd(paciente.nome, "info-nome"));//.appendChild adciona define um pai para uma tag
    pacienteTr.appendChild(MontaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(MontaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(MontaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(MontaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function MontaTd(dado, classe){
    var td = document.createElement("td"); 
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){
    var erros = [];

    if(!validaPeso(paciente.peso)){
        erros.push(" Peso é Inválido!");
    }
    if(!validaAltura(paciente.altura)){
        erros.push(" Altura é Inválida!");
    }
    if(paciente.nome.length == 0){
        erros.push("Nome não pode ser em baranco!")
    }
    if(paciente.gordura.length == 0){
        erros.push("Gordura não pode ser em baranco!")
    }
    if(paciente.peso.length == 0){
        erros.push("Peso não pode ser em baranco!")
    }
    if(paciente.altura.length == 0){
        erros.push("Altura não pode ser em baranco!")
    }
    return erros;
}
function exibeMensagemErros(erros){
    var ul = document.querySelector("#uldeerro");
    ul.innerHTML = "";
    erros.forEach(function(errado){
        var li = document.createElement("li");
        li.textContent = errado;
        ul.appendChild(li);
    });
}