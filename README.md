# SolidityAi – Smart Contract Generator & Analyzer

SolidityAi is a web application that simplifies smart contract development.  
It allows users to generate Solidity contracts from natural language and analyze existing contracts for gas optimization tips and modifier suggestions.  

This project is designed for both beginners exploring blockchain and developers optimizing contracts for production.  

---

## Features
- Contract Generator – Write a contract idea in plain English, and the app generates a Solidity smart contract.  
- Contract Analyzer – Paste your Solidity code to get:
  - Gas optimization tips  
  - Modifier usage recommendations  
- User-Friendly UI – Simple interface to switch between generating and analyzing.  
- Secure & Efficient – Built with modern frameworks and extensible architecture.  

---

## Tech Stack

Frontend  
- React 18 – Component-based UI library  
- Vite – Fast build tool and dev server  
- TypeScript – Type-safe JavaScript  
- Tailwind CSS – Utility-first CSS framework for responsive UI  

Backend  
- Express.js – Lightweight web framework for Node.js  
- TypeScript – For scalable backend logic  
- ts-node – To run TypeScript files directly  

Other Tools  
- Concurrently – Run frontend and backend together with one command  
- OpenAI / Gemini (Future) – For AI-powered contract auditing  
- ESLint/Prettier (Optional) – Code formatting and linting  

---

## Project Structure
├─ client/ # Frontend (React + Tailwind + Vite)
│ ├─ index.html
│ └─ src/
│ ├─ App.tsx
│ ├─ main.tsx
│
├─ server/ # Backend (Express + TypeScript)
│ ├─ index.ts
│ ├─ routes.ts
│ └─ services/
│ ├─ gemini.ts
│ └─ analyzer.ts
│
├─ shared/ # Shared types or schema
│ └─ schema.ts
├─ package.json
├─ tsconfig.json
└─ README.md
