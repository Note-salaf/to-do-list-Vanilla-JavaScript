const listaTarefas = document.getElementById("task-list");
const emptyState = document.querySelector(".empty-state");

/* ===== Renderização ===== */
function renderizarTarefas(tarefas) {
  listaTarefas.innerHTML = "";

  if (tarefas.length === 0) {
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";

  tarefas.forEach(tarefa => {
    const item = criarItemTarefa(tarefa);
    listaTarefas.appendChild(item);
  });
}

/* ===== Criar item ===== */
function criarItemTarefa(tarefa) {
  const li = document.createElement("li");
  li.className = "task-item";
  if (tarefa.concluida) li.classList.add("completed");

  li.dataset.id = tarefa.id;

  // Linha principal (checkbox + texto)
  const label = document.createElement("label");
  label.className = "task-main";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = tarefa.concluida;

  const spanTexto = document.createElement("span");
  spanTexto.className = "task-text";
  spanTexto.textContent = tarefa.texto;

  label.appendChild(checkbox);
  label.appendChild(spanTexto);

  // Data
  const data = document.createElement("span");
  data.className = "task-date";
  data.textContent = `Criada em: ${formatarData(tarefa.dataCriacao)}`;

  // Ações
  const actions = document.createElement("div");
  actions.className = "task-actions";

  const btnEdit = document.createElement("button");
  btnEdit.className = "btn-edit";
  btnEdit.textContent = "Editar";

  const btnDelete = document.createElement("button");
  btnDelete.className = "btn-delete";
  btnDelete.textContent = "Excluir";

  actions.appendChild(btnEdit);
  actions.appendChild(btnDelete);

  // Montagem
  li.appendChild(label);
  li.appendChild(data);
  li.appendChild(actions);

  // Eventos
  checkbox.addEventListener("change", () => {
    alternarStatusTarefa(tarefa.id);
    salvarTarefas(obterTarefas());
    renderizarTarefas(obterTarefas());
  });

  btnDelete.addEventListener("click", () => {
    excluirTarefa(tarefa.id);
    salvarTarefas(obterTarefas());
    renderizarTarefas(obterTarefas());
  });

  btnEdit.addEventListener("click", () => {
    iniciarEdicao(spanTexto, tarefa);
  });

  return li;
}

/* ===== Edição inline ===== */
function iniciarEdicao(span, tarefa) {
  const input = document.createElement("input");
  input.type = "text";
  input.value = tarefa.texto;
  input.className = "edit-input";

  span.replaceWith(input);
  input.focus();

  function salvar() {
    editarTarefa(tarefa.id, input.value.trim());
    salvarTarefas(obterTarefas());
    renderizarTarefas(obterTarefas());
  }

  input.addEventListener("blur", salvar);

  input.addEventListener("keydown", e => {
    if (e.key === "Enter") salvar();
    if (e.key === "Escape") renderizarTarefas(obterTarefas());
  });
}

/* ===== Util ===== */
function formatarData(data) {
  const [ano, mes, dia] = data.split("-");
  return `${dia}/${mes}/${ano}`;
}
