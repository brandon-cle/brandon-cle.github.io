const contenedor = document.getElementById('imagen_noticia_A_F3');

contenedor.addEventListener('mouseenter', function() {
    contenedor.classList.add('animacion');
  });
  
  contenedor.addEventListener('mouseleave', function() {
    contenedor.classList.remove('animacion');
  });