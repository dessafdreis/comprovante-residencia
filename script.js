document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Coletar dados do formulário
  const nome = document.getElementById('nome').value;
  const dataNascimento = document.getElementById('dataNascimento').value;
  const nacionalidade = document.getElementById('nacionalidade').value;
  const estadoCivil = document.getElementById('estadoCivil').value;
  const rg = document.getElementById('rg').value;
  const cpf = document.getElementById('cpf').value;
  const rua = document.getElementById('rua').value;
  const lote = document.getElementById('lote').value;
  const complemento = document.getElementById('complemento').value;
  const bairro = document.getElementById('bairro').value;
  const cidade = document.getElementById('cidade').value;
  const cep = document.getElementById('cep').value;
  const dataEmissao = document.getElementById('dataEmissao').value;

  // Preencher o comprovante
  document.getElementById('nomeOut').textContent = nome;
  document.getElementById('dataNascimentoOut').textContent = dataNascimento;
  document.getElementById('nacionalidadeOut').textContent = nacionalidade;
  document.getElementById('estadoCivilOut').textContent = estadoCivil;
  document.getElementById('rgOut').textContent = rg;
  document.getElementById('cpfOut').textContent = cpf;
  document.getElementById('ruaOut').textContent = rua;
  document.getElementById('loteOut').textContent = lote;
  document.getElementById('complementoOut').textContent = complemento;
  document.getElementById('bairroOut').textContent = bairro;
  document.getElementById('cidadeOut').textContent = cidade;
  document.getElementById('cepOut').textContent = cep;
  document.getElementById('dataEmissaoOut').textContent = dataEmissao;

  // Exibir o comprovante
  document.getElementById('comprovante').style.display = 'block';

  // Gerar o PDF
  const element = document.getElementById('comprovante');
  html2pdf().from(element).save('comprovante_residencia.pdf');
});
