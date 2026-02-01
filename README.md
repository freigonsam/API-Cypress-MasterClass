# API Cypress MasterClass - Testes de API com Cypress

## 📋 Descrição

Este projeto é uma suíte completa de testes automatizados para APIs REST, desenvolvida como parte de uma MasterClass sobre testes de API utilizando o framework Cypress. O foco principal é testar operações CRUD (Create, Read, Update, Delete) em uma API de reservas de hotel, utilizando a [Restful Booker API](https://restful-booker.herokuapp.com/) como base de exemplo.

Como especialista em testes, este projeto demonstra as melhores práticas para:
- Testes de API automatizados
- Estruturação de testes com Page Objects e Commands customizados
- Uso de fixtures para dados de teste
- Autenticação e autorização em testes
- Validação de respostas HTTP
- Estratégias de teste para cenários positivos e negativos

## 🎯 Objetivos dos Testes

Os testes cobrem os seguintes cenários principais:
- **Criação de reservas** - Validação de criação bem-sucedida com dados válidos
- **Alteração de reservas** - Testes de atualização com autenticação
- **Exclusão de reservas** - Validação de deleção com controle de acesso

## 🛠️ Pré-requisitos

Antes de executar os testes, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/) para controle de versão

## 📦 Instalação

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd api-cypress-masterclass
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Verifique a instalação do Cypress:**
   ```bash
   npx cypress --version
   ```

## ⚙️ Configuração

### Configuração do Ambiente

1. **Arquivo `cypress.config.js`:**
   - Define a URL base da API (`https://restful-booker.herokuapp.com`)
   - Configurações específicas do projeto podem ser adicionadas aqui

2. **Autenticação:**
   - O projeto utiliza autenticação baseada em token
   - O token é obtido automaticamente no hook `before` em `cypress/support/e2e.js`
   - Credenciais padrão: `username: "admin"`, `password: "password123"`

## 📁 Estrutura do Projeto

```
api-cypress-masterclass/
├── cypress/
│   ├── e2e/                          # Testes end-to-end
│   │   ├── cadastrar_reserva.cy.js   # Testes de criação
│   │   ├── alterar_reserva.cy.js     # Testes de atualização
│   │   └── deletar_reserva.cy.js     # Testes de exclusão
│   ├── fixtures/                     # Dados de teste
│   │   ├── cadastro_reserva.json     # Dados para criação
│   │   └── update_reserva.json       # Dados para atualização
│   └── support/                      # Arquivos de suporte
│       ├── e2e.js                    # Configurações globais
│       └── reserva_commands.js       # Comandos customizados
├── cypress.config.js                 # Configuração do Cypress
├── package.json                      # Dependências e scripts
└── README.md                         # Este arquivo
```

## 🚀 Execução dos Testes

### Modos de Execução

1. **Interface Gráfica (Recomendado para desenvolvimento):**
   ```bash
   npx cypress open
   ```
   - Abre a interface do Cypress
   - Permite executar testes individualmente
   - Visualização em tempo real dos resultados

2. **Modo Headless (para CI/CD):**
   ```bash
   npx cypress run
   ```

3. **Executar testes específicos:**
   ```bash
   npx cypress run --spec "cypress/e2e/cadastrar_reserva.cy.js"
   ```

4. **Com relatórios:**
   ```bash
   npx cypress run --reporter json --reporter-options output=results.json
   ```

## 🧪 Estratégias de Teste

### Cobertura de Cenários

1. **Testes Positivos:**
   - Criação com dados válidos
   - Atualização bem-sucedida
   - Exclusão autorizada

2. **Testes Negativos (Sugestões para expansão):**
   - Dados inválidos
   - Campos obrigatórios ausentes
   - Autenticação inválida
   - Recursos inexistentes

### Boas Práticas Implementadas

- **Independência de Testes:** Cada teste é autocontido
- **Setup/Teardown:** Autenticação automática via hooks
- **Validações Abrangentes:** Status codes, estrutura de resposta, tipos de dados
- **Reutilização:** Commands customizados para operações comuns
- **Dados Dinâmicos:** Uso de fixtures para dados de teste