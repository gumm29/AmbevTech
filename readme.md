# Projeto de QA - AmbevTech

### 1. Baixe o projeto
### 2. Instale as bibliotecas

```code
npm i
```

Estrutura do projeto
- e2e/: Contém os cenários de testes.
- fixtures/: Contém os dados e massas utilizadas nos testes.
- support/: Contém os comandos customizados e utilitários para os testes.
- cypress.config.js: Arquivo de configuração do Cypress, onde as URLs do frontend e backend estão separadas.

## Executando o Projeto
<br>

### Para rodar os testes na GUI:
<h5>Execute o comando:

```code
npx cypress open
```
<h5>Escolha o teste que deseja rodar na interface do Cypress.

<br>

### Para rodar todos os testes:
<h5>Execute o comando:

```code
npx cypress run
````
Isso executará todos os testes de forma automática no terminal.

<br>

### Dependências:
<h4>O projeto utiliza as seguintes bibliotecas:

<h5>- Cypress: Para realizar os testes E2E.
<h5>- Faker: Para gerar massa de teste.