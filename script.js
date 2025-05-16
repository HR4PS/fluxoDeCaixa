//grafico 

const ctx = document.getElementById('grafico-mensal');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [{
      label: 'Fluxo Mensal',
      data: [1200, 900, 1400, 800, 1600, 1300, 1700, 1500, 900, 1000, 1100, 1800],
      borderColor: '#007bff',
      tension: 0.3,
      fill: false
    }]
  }
});


//sistema de entrada e saida de valores
let totalEntradas = 0;
let totalSaidas = 0;

function registrar(tipo) {
  const valorInput = document.getElementById('valor');
  const valor = parseFloat(valorInput.value);
  const log = document.getElementById('valores-log');
  if (!valor || valor <= 0) return;

  const div = document.createElement('div');
  div.className = tipo;
  div.innerHTML = `<span class="bolinha"></span> R$ ${valor.toFixed(2)}`;
  log.appendChild(div);

  if (tipo === 'entrada') {
    totalEntradas += valor;
  } else {
    totalSaidas += valor;
  }

  atualizarTotais();
  valorInput.value = '';
}

function atualizarTotais() {
  const totalGeral = totalEntradas - totalSaidas;
  document.getElementById('totais').innerHTML = `
    <span class="entradas">Entradas: R$ ${totalEntradas.toFixed(2)}</span> <br>
    <span class="saidas">Saídas: R$ ${totalSaidas.toFixed(2)}</span> <br>
    <span class="total">Total: R$ ${totalGeral.toFixed(2)}</span>
  `;
}

//modo escuro
function alternarModo() {
    document.body.classList.toggle('dark-mode');
}