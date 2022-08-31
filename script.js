// VARIÁVEIS DE CONTROLE
let valor_maximo = 0
let valor_minimo = 0
let qtd_vezes = 0
let chute = 0

// ESCONDER INICIALMENTE A TELA DE CHUTE
document.getElementById("telaChute").style.display = "none"

function comecar() {
    // TROCA A VISIBILIDADE
    document.getElementById("configuracao").style.display = "none"
    document.getElementById("telaChute").style.display = "block"

    // PEGAR O VALOR MAXIMO DO USUARIO
    valor_maximo = document.getElementById("valor_maximo").value;

    // ESTRATÉGIA DE CHUTE
    //chutarNumeroBruto()
    //chutarNumeroAleatorio()
    chutarNumeroInteligente()
}

function acertou() {
    // PINTAR O FUNDO DA PAGINA DE VERDE
    document.body.style.backgroundColor = "green"
    // PINTAR O FUNDO DA CAIXA DE VERDE
    document.getElementById("telaChute").style.backgroundColor = "green"
    // ESCONDER O CONTADOR DE CHUTES
    document.getElementById("h2_qtd").style.display = "none"
}

function chutarNumeroBruto() {
    // REALIZANDO UM CHUTE INCREMENTAL
    chute++;
    // APRESENTAR O NOVO VALOR DE CHUTE
    document.getElementById("h1_chute").innerText = chute;
    // INCREMENTAR TENTATIVA
    incrementarTentativa()
}

function chutarNumeroAleatorio() {
    // REALIZANDO UM CHUTE ALEATORIO
    chute = Math.round(Math.random(valor_maximo) * 100)
    // APRESENTAR O NOVO VALOR DE CHUTE
    document.getElementById("h1_chute").innerText = chute;
    // INCREMENTAR TENTATIVA
    incrementarTentativa()
}

function chutarNumeroInteligente() {
    // REALIZANDO UM CHUTE INTELIGENTE
    chute = parseInt( valor_minimo + (valor_maximo - valor_minimo) / 2 );
    // APRESENTAR O NOVO VALOR DE CHUTE
    document.getElementById("h1_chute").innerText = chute
    // INCREMENTAR TENTATIVA
    incrementarTentativa()
}

function incrementarTentativa(){
    // INCREMENTAR TENTATIVA
    qtd_vezes++;
    // APRESENTAR O NOVO VALOR DE TENTATIVAS
    document.getElementById("h2_qtd").innerText = "N° Tentativas: " + qtd_vezes
}

function menor(){
    // DEFINIR CHUTE COMO O NOVO VALOR MINIMO
    valor_minimo = chute
    // REALIZAR NOVO CHUTE
    chutarNumeroInteligente()
}

function maior(){
    // DEFINIR CHUTE COMO O NOVO VALOR MAXIMO
    valor_maximo = chute
    // REALIZAR NOVO CHUTE
    chutarNumeroInteligente()
}