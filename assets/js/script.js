const btns = document.querySelectorAll('[data-option]');
const resultado = document.querySelector('.resultado');
// console.log(btn)

document.querySelector('[data-clean=C]').addEventListener('click', () => {
    console.log('apaga')
});
document.querySelector('[data-clean=del]').addEventListener('click', () => {
    console.log('delete')
});

btns.forEach(botao => {
    botao.addEventListener('click', () => {
        const opcao = botao.dataset.option;
        resultado.innerHTML += opcao;
    });

})
function total() {
    return resultado.innerHTML = eval(resultado.textContent);
}
document.querySelector('[data-resultado=calcular]').addEventListener('click', total);