const envia =document.querySelector('#form');
const email = envia.querySelector('#name');
const numero = envia.querySelector("#tel");
const mensg = envia.querySelector('#mensg');

console.log(email)

envia.addEventListener('submit', Clicar)

function Clicar(e){
    e.preventDefault();

    if(email.value === "" ||numero.value === "" || mensg.value === ""){
        alert('Por favor, preencha os dados.')
    }else{
		alert('Mensagem enviada com sucesso!');
		email.value = "";
		numero.value = "";
		mensg.value = "";
	}

}


