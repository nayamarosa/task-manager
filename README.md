# 📝 Desafio Prático - Gerenciador de Tarefas (Angular)

Este projeto foi desenvolvido como parte de um desafio técnico. Trata-se de um **gerenciador de tarefas** construído com **Angular**, utilizando **componentização**, **formulários reativos**, **serviços** e **persistência via localStorage**.

---

## ✅ Funcionalidades Implementadas

📋 **Listagem de Tarefas** (`/tasks`)
  - Exibe tarefas cadastradas.
  - Permite marcar como concluída.
  - Permite excluir uma tarefa.

➕ **Criação de Tarefa** (`/tasks/new`)
  - Formulário reativo com validação.
  - Mostra mensagem de sucesso após salvar.

💾 **Persistência com localStorage**
  - As tarefas são salvas localmente para manter o estado entre sessões.

🧩 **Arquitetura Modular**
  - Separação por módulos (`tasks`, `home`, `shared`).

---

## 🧪 Testes Unitários

O projeto possui testes unitários implementados para garantir a confiabilidade dos principais serviços e componentes.

### ✔️ Testado:

#### **🔹 TaskService**
- Criação do serviço.
- Adição de uma nova tarefa.
- Exclusão de uma tarefa.
- Alternância do status de conclusão (`completed`).
- Verificação do estado inicial (lista vazia).

#### **🔹 TaskListComponent**
- Criação do componente.
- Renderização correta da lista de tarefas.
- Chamadas aos métodos `toggleTaskStatus` e `deleteTask`.
- Navegação para `tasks/new`.

### ▶️ Rodar os testes:

```bash
ng test

```

---

## 🚀 **Como Rodar a Aplicação**

### **1.** Clone o repositório:

```bash
git clone https://github.com/nayamarosa/task-manager.git
cd task-manager
```

### **2.** Instale as dependências:

```bash
npm install
```

### **3.** Rode o servidor local:

```bash
ng serve
```

Acesse em: http://localhost:4200

---

### 🛠️ Ferramentas Utilizadas
- Angular 17+
- TypeScript
- SCSS
- Angular CLI
- Jasmine & Karma (testes)
- Reactive Forms
- localStorage

## 📂 Estrutura do Projeto (simplificada)

```java
src/
├── app/
│   ├── home/            → módulo inicial (rota '/')
│   ├── tasks/           → funcionalidades de tarefas
|   |    ├── task-form           → formulário de nova tarefa (rota '/tasks/new')
|   |    ├── task-list           → listagem de tarefas (rota '/tasks')
│   ├── shared/          → reutilizáveis
|   |    ├── input              → componente
|   |    ├── textarea           → componente
|   |    ├── button             → componente
|   |    ├── header             → componente
|   |    ├── task.service       → serviço
│   └── app-routing.module.ts
```

---

### 🤝 Autor
Desenvolvido por **Nayama Rosa**.