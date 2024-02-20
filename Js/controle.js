
function teste(){
    alert('teste');
}

function addTarefa(){
    let input = document.getElementById("inputTarefa");
    let btnAdd = document.getElementById("btn-add");
    let main = document.getElementById("areaLista");
    let ValorInput = input.value;

    if((ValorInput !== "") && (ValorInput !== null) && (ValorInput !== undefined)){
        let NovoItem = 
            `<div class="item">
                <div class="item-icone">
                    <img class="img-icon" src="icons/verificar.png">
                </div>
                <div class="item-nome">
                    teste de tarefa
                </div>
                <div class="item-botão">
                        <button class="delete">Deletar</button>
                </div>
            </div>`; 
        main.innerHTML += NovoItem;
    }
}
console.log(testando)