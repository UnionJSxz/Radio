window.onload = function() {
    // Nome da chave original
    let chaveOriginal = 'ngIdle.expiry';

    // Recuperar a string JSON do localStorage
    let str = localStorage.getItem(chaveOriginal);

    if (str !== null) {
        // Converter a string JSON em um objeto JavaScript
        let obj = JSON.parse(str);

        // Extrair a data original
        let dataOriginal = obj.time;

        // Verificar se a data está no formato esperado e modificar o mês para "05"
        let novaData = dataOriginal.replace(/-\d{2}(?=T)/, '-05');

        // Atualizar o objeto com a nova data
        obj.time = novaData;

        // Converter o objeto de volta para uma string JSON
        let novaStr = JSON.stringify(obj);

        // Remover a chave original
        localStorage.removeItem(chaveOriginal);

        // Criar a chave original novamente com o valor atualizado
        localStorage.setItem(chaveOriginal, novaStr);

        console.log('Chave atualizada:');

        // Alterar o título após 9 segundos
        setTimeout(() => {
            document.title = 'TOTVS Manufatura(Limited)';
            console.log('Título alterado para TOTVS Manufatura(Limited)');
        }, 9000); // 9000 milissegundos = 9 segundos
    } else {
        console.log('Chave não encontrada.');
    }
};