let contador = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

// ADICIONAR ITEM Á LISTA
function addTarefa(){
    let ValorInput = input.value;
    if((ValorInput !== "") && (ValorInput !== null) && (ValorInput !== undefined)){
        ++contador;
        let NovoItem = 
        `<div class="item" id="${contador}">
            <div onclick="marcarTarefa(${contador}) class="item-icone">
                <img class="img-icon" src="icons/verificar.png">
            </div>
            
            <div onclick="marcarTarefa(${contador}) class="item-nome">
                ${ValorInput}
            </div>

            <div class="item-botão">
                <button onclick="deletar(${contador})" class="delete">Deletar</button>
            </div>
        </div>`; 
        main.innerHTML += NovoItem;
        input.value = "";
        input.focus();
    }
}

// DELETAR ITEM DA LISTA
function deletar(id){
    let tarefa = document.getElementById(id);
    tarefa.remove();
}

// PRESS ENTER PARA ADD
input.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
})
