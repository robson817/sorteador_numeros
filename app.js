function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    while (quantidade > ate-de) {
        alert('A quantidade de números sorteador não pode ser maior que o intervalo. Verifique!');
        return;
    }

    let numero = obterNumeroAleatorio(de, ate);
    let sorteados = [];

    for (let index = 0; index < quantidade; index++) {
        numero = obterNumeroAleatorio(de, ate);
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        sorteados.push(numero)   ;
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`
    
    alterarStatusBotao();

    if (de >= ate) {
        alert('Por favor, adicione um valor inicial menor que o valor final que você queira sortear!')
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';
        document.getElementById('resultado').innerHTML = 'Números sorteados:  nenhum até agora';
        // return; Solução do instrutor, porém mesmo assim sorteia o valor e não apaga os campos escritos.
    }
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = 'Números sorteados:  nenhum até agora';
    alterarStatusBotao();
}

sorteados = [];

function geradorDeNumeros(min, max) {
    Math.floor(Math.random() * (max - min + 1)) + min;
}
















