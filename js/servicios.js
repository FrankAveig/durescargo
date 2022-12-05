const servicio1 = document.getElementById('icono1')
const servicio2 = document.getElementById('icono2')
const servicio3 = document.getElementById('icono3')
const servicio4 = document.getElementById('icono4')
const servicio5 = document.getElementById('icono5')
const servicio6 = document.getElementById('icono6')
const servicio7 = document.getElementById('icono7')
const servicio8 = document.getElementById('icono8')
const titulo = document.getElementById('titulo')
const imagen = document.getElementById('imagen')
const servicio = document.getElementById('servicio')


servicio1.addEventListener('mouseover',(e)=>{
  cambio(1)
})
servicio2.addEventListener('mouseover',(e)=>{
  cambio(2)
})
servicio3.addEventListener('mouseover',(e)=>{
  cambio(3)
})
servicio4.addEventListener('mouseover',(e)=>{
  cambio(4)
})
servicio5.addEventListener('mouseover',(e)=>{
  cambio(5)
})
servicio6.addEventListener('mouseover',(e)=>{
  cambio(6)
})
servicio7.addEventListener('mouseover',(e)=>{
  cambio(7)
})
servicio8.addEventListener('mouseover',(e)=>{
  cambio(8)
})



servicio1.addEventListener('click',(e)=>{
  cambio(1)
})
servicio2.addEventListener('click',(e)=>{
  cambio(2)
})
servicio3.addEventListener('click',(e)=>{
  cambio(3)
})
servicio4.addEventListener('click',(e)=>{
  cambio(4)
})
servicio5.addEventListener('click',(e)=>{
  cambio(5)
})
servicio6.addEventListener('click',(e)=>{
  cambio(6)
})
servicio7.addEventListener('click',(e)=>{
  cambio(7)
})
servicio8.addEventListener('click',(e)=>{
  cambio(8)
})





const cambio = (nombre)=>{
  switch (nombre){
    case 1: 
    titulo.innerHTML = '01'
    imagen.src= '../images/camion.png'
    servicio.innerHTML = 'Coordinación en orígen para manejo de cargas segun ley de Incortem vigente.'
    break;
    case 2: 
    titulo.innerHTML = '02'
    imagen.src= '../images/camion.png'
    servicio.innerHTML = 'Inspección, inventario, re-empaque y embalaje de cargas.'
    break;
    case 3: 
    titulo.innerHTML = '03'
    servicio.innerHTML = 'Almacenamiento de carga orígen.'

    break;
    case 4: 
    titulo.innerHTML = '04'
    servicio.innerHTML = 'Transporte internacional desde y hacia cualquier parte del mundo: Aéreo, marítimo, carga suelta y contenedor.'

    break;
    case 5: 
    titulo.innerHTML = '05'
    servicio.innerHTML = 'Consolidación y desconsolidación de carga.'

    break;
    case 6: 
    titulo.innerHTML = '06'
    servicio.innerHTML = 'Transporte y manejo de carga proyecto.'

    break;
    case 7: 
    titulo.innerHTML = '07'
    servicio.innerHTML = 'Trámites locales y en orígen para exportación e importación.'

    break;
    case 8: 
    titulo.innerHTML = '08'
    servicio.innerHTML = 'Despachos de Aduana.'

    break;
  }
}