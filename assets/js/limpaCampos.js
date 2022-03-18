export {del};
export {clean};

function del () {
    const resultado = document.querySelector('.h2');
    const del = resultado.innerHTML = resultado.textContent.substring(0, resultado.textContent.length - 1);
    return del;
};

function clean () {
    const resultado = document.querySelector('.h2');
    return resultado.innerHTML = '';
};