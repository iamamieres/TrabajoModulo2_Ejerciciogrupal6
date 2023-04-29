$(document).ready(function () {
    $('#tablaProductos').DataTable({
        "language": {
            "lengthMenu": "Mostrar _MENU_ entradas",
            "zeroRecords": "No se encontraron registros",
            "info": "Mostrando página _PAGE_ de _PAGES_",
            "infoEmpty": "No hay registros disponibles",
            "infoFiltered": "(filtrado desde _MAX_ registros totales)"
        }
    });
})