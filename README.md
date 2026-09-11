# 🚀 Cursor CLI Agents

> A production-ready AI-powered CLI agent built with TypeScript, Node.js, and the Claude Agent SDK.

Cursor CLI Agents brings an AI coding assistant directly into your terminal. You can interact with the agent using natural-language commands and let it understand your development workflow, reason about tasks, and work with your project environment.

---

## ✨ Features

* 🤖 **AI-Powered CLI Agent**
* 💬 Natural-language interaction from the terminal
* 🧠 Agent-based task execution
* ⚡ Fast and lightweight CLI experience
* 🛠️ TypeScript-based architecture
* 🔐 Environment-based API key configuration
* 🎨 Clean CLI interface with formatted output
* 📦 Production-ready project structure
* 🔄 Extensible architecture for adding new agents/tools

---

## 🏗️ Project Architecture

```text
Cursor-CLI-Agents/
│
├── src/
│   ├── agents/
│   │   └── ...
│   │
│   ├── ui/
│   │   └── banner.ts
│   │
│   ├── cli.ts
│   └── index.ts
│
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
├── pnpm-lock.yaml
└── README.md
```

---

## 🧰 Tech Stack

| Technology           | Purpose                 |
| -------------------- | ----------------------- |
| **TypeScript**       | Application development |
| **Node.js**          | Runtime environment     |
| **Claude Agent SDK** | AI agent capabilities   |
| **Commander.js**     | CLI command handling    |
| **Chalk**            | Terminal styling        |
| **Boxen**            | CLI UI panels           |
| **Figlet**           | ASCII banner            |
| **pnpm**             | Package management      |

---

## ⚙️ Prerequisites

Make sure you have the following installed:

* Node.js 20+
* pnpm
* Git
* Claude API access

Check your versions:

```bash
node -v
pnpm -v
git --version
```

---

## 📥 Installation

Clone the repository:

```bash
git clone https://github.com/Paritosh008/Cursor-CLI-Agents.git
```

Move into the project:

```bash
cd Cursor-CLI-Agents
```

Install dependencies:

```bash
pnpm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the project root:

```bash
touch .env
```

On Windows PowerShell:

```powershell
New-Item .env
```

Add your API credentials:

```env
ANTHROPIC_API_KEY=your_api_key_here
```

> ⚠️ Never commit your `.env` file or expose your API key publicly.

---

## ▶️ Run the CLI

Start the development version:

```bash
pnpm dev
```

You can also pass a prompt directly:

```bash
pnpm dev "Explain how Solana PDAs work"
```

Example:

```bash
pnpm dev "Create a TypeScript utility for validating email addresses"
```

---

## 🖥️ Example

```text
╭──────────────────────────────────────╮
│                                      │
│          CURSOR CLI                  │
│                                      │
│      AI Coding Agent                 │
│                                      │
╰──────────────────────────────────────╯

> Create a sample TypeScript project

🤖 Agent is working...

✓ Analyzing request
✓ Creating project structure
✓ Generating files
✓ Completing task

✓ Task completed successfully
```

---

## 🧠 How It Works

The CLI accepts a natural-language prompt from the developer.

```text
Developer
    │
    ▼
┌─────────────────┐
│   Cursor CLI    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   AI Agent      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Agent Reasoning │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Tools / Actions │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Project Files   │
└─────────────────┘
```

The goal is to move beyond a simple chatbot and build an **agent capable of understanding a task and performing development-oriented actions**.

---

## 🎯 Example Use Cases

### Create a project

```bash
pnpm dev "Create a Node.js TypeScript project"
```

### Generate code

```bash
pnpm dev "Create a REST API using Express and TypeScript"
```

### Explain code

```bash
pnpm dev "Explain the authentication flow in this project"
```

### Development assistance

```bash
pnpm dev "Create a reusable database connection module"
```

---

## 🔮 Roadmap

* [x] CLI foundation
* [x] TypeScript setup
* [x] AI agent integration
* [x] CLI command handling
* [x] Terminal UI
* [ ] File-system tools
* [ ] Codebase analysis
* [ ] Multi-agent architecture
* [ ] Git integration
* [ ] Automated testing agent
* [ ] Code review agent
* [ ] Debugging agent
* [ ] MCP tool integration
* [ ] Interactive terminal mode
* [ ] Production CLI package
* [ ] npm package publishing

---

## 🧪 Development

Run the project in development mode:

```bash
pnpm dev
```

Build the project:

```bash
pnpm build
```

Run the production build:

```bash
pnpm start
```

---

## 🔒 Security

Please follow these practices:

* Never commit API keys.
* Never commit `.env` files.
* Use environment variables for secrets.
* Rotate exposed API keys immediately.
* Review generated code before executing it.
* Run agents with the minimum required permissions.

---

## 🤝 Contributing

Contributions are welcome!

### 1. Fork the repository

```bash
git clone https://github.com/Paritosh008/Cursor-CLI-Agents.git
```

### 2. Create a branch

```bash
git checkout -b feature/your-feature
```

### 3. Make your changes

### 4. Commit

```bash
git commit -m "feat: add new agent capability"
```

### 5. Push

```bash
git push origin feature/your-feature
```

### 6. Open a Pull Request

---

## 📌 Future Vision

Cursor CLI Agents is being developed as an **AI-native developer tool** that can evolve from a simple terminal assistant into a complete autonomous coding workflow.

The long-term goal is to support specialized agents for:

```text
┌───────────────────────┐
│   Cursor CLI Agents   │
└───────────┬───────────┘
            │
    ┌───────┼────────┐
    │       │        │
    ▼       ▼        ▼
 Coding   Testing   Debugging
 Agent    Agent     Agent
    │       │        │
    └───────┼────────┘
            │
            ▼
      Code Review Agent
            │
            ▼
       Git Agent
            │
            ▼
     Production Workflow
```

## ⭐ Support

If you find this project useful, consider giving it a ⭐ on GitHub.
