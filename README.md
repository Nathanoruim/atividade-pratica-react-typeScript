🚀 Portal Utilitário – TaskMaster Suite
📌 Introdução

Sistema web desenvolvido em React + TypeScript + TailwindCSS para gerenciamento de tarefas, contatos e controle financeiro simples.

A aplicação simula um portal de ferramentas utilitárias com persistência de dados e navegação fluida entre módulos.

🎯 Objetivo do Projeto

Desenvolver uma aplicação utilizando:

React

TypeScript

React Router DOM

React Hook Form

Zod

Componentização

Persistência com LocalStorage

O sistema centraliza três ferramentas principais em uma única aplicação moderna e organizada.

🖥 Estrutura de Telas
🏠 Home

Dashboard inicial com cards de navegação para:

TaskMaster (ToDo List)

ConnectHub (Cadastro de Contatos)

MoneyFlow (Controle Financeiro)

📋 Página 1 – TaskMaster

Funcionalidades:

Cadastro de tarefas

Seleção de categoria (Trabalho, Pessoal, Urgente)

Remoção de tarefas

Validação com Zod (mínimo 5 caracteres)

Uso do React Hook Form

Salvamento automático no LocalStorage

📇 Página 2 – ConnectHub

Funcionalidades:

Cadastro de contatos

Campos:

Nome Completo

Email válido

Telefone (somente números)

Validação com Zod

Persistência no LocalStorage

💰 Página 3 – MoneyFlow

Funcionalidades:

Registro de entradas financeiras

Campos:

Descrição

Valor (maior que zero)

Cálculo automático do saldo total

Validação com Zod

Persistência no LocalStorage

✅ Funcionalidades Implementadas

Sistema completo de rotas

Componentização da aplicação

Formulários com React Hook Form

Validação robusta com Zod

Persistência com LocalStorage

Atualização automática de dados

Interface moderna com TailwindCSS

Tipagem forte com TypeScript (sem uso de any)

📁 Estrutura do Projeto
src/
├── components/
│   ├── Button
│   ├── Input
│   └── Navbar
├── pages/
│   ├── Home
│   ├── TaskMaster
│   ├── ConnectHub
│   └── MoneyFlow
├── schemas/
│   ├── taskSchema
│   ├── contactSchema
│   └── financeSchema
└── App.tsx
💾 Persistência de Dados

Os dados são armazenados utilizando:

localStorage.setItem

localStorage.getItem

Informações salvas:

Lista de tarefas

Lista de contatos

Registros financeiros

Os dados permanecem salvos mesmo após atualizar a página.# atividade-pratica-react-typeScript
