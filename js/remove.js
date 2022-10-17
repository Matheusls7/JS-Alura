var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("table");

    tabela.addEventListener("dblclick", function(event){
        event.target.parentNode.classList.add("transparencia");  // event.target seleciona o alvo que foi clicado
        
        setTimeout(function(){
            event.target.parentNode.remove(); // .parentNode.remove seleciona o pai de quem foi clicado e apaga
        },500);  // setTimeout ,500 segura o JS por 500ms.
        
    });



