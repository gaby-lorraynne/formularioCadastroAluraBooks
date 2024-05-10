// var consultaCep = fetch('https://viacep.com.br/ws/01001000/json/')
// .then(resposta => resposta.json())
// .then(r => {
//     if(r.erro){
//         throw Error('Esse cep não existe!')
//     }else{
//         console.log(r)
//     }
// })
// .catch(erro => console.log(erro))
// .finally(mensagem => console.log('Processamento concluído'));

// console.log(consultaCep);
// --------------------------------------------------------------------------------------------------------------------------------------

// Fazendo com código com função assincrona
async function buscaEndereco ( cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try { 
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCepConvertida = await consultaCep.json();
        if(consultaCep.erro){
            throw Error('CEP não existente!');
        }

        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');

        cidade.value = consultaCepConvertida.localidade;
        logradouro.value = consultaCepConvertida.logradouro;
        estado.value = consultaCepConvertida.uf;

        console.log(consultaCepConvertida);
        return consultaCepConvertida;
    }catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
        console.log(erro)
    }
}

// "focusout" é quando eu clico no campo cep para preencher e ele só vai ser ativo quando eu clicar fora do campo, tipo: cliquei para preencher um campo, quando cliquei fora desse campo de preenchimento ele ativa o evento.

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

