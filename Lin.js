// Nome da chave original
let chaveOriginal = 'ngIdle.expiry';

// Recuperar a string JSON do localStorage
let str = localStorage.getItem(chaveOriginal);

if (str !== null) {
    // Converter a string JSON em um objeto JavaScript
    let obj = JSON.parse(str);

    // Usar uma expressão regular para substituir o valor do mês na data
    let dataOriginal = obj.time;
    let novaData = dataOriginal.replace(/-(\d{2})T/, (match, p1) => {
        // Substituir o valor do mês para "04"
        return `-04T${dataOriginal.split('T')[1]}`;
    });

    // Atualizar o objeto com a nova data
    obj.time = novaData;

    // Converter o objeto de volta para uma string JSON
    let novaStr = JSON.stringify(obj);

    // Recriar a chave original com o valor atualizado
    localStorage.setItem(chaveOriginal, novaStr);

    console.log('Chave atualizada');

    // Alterar o título após 9 segundos
    setTimeout(() => {
        document.title = 'TOTVS Manufatura(Limited)';
        console.log('Título alterado para TOTVS Manufatura(Limited)');
    }, 9000); // 9000 milissegundos = 9 segundos
} else {
    console.log('Chave não encontrada.');
}