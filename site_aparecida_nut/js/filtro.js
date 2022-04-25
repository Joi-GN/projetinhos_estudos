var campoFiltro = document.querySelector("#filtro-tabela");

campoFiltro.addEventListener('input', function () {

    var pacientes = document.querySelectorAll('.paciente');

    if (this.value.length > 0) {
        for (let i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var nomePaciente = paciente.querySelector('.info-nome').textContent;

            var busca = new RegExp(this.value, "i");

            if (!busca.test(nomePaciente)) { //utilizando o método de expressão regular
                paciente.classList.add('invisivel');
            } else {
                paciente.classList.remove('invisivel');
            }
        }
    } else {
        for (let i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove('invisivel');
        }
    }
})

//utilizando o método substring 
// if (!(this.value == nomePaciente.substring(0, this.value.length))){


