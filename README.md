# Task Management System

Este é um sistema de controle de tarefas com apontamento de horas, desenvolvido utilizando React no frontend, C# com ASP.NET Core no backend, e Entity Framework Core para acesso ao banco de dados. O sistema permite o cadastro e gerenciamento de tarefas e projetos, além do apontamento de horas trabalhadas.

## Funcionalidades

- *Cadastro de Tarefas (CRUD)*
- *Cadastro de Projetos (CRUD)*
- *Listagem de Tarefas*
- *Visualização do Tempo Gasto no Dia Corrente*
- *Visualização do Tempo Gasto no Mês Corrente*
- *Associação de Colaboradores a Tarefas*
- *Autenticação com JWT*
- *Responsividade*

## Requisitos de Negócio

1. *Tabelas de Banco de Dados:*
    - Users
    - Projects
    - Collaborators
    - Tasks
    - TimeTrackers

2. *Regras de Negócio:*
    - Username deve ser único
    - Password deve ser criptografado
    - Não é possível incluir um time tracker que colida o intervalo de tempo
    - Uma task deve ter associação a um projeto
    - Uma task pode ter vários time trackers
    - O tempo de início deve ser menor ou igual ao término
    - O time zone local deve ser enviado na requisição de inclusão do tempo
    - Validação de campos no frontend e backend
    - O total de horas em tasks dentro de um dia não deve ultrapassar 24 horas



### Passos para Configuração

1. *Clone o Repositório:*
   sh
   git clone https://github.com/usuario/task-management-system.git
   cd task-management-system
   
    
     