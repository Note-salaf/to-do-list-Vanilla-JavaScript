// ===== Estado da aplicação =====
let tarefas = [];

// ===== CREATE =====
function adicionarTarefa(texto) {
  const novaTarefa = {
    id: Date.now(),
    texto: texto,
    concluida: false,
    dataCriacao: new Date().toISOString().split("T")[0]
  };

  tarefas.push(novaTarefa);
  return novaTarefa;
}

// ===== READ =====
function obterTarefas() {
  return tarefas;
}

// ===== UPDATE (texto) =====
function editarTarefa(id, novoTexto) {
  const tarefa = tarefas.find(t => t.id === id);
  if (!tarefa) return null;

  tarefa.texto = novoTexto;
  return tarefa;
}

// ===== UPDATE (status) =====
function alternarStatusTarefa(id) {
  const tarefa = tarefas.find(t => t.id === id);
  if (!tarefa) return null;

  tarefa.concluida = !tarefa.concluida;
  return tarefa;
}

// ===== DELETE =====
function excluirTarefa(id) {
  tarefas = tarefas.filter(t => t.id !== id);
}

// ===== SET (usado ao carregar do localStorage) =====
function definirTarefas(lista) {
  tarefas = lista;
}
