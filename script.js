document.querySelector('#citas form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.querySelector('#nombre').value;
    const taller = document.querySelector('#taller').value;
    const fecha = document.querySelector('#fecha').value;

    alert(`Cita agendada con ${taller} para ${nombre} el ${fecha}.`);
    this.reset();
});

document.querySelector('#estado form').addEventListener('submit', function(e) {
    e.preventDefault();
    const placa = document.querySelector('#placa').value;

    const estado = Math.random() < 0.5 ? 'En revisión' : 'Listo para entrega';
    const fechaEntrega = estado === 'Listo para entrega' ? 'El vehículo se puede entregar hoy.' : 'Aún en proceso de revisión.';

    document.querySelector('#estado-vehiculo').style.display = 'block';
    document.querySelector('#estado-mensaje').innerText = `Estado del vehículo (Placa: ${placa}): ${estado}`;
    document.querySelector('#fecha-entrega').innerText = fechaEntrega;
    this.reset();
});

document.querySelector('#cotizacion form').addEventListener('submit', function(e) {
    e.preventDefault();
    const servicio = document.querySelector('#servicio').value;
    const vehiculo = document.querySelector('#vehiculo').value;

    const precioEstimado = Math.floor(Math.random() * (200000 - 50000 + 1)) + 50000;

    document.querySelector('#cotizacion-estimada').style.display = 'block';
    document.querySelector('#cotizacion-mensaje').innerText = `La cotización estimada para ${servicio} en el vehículo ${vehiculo} es de $${precioEstimado}.`;
    this.reset();
});
