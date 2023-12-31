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