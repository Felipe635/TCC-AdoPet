var form = document.querySelector('#addForm');

var itemList = document.querySelector('#container');

let filter = document.getElementById('filter');

var texto = document.querySelector('.texto');

var texto2 = texto.innerText;
console.log(texto2);

//vincular evento para submeter o form

filter.addEventListener('keyup', buscarItems);


function buscarItems(e) {
    // Converte o texto digitado para minúsculo
    let text = e.target.value.toLowerCase();
    // Busca todos os itens
    let items = itemList.getElementsByClassName('box-js');
    // Converte os itens para array
    Array.from(items).forEach(function (item) {
    // Busca o primeiro item da lista
    let itemName = item.firstChild.textContent;
    // Busca o item na lista que começa com o mesmo texto digitado
    if (itemName.toLowerCase().indexOf(text) != -1) {
    item.style.display = 'block'; // exibe o item
    } else {
    item.style.display = 'none'; // oculta o item
    }
   });
 }
    
