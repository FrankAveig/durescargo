const mapa = document.getElementById('mapa-google')
const mapa2 = document.getElementById('mapa-google2')
const miami = document.getElementById('miami')
const guayaquil = document.getElementById('guayaquil')

miami.addEventListener('click',(e)=>{
  guayaquil.classList.remove("selected")
  miami.classList.add("selected")
    mapa2.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.04377524592!2d-80.37461598565797!3d25.868036610505865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bc86a4973f49%3A0x1a764b3fe6af100b!2s10301%20NW%20108th%20Ave%20Suite%20%232%2C%20Medley%2C%20FL%2033178%2C%20EE.%20UU.!5e0!3m2!1ses!2sec!4v1669698466949!5m2!1ses!2sec"'
    mapa.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.04377524592!2d-80.37461598565797!3d25.868036610505865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bc86a4973f49%3A0x1a764b3fe6af100b!2s10301%20NW%20108th%20Ave%20Suite%20%232%2C%20Medley%2C%20FL%2033178%2C%20EE.%20UU.!5e0!3m2!1ses!2sec!4v1669698466949!5m2!1ses!2sec"'
 

})
guayaquil.addEventListener('click',(e)=>{
  guayaquil.classList.add("selected")
  miami.classList.remove("selected")
    mapa2.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.98833264102!2d-79.89480138589424!3d-2.1581370378056706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6da30aaa40cb%3A0xdae68881d385e38f!2sCalle%2013E%20NE%20%26%20Av.%20Juan%20Tanca%20Marengo%2C%20Guayaquil%20090513!5e0!3m2!1ses!2sec!4v1668196904773!5m2!1ses!2sec"'
    mapa.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.98833264102!2d-79.89480138589424!3d-2.1581370378056706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6da30aaa40cb%3A0xdae68881d385e38f!2sCalle%2013E%20NE%20%26%20Av.%20Juan%20Tanca%20Marengo%2C%20Guayaquil%20090513!5e0!3m2!1ses!2sec!4v1668196904773!5m2!1ses!2sec"'

})