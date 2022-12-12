const form = document.getElementById('formulario');
let linhas = '';

form.addEventListener ('submit',function(e){
    e.preventDefault()

    const inputContato = document.getElementById('contato');
    const inputTelefone = document.getElementById('telefone');
    const inputEmail = document.getElementById('email');
    const inputCidade = document.getElementById('cidade');
    const inputEndereço  = document.getElementById('endereço');

    let linha = '<tr>';
    linha += `<td>${inputContato.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += `<td>${inputEmail.value}</td>`;
    linha += `<td>${inputCidade .value}</td>`;
    linha += `<td>${inputEndereço.value}</td>`;
    linha += '</tr>';

    linhas += linha

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputContato.value = '';
    inputTelefone.value = '';
    inputEmail.value = '';
    inputCidade.value = '';
    inputEndereço.value = '';
})