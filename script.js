
// Restringir funcionamento entre 05:30 e 23:00
const agora = new Date();
const hora = agora.getHours();
const minutos = agora.getMinutes();
const minutosAtuais = hora * 60 + minutos;
const inicioPermitido = 5 * 60 + 30;
const fimPermitido = 23 * 60;

if (minutosAtuais < inicioPermitido || minutosAtuais > fimPermitido) {
  document.body.innerHTML = `
    <div style="text-align:center; margin-top:40vh; color:#00ff99;">
      <h2>CryptoX Scanner está disponível<br>das 05:30 às 23:00.</h2>
      <p>Volte mais tarde!</p>
    </div>`;
  throw new Error("Fora do horário permitido");
}

// Exemplo de lógica de análise simples
function calcularIndicadores() {
  const rsi = (Math.random() * 100).toFixed(2);
  const macd = (Math.random() * 2 - 1).toFixed(2);
  document.getElementById("rsi").innerText = rsi;
  document.getElementById("macd").innerText = macd;
  const score = ((parseFloat(rsi) > 50 && parseFloat(macd) > 0) ? 100 : 30);
  document.getElementById("score").innerText = score;
}

function enviarAlerta() {
  alert("Alerta enviado via Telegram!");
}

calcularIndicadores();
