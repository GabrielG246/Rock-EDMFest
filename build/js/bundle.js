document.addEventListener('DOMContentLoaded', function(){
    scrollNav();

    navegacionFija();
})

function navegacionFija(){
    const barra= document.querySelector('.header')

    //Registrar el Intersector Observer//
    const observer= new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting) {
            console.log(barra);
            barra.classList.remove('fijo')
        } else {
            barra.classList.add('fijo')
        }
    });

    //Elemento a Observar
    observer.observe(document.querySelector('.video'))
}

function scrollNav(){
    const enlaces= document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach(function(link){
        link.addEventListener('click', function(e){
            e.preventDefault();
            

            const seccion= document.querySelector(e.target.attributes.href.value);

            seccion.scrollIntoView({
                behavior: 'smooth'
            })
        });
    });

}
document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();

})

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i=1; i<=12; i++){
        const imagen= document.createElement('IMG');
        imagen.src= `./build/img/thumb/${i}.webp`;
        imagen.dataset.imageId = i


        //Aladir funcion mostrarImagen()//
        imagen.onclick = mostrarImagen

        const lista= document.createElement('LI');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }
}

function mostrarImagen(e){
    const id= parseInt(e.target.dataset.imageId)

    //Generar IMAGEN
    const imagen= document.createElement('IMG');
    imagen.src= `./build/img/grande/${id}.webp`;

    const overlay= document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay')

    //Botón para Cerrar Imagen
    const cerrarImagen= document.createElement('P');
    cerrarImagen.textContent= 'X';
    cerrarImagen.classList.add('btn-cerrar');

    //Funcion Cerrar Imagen//
    overlay.onclick= function(){
        overlay.remove();
        body.classList.remove('fijar-body')
    }

    cerrarImagen.onclick= function(){
        overlay.remove();
        body.classList.remove('fijar-body')
    }

    overlay.appendChild(cerrarImagen)

    //Mostrar en HTML
    const body= document.querySelector('body')
    body.appendChild(overlay)
    body.classList.add('fijar-body');
}