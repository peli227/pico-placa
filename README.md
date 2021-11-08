El codigo se realizo en javascript, HTML y CSS
Para la placa del coche se determino un número de 3 digitos y los dias de la semana (de lunes a viernes) ya que sabado y domingo no se tiene pico y placa en la cuidad.

Archivo picoPLACA.HMTL:
Se sigue una serie de pasos habitual para una "pagina Web"
En el <head> tenemos el nombre de la pagina, links para el archivo CSS y librerias necesarias para manera el tema de los horas y minutos (monent)
En el <script> se tienen varios <div> para que la pagina se mantenga de forma horizontal, se encuentan los inputs para la placa, dia de la semana y la hora. 
Al final un boton para realizar la busqueda de la informacion y se tiene un <div> para mostrar si el coche puede estar o no en la carretera.


Archivo picoPLACA.js:
Con cada identificador (id) para la placa, dia de la semana y la hora se genero un evento para manipular cada elemento del DOOM y asi con la accion "click" 
generar una accion y desplegar la informacion necesaria. Despues se utilizo un condicionador SWITCH para generar cada caso segun el dia y la placa del coche.

