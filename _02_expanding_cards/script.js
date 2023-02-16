const panels = document.querySelectorAll('.panel') /*Usamos querySelectorAll ya que debemos tener en cuenta que no solo tenemos una clase panel si no que lo aplicamos en diferentos contenedores */

console.log(panels); //Podemos ver una lista de nodos en la cual estan todos los panels
console.log(panels[1]); // Tambien podemos ver un panel especificos

//Ahora necesitamos recorrer nuestros panel para aplicar en todos nuestro efecto
panels.forEach((panel) => {
    // console.log(panel); // 1. De esta forma podemos ver todos nuestro panels
    panel.addEventListener('click', () => {
        // console.log(123); // 2. Con esto podemos escuchar atravez de un evento click nuestros panels
        removeActiveClases();
        panel.classList.add('active') //Ahora lo que queremos es que la clase active se agregue a todos los panels
    });
});

function removeActiveClases(){
    panels.forEach(panel => {
        panel.classList.remove('active'); //COn esto removemos todas las clases active de los panels
    });
}