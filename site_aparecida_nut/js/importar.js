var botaoImportar = document.getElementById('importar-pacientes');

botaoImportar.addEventListener('click',()=>{
    var xhr = new XMLHttpRequest();

    xhr.open('GET', "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener('load', ()=>{
        var erroAjax = document.getElementById('erro-ajax');
        
        if (xhr.status === 200){
            erroAjax.classList.add('invisivel');
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
    
            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            console.log(xhr.status);
            erroAjax.classList.remove('invisivel');
        }
        
    })

    xhr.send();
})