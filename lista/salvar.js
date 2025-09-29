// Botão para salvar
const btnSalvar = document.createElement('button');
btnSalvar.textContent = 'Salvar Lista';
btnSalvar.style.display = 'block';
btnSalvar.style.margin = '20px auto';
btnSalvar.style.padding = '6px 12px';
btnSalvar.style.cursor = 'poiner';
container.appendChild(btnSalvar);

// Função para salvar a lista em um arquivo .txt
function SalvarLista() {
    // pega todos os <li> e monta o texto (cada item em uma linha)
    const itens = Array. from(lista.querySelectorAll('li'))
                        .map(li => li. textContent)
                        .join('\n');

if (!itens) {
   alert('A lista está vazia!');
   return;
}

// Cria um Blob com o conteúdo de texto
const blob = new Blob([itens], { type: 'text/plain'})
const url = URL.createObjectURL(blob);

// Cria um link temporario para dowloand
const a = document.creatElemente('a');
a.href = url;
a.download = 'Lista.txt'; // nome do arquivo
a.click(); // dispara o download
document.body.appendChild(a);

// Libera o objeto URL
URL.revokeObjectURL(url);

}

// Evento do botão
btnSalvar.addEventListener('click', SalvarLista);
