window.onload = function() {
  let app = document.getElementById('typing');
  let typewriter = new Typewriter(app, {loop: false});

  Particles.init({
    selector: '#particles',
    maxParticles: 150,
    color: '#fff'
  });

  typewriter.typeString('Gustavo Gil')
    .start();
}