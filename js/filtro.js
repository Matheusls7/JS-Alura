
var texFiltro = document.querySelector("#filtrarTabela");

texFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){
        for(var i=0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value,"i"); //expressão regular, faz uma busca no this.value "i" ignora maiusculo ou minusculo.
            if(!expressao.test(nome)){ // testa se o nome tem alguma coisa parecida com o this.value
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        }
    }else{
        for(var i=0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel"); 
        }
    }
}); 
