function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let listaSorteados = [];

    for (let index = 0; index < quantidade; index++) {
        let numeroSorteado = gerarNumeroAleatorio(de, ate);

        while (listaSorteados.includes(numeroSorteado)) {
            numeroSorteado = gerarNumeroAleatorio(de, ate);
        }
        listaSorteados.push(numeroSorteado);
        console.log(listaSorteados);
    }
    document.getElementById('resultado').innerHTML = `Numeros sorteados: ${listaSorteados}`
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function alterarStatusBotao() {
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado')
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = 'Números sorteados:  nenhum até agora';
    alterarStatusBotao();
}