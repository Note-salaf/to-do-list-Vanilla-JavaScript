# To Do List – Vanilla JavaScript

Demo: 

Projeto de estudo desenvolvido para praticar fundamentos de **HTML, CSS e JavaScript puro**, com foco em organização de código, manipulação do DOM e persistência de dados no navegador. Criado usando chatgpt.

A aplicação segue um visual simples e minimalista, inspirado em layouts do Dribbble, e foi pensada inicialmente para uso em desktop.

---

## 📸 Visão geral

Aplicação de lista de tarefas com CRUD completo, edição inline e salvamento automático no `localStorage`.

---

## ⚙️ Funcionalidades

- Criar tarefas
- Listar tarefas
- Editar tarefas inline
- Excluir tarefas
- Marcar tarefas como concluídas ou pendentes
- Exibir data de criação da tarefa
- Persistência de dados com `localStorage`
- Estado vazio quando não há tarefas

---

## 🧱 Estrutura do projeto

to-do-list/\n
│
├── index.html
│
├── assets/
│ ├── css/
│ │ ├── reset.css
│ │ └── style.css
│ │
│ ├── js/
│ │ ├── data.js
│ │ ├── storage.js
│ │ ├── ui.js
│ │ └── main.js
│ │
│ └── icons/
│
├── README.md
└── .gitignore


---

## 🧠 Arquitetura

O projeto foi organizado separando responsabilidades:

- **data.js**  
  Gerencia o estado da aplicação e as regras do CRUD.

- **storage.js**  
  Responsável pela leitura e escrita no `localStorage`.

- **ui.js**  
  Criação e atualização da interface via JavaScript.

- **main.js**  
  Inicialização da aplicação e controle de eventos.

Essa separação facilita manutenção, leitura e evolução do código.

---

## 🧪 Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- localStorage

---

## 🎯 Objetivo do projeto

Este projeto tem fins **educacionais**, com o objetivo de:

- praticar lógica de programação
- entender o fluxo de dados em aplicações frontend
- aplicar boas práticas de organização de código
- simular um pequeno projeto real de frontend

---

## 🚀 Possíveis melhorias futuras

- Filtro de tarefas (todas / pendentes / concluídas)
- Modo escuro (dark mode)
- Animações e transições
- Refatoração para módulos ES
- Versão responsiva para mobile

---

## 📄 Licença

Projeto desenvolvido apenas para fins de estudo.


