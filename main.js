document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault()
    
    const campoA = Number(document.getElementById('ca').value)
    const campoB = Number(document.getElementById('cb').value)
    const resAcerto = document.getElementById('acerto')
    const resErro = document.getElementById('erro')

    if (campoB > campoA) {
        resAcerto.style.display = 'block'
        resErro.style.display = 'none'
        resAcerto.innerHTML = `Parabéns! Números válidos! <br> Valor do campo B (<b>${campoB}</b>) é maior que o campo A (<b>${campoA}</b>)`
        document.forms['formulario'].reset()
    } else {
        resAcerto.style.display = 'none'
        resErro.style.display = 'block'
        resErro.innerHTML = `Tente novamente! <br> Valor do campo <b>B</b> deve ser maior do que o campo <b>A</b>`
        document.forms['formulario'].reset()
    }
})