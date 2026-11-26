const paginas = [
  { arquivo: 'index.html', nome: 'Início' },
  { arquivo: 'dados-bitcoin.html', nome: 'Dados Bitcoin' },
  { arquivo: 'halving-bitcoin.html', nome: 'Halving Bitcoin' },
  { arquivo: 'calculadora.html', nome: 'Calculadora 500 dias' },
  { arquivo: 'calculadora-tempo.html', nome: 'Dias personalizados' },
  { arquivo: 'sobre.html', nome: 'Sobre' }
];

const paginaAtual = location.pathname.split('/').pop() || 'index.html';
const navegacao = paginas.map((pagina) => {
  const ativa = pagina.arquivo === paginaAtual;
  return `<a${ativa ? ' class="active" aria-current="page"' : ''} href="${pagina.arquivo}">${pagina.nome}</a>`;
}).join('');

document.getElementById('site-header').innerHTML = `
  <div class="nav-wrap">
    <a class="brand" href="index.html"><span class="brand-mark" aria-hidden="true">₿</span> Estatísticas Bitcoin</a>
    <nav class="nav" aria-label="Menu principal">${navegacao}</nav>
  </div>
`;

const linkRodape = paginaAtual === 'index.html'
  ? { href: 'sobre.html', texto: 'Saiba mais sobre o projeto' }
  : paginaAtual === 'sobre.html'
    ? { href: 'index.html', texto: 'Voltar ao início' }
    : { href: 'sobre.html', texto: 'Sobre o projeto' };

document.getElementById('site-footer').innerHTML = `
  <div class="footer-inner">
    <p>Estatísticas Bitcoin · Conteúdo educativo, sem recomendação de investimento.</p>
    <p>Criado por <a href="https://github.com/ViniciusLima-Usvi" target="_blank" rel="noopener noreferrer">Vinicius Lima</a>.</p>
    <a class="footer-link" href="${linkRodape.href}">${linkRodape.texto}</a>
  </div>
`;
