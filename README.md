# Resume Analyzer API

AI-powered resume analysis and job matching backend.

## Stack
- **Framework:** NestJS (TypeScript)
- **Database:** PostgreSQL + TypeORM
- **Auth:** JWT (Passport)
- **AI:** Google Gemini
- **Docs:** Swagger / OpenAPI

## Architecture

Clean Architecture with 4 layers:

src/
├── domain/ # Entities, value objects, repository interfaces (no framework deps)
├── application/ # Use cases, ports (orchestration only)
├── infrastructure/ # TypeORM, Gemini, JWT — concrete implementations
├── presentation/ # Controllers, DTOs, Guards
└── shared/ # Decorators, filters, interceptors


**Dependency rule:** outer layers depend on inner layers, never the reverse.
`domain` knows nothing about NestJS, TypeORM, or HTTP.

## Local Setup

```bash
npm install
cp .env.example .env   # fill in your values
npm run start:dev

API: http://localhost:3000/api

Swagger: http://localhost:3000/api/docs

Roadmap

  ☑ Day 1: Setup, DB, health endpoint, Swagger
  □ Day 2: Auth (register/login/me)
  □ Day 3: Analyses CRUD
  □ Day 4: AI integration (Gemini)
  □ Day 5: History + pagination
  □ Day 6: PDF upload
  □ Day 7: Deploy + observability


---

## 🔒 Step 10: First Git Commit

```bash
git add .
git commit -m "chore: initial NestJS setup with Postgres, Swagger, and clean architecture structure

- Scaffold NestJS app with ConfigModule + TypeOrmModule
- Add Clean Architecture folder structure (domain/application/infrastructure/presentation)
- Configure global ValidationPipe and /api prefix
- Add Swagger docs at /api/docs
- Add /api/health endpoint
- Set up .env config and .env.example
- Document architecture in README"

git push origin main   # if you have a remote already