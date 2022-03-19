import { clean } from './limpaCampos.js';

export function erro(resultado) {
    if (resultado == 'Infinity' || resultado == 'NaN') {
        return clean();
    };
};

export function limiteDeCaracteres(digito) {
    if (digito.length == 12) {
        const resultado = document.querySelector('.h2');
        const limite = resultado.substring(11, 12);
        return limite;
    };
};