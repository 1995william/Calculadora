import {del,clean} from './limpaCampos.js';
import {erroDeCalculo,limiteDeCaracteres,erroSemDigito,erroNaN} from './erros.js';
(() => {
    const resultado = document.querySelector('.h2');
    // evento que identifica o botao Clean
    document.querySelector('[data-clean=C]').addEventListener('click',clean);
    
    // evento que identifica o botao Del
    document.querySelector('[data-clean=del]').addEventListener('click',del);
    
    // evento que identifica os dígito numérico e operação
    const botoes = document.querySelectorAll('[data-option]');
    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            erroDeCalculo(resultado.textContent);
            limiteDeCaracteres(resultado.textContent);
            const digito = botao.dataset.option;
            resultado.innerHTML += digito;
        });
    });

    // evento que executa o resultado da operação
    document.querySelector('[data-resultado=calcular]').addEventListener('click', () => {
        try {
            resultado.innerHTML = eval(resultado.textContent);
            erroSemDigito(resultado.textContent);
            erroNaN(resultado.textContent);
        } catch (e) {
            erroSemDigito(resultado.textContent);
        }
    });
})
();