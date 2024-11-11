function fecharAcess(){
    const caixaAberta = document.getElementById('container_acess_aberto')
    const caixaFechada = document.getElementById('container_acess')

    caixaAberta.style.display = 'none'
    caixaFechada.style.display = 'flex'
}

function abrirAcess(){
    const caixaAberta = document.getElementById('container_acess_aberto')
    const caixaFechada = document.getElementById('container_acess')

    caixaAberta.style.display = 'flex'
    caixaFechada.style.display = 'none'
}


function aumentarLetra(tamanho) {
    let elementos = document.querySelectorAll('body, h1, h2, h3, p, li, a'); // Seleciona os elementos que deseja
    elementos.forEach((elemento) => {
        let fontSize = parseFloat(window.getComputedStyle(elemento).fontSize); // Converte para número
        elemento.style.fontSize = `${fontSize + tamanho}px`; // Altera o tamanho da fonte
    });
}

function diminuirLetra(tamanho) {
    // Seleciona os elementos que você deseja afetar (body, h1, h2, h3, p, li, a, etc.)
    let elementos = document.querySelectorAll('body, h1, h2, h3, p, li, a');
    // Para cada um desses elementos, diminua o tamanho da fonte
    elementos.forEach((elemento) => {
        let fontSize = parseFloat(window.getComputedStyle(elemento).fontSize); // Obtém o tamanho atual da fonte
        elemento.style.fontSize = `${fontSize + tamanho}px`; // Diminui o tamanho da fonte
    });
}

// Função para aumentar o espaçamento entre linhas de forma controlada
function aumentarEspacoLinhas() {
    const paragrafos = document.querySelectorAll('p'); // Seleciona todos os <p> na página
    paragrafos.forEach(paragrafo => {
        let currentLineHeight = parseFloat(window.getComputedStyle(paragrafo).lineHeight); // Pega o line-height atual
        paragrafo.style.lineHeight = `${currentLineHeight + 1}px`; // Aumenta 1px no espaçamento
    });
}

// Função para diminuir o espaçamento entre linhas de forma controlada
function diminuirEspacoLinhas() {
    const paragrafos = document.querySelectorAll('p'); // Seleciona todos os <p> na página
    paragrafos.forEach(paragrafo => {
        let currentLineHeight = parseFloat(window.getComputedStyle(paragrafo).lineHeight); // Pega o line-height atual
        if (currentLineHeight > 18) { // Garantir que o line-height não fique muito pequeno
            paragrafo.style.lineHeight = `${currentLineHeight - 1}px`; // Diminui 1px no espaçamento
        }
    });
}




function modoEscuro(){

}