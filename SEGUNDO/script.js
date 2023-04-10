function verificarFibonacci() {
  const numero = parseInt(document.getElementById("numero").value);

  let fibonacci = [0, 1];

  while (fibonacci[fibonacci.length - 1] < numero) {
    const ultimo = fibonacci[fibonacci.length - 1];
    const penultimo = fibonacci[fibonacci.length - 2];
    fibonacci.push(ultimo + penultimo);
  }

  const pertence = fibonacci.includes(numero);

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `O número ${numero} ${pertence ? "pertence" : "não pertence"} à sequência de Fibonacci.`;
}