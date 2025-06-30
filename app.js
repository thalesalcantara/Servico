let totalColetas = 0;
let totalEntregas = 0;
let totalParadas = 0;

function criarBlocoEndereco(tipo, index) {
  return `
    <div class="bloco-endereco">
      <label>CEP (opcional):</label>
      <input type="text" id="cep${tipo}${index}" />
      <button type="button" onclick="buscarEndereco('${tipo}', ${index})")">Buscar Endereço</button>
      <label>Rua:</label>
      <input type="text" id="rua${tipo}${index}" />
      <label>Número:</label>
      <input type="text" id="numero${tipo}${index}" />
      <label>Bairro:</label>
      <input type="text" id="bairro${tipo}${index}" />
      <label>Cidade:</label>
      <input type="text" id="cidade${tipo}${index}" />
      <label>Complemento:</label>
      <input type="text" id="complemento${tipo}${index}" />
      <label>Ponto de referência:</label>
      <input type="text" id="referencia${tipo}${index}" />
    </div>
  `;
}

function adicionarColeta() {
  if (totalColetas >= 3) return;
  totalColetas++;
  document.getElementById("coleta-container").insertAdjacentHTML("beforeend", criarBlocoEndereco("Coleta", totalColetas));
}

function adicionarEntrega() {
  if (totalEntregas >= 20) return;
  totalEntregas++;
  document.getElementById("entrega-container").insertAdjacentHTML("beforeend", criarBlocoEndereco("Entrega", totalEntregas));
}

function adicionarParada() {
  totalParadas++;
  document.getElementById("parada-container").insertAdjacentHTML("beforeend", criarBlocoEndereco("Parada", totalParadas));
}

function buscarEndereco(tipo, index) {
  const cep = document.getElementById(`cep${tipo}${index}`).value.replace(/\D/g, '');
  if (cep.length !== 8) return;
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(resp => resp.json())
    .then(data => {
      if (data.erro) return;
      document.getElementById(`rua${tipo}${index}`).value = data.logradouro || '';
      document.getElementById(`bairro${tipo}${index}`).value = data.bairro || '';
      document.getElementById(`cidade${tipo}${index}`).value = data.localidade || '';
    });
}

function mostrarOpcoesPagamento() {
  const pix = document.querySelector('input[value="Pix"]');
  const dinheiro = document.querySelector('input[value="Dinheiro"]');
  document.getElementById("mensagemPix").style.display = pix && pix.checked ? "block" : "none";
  document.getElementById("opcoesDinheiro").style.display = dinheiro && dinheiro.checked ? "flex" : "none";
}

function enviarParaWhatsApp() {
  alert("Redirecionar para o WhatsApp com os dados preenchidos...");
}

