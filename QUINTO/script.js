function inverter() {
    var str = document.getElementById("string").value;
    var resultado = "";
    for (var i = str.length - 1; i >= 0; i--) {
      resultado += str[i];
    }
    document.getElementById("resultado").textContent = resultado;
  }
  