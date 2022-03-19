import { clean } from './limpaCampos.js';

export function erroDeCalculo (resultado) {
    if (resultado == 'Infinity' || resultado == 'NaN' || resultado == 'enter a value...') {
        return clean();
    };
};
export function erroNaN (resultado) {
    if(resultado == 'NaN') {
        const resultado = document.querySelector('.h2');
        resultado.innerHTML = 'Infinity';
    };
}
export function erroSemDigito (resultado) {
    if(resultado == 'undefined') {
        const resultado = document.querySelector('.h2');
        resultado.innerHTML = 'enter a value...';
    };
};
export function limiteDeCaracteres(digito) {
    if (digito.length == 12) {
        const resultado = document.querySelector('.h2');
        const limite = resultado.substring(11, 12);
        return limite;
    };
};