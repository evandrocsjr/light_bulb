const t_on = document.getElementById('t-on')
const t_off = document.getElementById('t-off')
const lamp = document.getElementById('lamp')

function ligar(){
    lamp.setAttribute('src', './img/lampAcesa.png')
}

function desligar(){
    lamp.setAttribute('src', './img/lampNormal.png')
}

function quebrar(){
    lamp.setAttribute('src', './img/lampQuebrada.png')
}

lamp.addEventListener('mouseover', ligar)
lamp.addEventListener('mouseleave', desligar)
lamp.addEventListener('dblclick', quebrar)
t_off.addEventListener('click', desligar)
t_on.addEventListener('click', ligar)

