function calcularArea() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    if (a <= 0 || b <= 0 || c <= 0) {
        alert('Todos los lados deben ser mayores que cero.');
        return;
    }

    if (a <= c) {
        alert('El lado A debe ser mayor que el lado C.');
        return;
    }

    const area = ((a + b) * (a - c)) / 2;
    const resultado = document.getElementById('resultado');
    resultado.textContent = `El área del terreno es ${area.toFixed(2)} m²`;
}
