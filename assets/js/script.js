(() => {
    const botoes = document.querySelectorAll('[data-option]');
    const resultado = document.querySelector('.resultado');

    document.querySelector('[data-clean=C]').addEventListener('click', () => {
        resultado.innerHTML = '';
    });
    document.querySelector('[data-clean=del]').addEventListener('click', () => {
        resultado.innerHTML = resultado.textContent.substring(0, resultado.textContent.length - 1);
    });

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const opcao = botao.dataset.option;
            resultado.innerHTML += opcao;
        });
    });

    document.querySelector('[data-resultado=calcular]').addEventListener('click', () => {
        resultado.innerHTML = eval(resultado.textContent);
    });
})
();