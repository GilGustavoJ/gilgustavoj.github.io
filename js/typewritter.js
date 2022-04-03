let app = document.getElementById( 'TW-nombre' );
let typewriter = new Typewriter(app, { loop: true });

typewriter.typeString('Gustavo Gil')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Desarrollador Web Full Stack')
    .pauseFor(2500)
    .deleteAll()
    .start();