// ===== Inicialização =====
document.addEventListener("DOMContentLoaded", () => {
  // Carrega do localStorage
  const tarefasSalvas = carregarTarefas();
  definirTarefas(tarefasSalvas);

  // Renderiza na tela
  renderizarTarefas(obterTarefas());
});

// ===== Formulário =====
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");

form.addEventListener("submit", event => {
  event.preventDefault();

  const texto = input.value.trim();
  if (!texto) return;

  adicionarTarefa(texto);
  salvarTarefas(obterTarefas());
  renderizarTarefas(obterTarefas());

  input.value = "";
  input.focus();
});
