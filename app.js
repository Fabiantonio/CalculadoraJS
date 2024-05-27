$(function () {
    $('#sumar').click(function () {
        document.getElementById('pantalla').textContent += '+';
    });
    $('#restar').click(function () {
        document.getElementById('pantalla').textContent += '-';
    });
    $('#multiplicar').click(function () {
        document.getElementById('pantalla').textContent += '*';
    });
    $('#dividir').click(function () {
        document.getElementById('pantalla').textContent += '/';
    });

    $('#siete').click(function () {
        document.getElementById('pantalla').textContent += '7';
    });
    $('#ocho').click(function () {
        document.getElementById('pantalla').textContent += '8';
    });
    $('#nueve').click(function () {
        document.getElementById('pantalla').textContent += '9';
    });

    $('#cuatro').click(function () {
        document.getElementById('pantalla').textContent += '4';
    });
    $('#cinco').click(function () {
        document.getElementById('pantalla').textContent += '5';
    });
    $('#seis').click(function () {
        document.getElementById('pantalla').textContent += '6';
    });

    $('#uno').click(function () {
        document.getElementById('pantalla').textContent += '1';
    });
    $('#dos').click(function () {
        document.getElementById('pantalla').textContent += '2';
    });
    $('#tres').click(function () {
        document.getElementById('pantalla').textContent += '3';
    });

    $('#cero').click(function () {
        document.getElementById('pantalla').textContent += '0';
    });
    $('#coma').click(function () {
        document.getElementById('pantalla').textContent += '.';
    });

    $('#borrar').click(function () {
        document.getElementById('pantalla').textContent = '';
    });


    $('#igual').click(function () {
        var result = eval($('#pantalla').text());
        document.getElementById('pantalla').textContent = result;
    });
});