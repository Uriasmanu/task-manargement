# Task Management System

O **Task Management System** é uma aplicação projetada para controle de tarefas e gerenciamento de projetos. Desenvolvido com **React** para o front-end, **C# com ASP.NET Core** para o back-end e **Entity Framework Core** para acesso ao banco de dados, o sistema oferece uma solução completa para rastreamento de horas trabalhadas e gerenciamento de tarefas.

## Funcionalidades

- **Cadastro de Tarefas**: Criação, leitura, atualização e exclusão (CRUD) de tarefas.
- **Cadastro de Projetos**: Criação, leitura, atualização e exclusão (CRUD) de projetos.
- **Listagem de Tarefas**: Visualize todas as tarefas cadastradas.
- **Visualização de Tempo Gasto**: 
  - Tempo gasto no dia corrente.
  - Tempo gasto no mês corrente.
- **Associação de Colaboradores**: Atribua colaboradores às tarefas.
- **Autenticação Segura**: Utiliza JSON Web Tokens (JWT) para autenticação.
- **Responsividade**: Interface adaptável para diferentes dispositivos.

## Requisitos de Negócio

1. **Estrutura de Banco de Dados**:
    - `Users`: Informações dos usuários.
    - `Projects`: Dados dos projetos.
    - `Collaborators`: Detalhes dos colaboradores.
    - `Tasks`: Informações das tarefas.
    - `TimeTrackers`: Registros de tempo associado às tarefas.

2. **Regras de Negócio**:
    - O nome de usuário deve ser único.
    - As senhas devem ser criptografadas.
    - Não é permitido registrar um time tracker que se sobreponha a um intervalo de tempo existente.
    - Cada tarefa deve estar associada a um projeto.
    - Uma tarefa pode ter múltiplos time trackers.
    - O horário de início deve ser menor ou igual ao horário de término.
    - O fuso horário local deve ser especificado na requisição para inclusão do tempo.
    - Validação de campos deve ser realizada tanto no front-end quanto no back-end.
    - O total de horas registradas em tarefas em um único dia não deve exceder 24 horas.

## Documentação e Deploy

- **Documentação da API**: Acesse a documentação da API [aqui](https://create-api-dfanctb3bhg4acgb.eastus-01.azurewebsites.net/Swagger/index.html).
- **Deployment do Frontend**: Disponível através dos seguintes links:
  - [Vercel](https://task-manargement.vercel.app/)
  - [Netlify](https://regal-dasik-72e600.netlify.app/)

De preferência no http://localhost:5173

## Recursos Utilizados

- **Design de UI**: Modelos e design de UI foram baseados em [uiverce.io](https://uiverce.io).

## Como Contribuir

1. **Clone o Repositório**:
    ```bash
    git clone https://github.com/Uriasmanu/task-manargement.git
    ```

2. **Instale as Dependências**:
    ```bash
    npm install
    ```

3. **Inicie o Servidor de Desenvolvimento**:
    ```bash
    npm run dev
    ```

4. **Contribuições**: Sinta-se à vontade para abrir issues e pull requests para melhorias ou correções.
