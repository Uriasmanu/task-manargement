Claro! Aqui está uma versão revisada e aprimorada do seu README:

---

# Task Management System

O **Task Management System** é uma aplicação para controle de tarefas e gerenciamento de projetos. Desenvolvido com React para o frontend, C# com ASP.NET Core para o backend e Entity Framework Core para acesso ao banco de dados, o sistema oferece uma solução completa para o rastreamento de horas trabalhadas e gerenciamento de tarefas.

## Funcionalidades

- **Cadastro de Tarefas**: Criação, leitura, atualização e exclusão (CRUD) de tarefas.
- **Cadastro de Projetos**: Criação, leitura, atualização e exclusão (CRUD) de projetos.
- **Listagem de Tarefas**: Visualize todas as tarefas cadastradas.
- **Visualização de Tempo Gasto**:
  - No dia corrente
  - No mês corrente
- **Associação de Colaboradores**: Atribua colaboradores às tarefas.
- **Autenticação Segura**: Utiliza JSON Web Tokens (JWT) para autenticação.
- **Responsividade**: Interface adaptável para diferentes dispositivos.

## Requisitos de Negócio

1. **Estrutura de Banco de Dados**:
    - `Users`
    - `Projects`
    - `Collaborators`
    - `Tasks`
    - `TimeTrackers`

2. **Regras de Negócio**:
    - O nome de usuário deve ser único.
    - As senhas devem ser criptografadas.
    - Não é permitido registrar um time tracker que se sobreponha a um intervalo de tempo existente.
    - Cada tarefa deve estar associada a um projeto.
    - Uma tarefa pode ter múltiplos time trackers.
    - O horário de início deve ser menor ou igual ao horário de término.
    - O fuso horário local deve ser especificado na requisição para inclusão do tempo.
    - Validação de campos deve ser realizada tanto no frontend quanto no backend.
    - O total de horas registradas em tarefas em um único dia não deve exceder 24 horas.

## Documentação e Deploy

- **API Documentation**: Acesse a documentação da API [aqui](https://create-api-dfanctb3bhg4acgb.eastus-01.azurewebsites.net) com suporte a Swagger.
- **Frontend Deployment**: Disponível através do Vercel e Netlify.

## Recursos Utilizados

- Modelos e design de UI do [uiverce.io](https://uiverce.io).

---

