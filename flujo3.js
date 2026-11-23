// 1. Seleccionamos el botón por su ID
  const boton = document.getElementById('btnGray');

  // 2. Escuchamos el evento 'click'
  boton.addEventListener('click', () => {
    // 3. Cambiamos el color de fondo del body
    document.body.style.backgroundColor = 'gray';
  });