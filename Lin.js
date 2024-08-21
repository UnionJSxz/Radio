// Nome da chave no localStorage
let chave = 'ngIdle.expiry';

// Recuperar a string JSON do localStorage
let str = localStorage.getItem(chave);

if (str !== null) {
    // Copiar o valor da chave
    let copiaStr = str;

    // Remover a chave original do localStorage
    localStorage.removeItem(chave);

    // Converter a string JSON copiada em um objeto JavaScript
    let obj = JSON.parse(copiaStr);

    // Modificar o valor "05" para "04" no campo 'time'
    obj.time = obj.time.replace("05", "04");

    // Converter o objeto de volta para uma string JSON
    let novaStr = JSON.stringify(obj);

    // Inserir a nova string JSON com o valor atualizado no localStorage
    localStorage.setItem(chave, novaStr);

    console.log('Chave copiada, removida e recriada com sucesso');
} else {
    console.log('Chave não encontrada');
}