const STORAGE_KEY = "tarefas";

function salvarTarefas(tarefas) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tarefas));
}

function carregarTarefas() {
  const dados = localStorage.getItem(STORAGE_KEY);
  return dados ? JSON.parse(dados) : [];
}

function limparTarefas() {
  localStorage.removeItem(STORAGE_KEY);
}
