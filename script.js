// Lista de comandos e descrições
const commands = [
  { command: "ls", description: "Lista arquivos e diretórios." },
  { command: "pwd", description: "Mostra o caminho do diretório atual." },
  { command: "mkdir nome", description: "Cria um novo diretório." },
  { command: "cd nome", description: "Entra em um diretório." },
  { command: "cd ..", description: "Volta um diretório." },
  { command: "rm arquivo", description: "Remove um arquivo." },
  {
    command: "rm -r pasta",
    description: "Remove um diretório e seus arquivos.",
  },
  { command: "cp origem destino", description: "Copia um arquivo ou pasta." },
  {
    command: "mv origem destino",
    description: "Move ou renomeia um arquivo/pasta.",
  },
  { command: " cat arquivo", description: "Exibe o conteúdo de um arquivo." },
  
  { command: " cat > notas.txt  ", description: "Use o cat com redirecionamento (>) para criar um arquivo e inserir conteúdo:" },
  {
    command: "nano arquivo",
    description: "Edita um arquivo com o editor nano.",
  },
  { command: "sudo apt update", description: "Atualiza a lista de pacotes." },
  {
    command: "sudo apt upgrade",
    description: "Atualiza os pacotes instalados.",
  },
  { command: "history", description: "Mostra os comandos digitados." },
  { command: "clear", description: "Limpa o terminal." },
  { command: " touch notas .txt", description: "criar arquivo" },
  { command: "echo", description: "Exibe texto no terminal." },
 
];

// Seleciona a tabela
const tableBody = document.getElementById("commandTable");

// Adiciona comandos na tabela
commands.forEach((cmd) => {
  let row = document.createElement("tr");

  row.innerHTML = `
      <td><code>${cmd.command}</code></td>
      <td>${cmd.description}</td>
      <td><button class="copy-btn" onclick="copyCommand('${cmd.command}')">Copiar</button></td>
  `;

  tableBody.appendChild(row);
});

// Função para copiar comando ao clicar no botão
function copyCommand(command) {
  navigator.clipboard
    .writeText(command)
    .then(() => {
      alert(`Comando copiado: ${command}`);
    })
    .catch((err) => {
      console.error("Erro ao copiar:", err);
    });
}
