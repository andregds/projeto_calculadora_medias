
/*Variavis Global*/
const form = document.getElementById('form-atividade')
const imgAprovado = `<img src="./imgs/aprovado.png">`;
const imgReprovado = `<img src="./imgs/reprovado.png">`;
const notaMinima = parseFloat(prompt("Digite a nota minima:"));

const atividades=[];
const notas=[];

const spanAprovado= '<span class="resultado Aprovado">Aprovado</span>';
const spanReprovado= '<span class="resultado Reprovado">Reprovado</span>';

let linhas=''; 

form.addEventListener('submit', function(e){

/*Remove o comportamento de atualizar a pagina ao clicar no submit do formulario*/
    e.preventDefault();


    /* chama as functions em sequencia */
    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();

})


function adicionaLinha(){

    /* capturando os campos do formulario */
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');


    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} ja foi inserida`)
    
    } else {
        

    /* adiciona as informações nos array */
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));


    let linha  = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += `<tr>`;

    linhas += linha;
}
    /*para testar se os parametros de entrada estão funcionado  */
    /*alert(`Atividade: ${inputNomeAtividade.value} - nota:${inputNotaAtividade.value}` );*/
}




function atualizaTabela(){
    
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}


function atualizaMediaFinal(){

    const mediaFinal=calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML=mediaFinal;
    document.getElementById('media-final-resultado').innerHTML=mediaFinal >= notaMinima ? spanAprovado : spanReprovado;


}

function calculaMediaFinal(){

    
    let somaDasNotas = 0;
    
    /*soma as notas*/
        for(let i = 0; i < notas.length; i++){
            somaDasNotas += notas[i];
        }
    
        return somaDasNotas / notas.length;

}