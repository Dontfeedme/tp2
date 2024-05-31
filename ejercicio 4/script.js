function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const imc = peso / (altura * altura);
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Tu IMC es ${imc.toFixed(2)}`;
}
