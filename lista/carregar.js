

// Botão para carregar lista
const btnCarregar = document.createElement('button');
btnCarregar.textContent = 'Carregar Lista';
btnCarregar.style.display = 'block';
btnCarregar.style.margin = '10px auto';
btnCarregar.style.padding = '6px 12px';
btnCarregar.style.cursor = 'pointer';
container.appendChild(btnCarregar);

// Input de arquivo oculto
const inputArquivo = document.createElement('input');
inputArquivo.type = 'file';
inputArquivo.accept = '.txt'; // apenas
inputArquivo.