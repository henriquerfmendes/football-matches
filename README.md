# Football Matches Tracker

Esta aplicação busca as próximas partidas de múltiplas competições de futebol para os próximos dias e envia notificações via WhatsApp para múltiplos números. Originalmente, desenvolvi para buscar as partidas de futebol nos próximos 7 dias das ligas europeias: Premier League, La Liga e UEFA Champions League.

## Funcionalidades

- Busca partidas de múltiplas competições para os próximos dias configurados
- Formata as informações das partidas de forma legível, agrupadas por data
- Envia as informações via WhatsApp para múltiplos números configurados
- Execução automática agendada semanalmente (toda segunda-feira às 10:00)
- Suporte a modo de teste para envio a apenas um número

## Tecnologias Utilizadas

- Node.js com TypeScript
- Football Data API
- Venom Bot (WhatsApp API)
- Node-cron para agendamento de tarefas
- Dotenv para gerenciamento de variáveis de ambiente
- PM2 para gerenciamento de processos

## Estrutura do Projeto

```
/
├── package.json              # Configuração do projeto
├── README.md                 # Documentação
├── .env                      # Variáveis de ambiente
├── src/
│   ├── index.ts              # Ponto de entrada da aplicação
│   ├── clients/              # Clientes para APIs externas
│   │   └── footballDataApiClient.ts
│   ├── interfaces/           # Interfaces para os serviços
│   │   ├── IApiClient.ts
│   │   ├── IDateUtil.ts
│   │   ├── IMatchPresenter.ts
│   │   ├── IMatchService.ts
│   │   └── IWhatsAppService.ts
│   ├── orchestrators/        # Orquestradores da aplicação
│   │   └── ApplicationOrchestrator.ts
│   ├── presenters/           # Formatação e apresentação
│   │   └── matchPresenter.ts
│   ├── services/             # Lógica de negócios
│   │   ├── matchService.ts
│   │   └── whatsappService.ts
│   └── utils/                # Utilitários
│       ├── configValidator.ts
│       └── dateUtil.ts
└── tokens/                   # Armazenamento de sessão do WhatsApp
    └── session-name/         # Gerado pelo venom-bot
```

## Configuração

1. Clone este repositório
2. Instale as dependências com o comando `npm install`
3. Instale o Venom Bot com o comando `npm install venom-bot`
4. Instale o node-cron com o comando `npm install node-cron`
5. Gere uma chave de API no site https://www.football-data.org/
6. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis, conforme o exemplo no arquivo `.env.example`:
   ```
   API_KEY=sua_chave_da_api_football_data
   COMPETITION_IDS=2021,2014,2001
   DAYS_AHEAD=7
   PHONE_NUMBERS=5511999999999,5511888888888,5511777777777
   ```
7. Execute conforme os comandos abaixo (modo schedule, run ou test).

## Uso

A aplicação pode ser executada em três modos diferentes:

1. **Modo de Agendamento** (padrão):
   ```
   npm run dev -- schedule
   ```
   Inicia o serviço que executa automaticamente toda segunda-feira às 10:00 (pode ser alterado no arquivo `index.ts`).

2. **Modo de Execução Imediata**:
   ```
   npm run dev -- run
   ```
   Executa imediatamente a busca e envio para todos os números configurados.

3. **Modo de Teste**:
   ```
   npm run dev -- test
   ```
   Executa a busca e envia apenas para o primeiro número configurado.

O  Venom Bot simula o WhatsApp Web, sem abrir o navegador, ou seja, sem uma interface gráfica.
Ao executar a aplicação, o Venom Bot deverá mostrar um QR Code no terminal para que você possa autenticar o seu número de telefone no WhatsApp.
Os dados da autenticação são armazenados na pasta `tokens` e não precisam ser informados novamente.
Após a autenticação, a aplicação continuará executando normalmente.

## Desenvolvimento

### Pré-requisitos

- Node.js v14 ou superior
- Venom Bot instalado
- Node-cron instalado
- Chave de API do Football Data (https://www.football-data.org/)
- Smartphone com WhatsApp instalado para autenticação

## Atenção

A aplicação usa o Venom Bot para enviar as mensagens via WhatsApp. O Venom Bot é uma biblioteca de código aberto que simula um navegador web para interagir com o WhatsApp. A Meta não reconhece o Venom Bot como um serviço oficial, por isso, use com responsabilidade, evitando o envio de mensagens em massa para não ter sua conta bloqueada.

---

# Football Matches Tracker

This application fetches upcoming matches from multiple football competitions for the next few days and sends notifications via WhatsApp to multiple phone numbers. Originally, I developed it to fetch football matches for the next 7 days from European leagues: Premier League, La Liga, and UEFA Champions League.

## Features

- Fetches matches from multiple competitions for the configured upcoming days
- Formats match information in a readable way, grouped by date
- Sends information via WhatsApp to multiple configured phone numbers
- Automatic weekly scheduled execution (every Monday at 10:00 AM)
- Support for test mode to send to only one number

## Technologies Used

- Node.js with TypeScript
- Football Data API
- Venom Bot (WhatsApp API)
- Node-cron for task scheduling
- Dotenv for environment variable management
- PM2 for process management

## Project Structure

```
/
├── package.json              # Project configuration
├── README.md                 # Documentation
├── .env                      # Environment variables
├── src/
│   ├── index.ts              # Application entry point
│   ├── clients/              # Clients for external APIs
│   │   └── footballDataApiClient.ts
│   ├── interfaces/           # Interfaces for services
│   │   ├── IApiClient.ts
│   │   ├── IDateUtil.ts
│   │   ├── IMatchPresenter.ts
│   │   ├── IMatchService.ts
│   │   └── IWhatsAppService.ts
│   ├── orchestrators/        # Application orchestrators
│   │   └── ApplicationOrchestrator.ts
│   ├── presenters/           # Formatting and presentation
│   │   └── matchPresenter.ts
│   ├── services/             # Business logic
│   │   ├── matchService.ts
│   │   └── whatsappService.ts
│   └── utils/                # Utilities
│       ├── configValidator.ts
│       └── dateUtil.ts
└── tokens/                   # WhatsApp session storage
    └── session-name/         # Generated by venom-bot
```

## Configuration

1. Clone this repository
2. Install dependencies with the command `npm install`
3. Install Venom Bot with the command `npm install venom-bot`
4. Install node-cron with the command `npm install node-cron`
5. Generate an API key on the website https://www.football-data.org/
6. Create a `.env` file in the project root with the following variables, as shown in the `.env.example` file:
   ```
   API_KEY=your_football_data_api_key
   COMPETITION_IDS=2021,2014,2001
   DAYS_AHEAD=7
   PHONE_NUMBERS=5511999999999,5511888888888,5511777777777
   ```
7. Execute according to the commands below (schedule, run, or test mode).

## Usage
   
The application can be run in three different modes:

1. **Schedule Mode** (default):
   ```
   npm run dev -- schedule
   ```
   Starts the service that automatically runs every Monday at 10:00 AM (can be changed in the `index.ts` file).

2. **Immediate Execution Mode**:
   ```
   npm run dev -- run
   ```
   Immediately performs the search and sends to all configured numbers.

3. **Test Mode**:
   ```
   npm run dev -- test
   ```
   Performs the search and sends only to the first configured number.

The Venom Bot simulates WhatsApp Web without opening the browser, meaning without a graphical interface.
When running the application, Venom Bot should display a QR Code in the terminal so you can authenticate your phone number on WhatsApp.
Authentication data is stored in the `tokens` folder and does not need to be provided again.
After authentication, the application will continue running normally.

## Development

### Prerequisites

- Node.js v14 or higher
- Venom Bot installed
- Node-cron installed
- Football Data API key (https://www.football-data.org/)
- Smartphone with WhatsApp installed for authentication

## Warning

The application uses Venom Bot to send messages via WhatsApp. Venom Bot is an open-source library that simulates a web browser to interact with WhatsApp. Meta does not recognize Venom Bot as an official service, so use it responsibly, avoiding sending mass messages to prevent your account from being blocked.