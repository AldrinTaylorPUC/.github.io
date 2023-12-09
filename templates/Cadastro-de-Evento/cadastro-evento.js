import { initializeData, loadData, updateData } from "../../data/data.js";

initializeData();

loadComponent('header');
loadComponent('dropdown');
loadComponent('footer');

const button = document.querySelector('#button');
button.addEventListener('click', cadastrarEvento);

let convidados = [];

function cadastrarEvento() {
    const names = ["nome", "endereço", "data", "custo"];
    let eventos = loadData('eventos'), evento = {};

    for (let name of names) {
        evento[name] = document.querySelector(`input[name=${name}]`).value;
    }

    evento['convidados'] = convidados;

    eventos.push(evento);
    updateData('eventos', eventos);
    alert('Evento cadastrado com sucesso!')
    console.log('eventos')
};

const input_button = document.getElementById('input_button');
input_button.addEventListener('click', convidar);

function convidar() {  
    var nome = document.getElementById("nome_completo").value; // Pega o valor que o usuário está digitando dentro do input.
  
    if (nome.length === 0) {
        alert('Digite o nome do convidado!');
        return;
    }

    convidados.push(nome);
    recarregar_lista()
    console.log(convidados);
};

const input_button2 = document.getElementById('input_button2');
input_button2.addEventListener('click', remover);

function remover() {
    let nome = document.getElementById("nome_completo").value; // Pega o valor que o usuário está digitando dentro do input.

    if (nome.length === 0) {
        alert('Digite o nome do convidado!');
        return;
    }

    if(convidados.indexOf(nome) !== -1) {
        var stringToRemove = nome;

        var index = convidados.indexOf(nome);
        
        if (index !== -1) {
            // Remove the string from the array using splice
            convidados.splice(index, 1);
        }

        recarregar_lista()
    } else {
        alert('Convidado não pertence a lista de convidados!');
        return;
    }
    console.log(convidados);
};

function recarregar_lista() {

    let select = document.getElementById('lista_convidados');

    if (select) {
        // Remove all <li> elements from the <ul>
        while (select.firstChild) {
            select.removeChild(select.firstChild);
        }

        convidados.forEach((convidado) => {
            let option = document.createElement('option');
            option.innerText = convidado;
            option.value = convidado;
            select.appendChild(option);
        });
    }
}
