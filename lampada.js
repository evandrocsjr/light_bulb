const t_on = document.getElementById('t-on')
const t_off = document.getElementById('t-off')
const lamp = document.getElementById('lamp')

function isBreak(){
    return lamp.src.indexOf('lampQuebrada') > -1
}

function turnOn(){
    if(!isBreak ()){
        lamp.setAttribute('src', './img/lampAcesa.png')
    }
}

function turnOff(){
    if(!isBreak ()){
        lamp.src = './img/lampNormal.png'
    }
}

function toBreak(){
    lamp.setAttribute('src', './img/lampQuebrada.png')
}

lamp.addEventListener('mouseover', turnOn)
lamp.addEventListener('mouseleave', turnOff)
lamp.addEventListener('dblclick', toBreak)
t_off.addEventListener('click', turnOff)
t_on.addEventListener('click', turnOn)

