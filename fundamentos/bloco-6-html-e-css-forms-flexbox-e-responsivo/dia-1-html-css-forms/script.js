const arrayTextoEstado = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato rosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];

function createStateOptions(array) {
    for (let index = 0; index < arrayTextoEstado.length; index +=1) {
        const stateSlect = document.getElementById('est');
        const stateOptions = document.createElement('option');
        stateSlect.appendChild(stateOptions);
        stateOptions.innerText = arrayTextoEstado[index];
    }
}
createStateOptions(arrayTextoEstado);
