# Crushly Monorepo Foundation

Production-grade starter architecture for **Crushly**: a viral invitation app where users create cinematic shareable links to ask their crush out.

## Architecture Overview

- **Monorepo** with workspace packages
  - `apps/web` — Next.js 15+ App Router frontend (TypeScript, Tailwind, Shadcn-style UI primitives, Framer Motion, TanStack Query)
  - `apps/api` — NestJS backend (modular REST, Prisma, PostgreSQL, JWT auth, validation, throttling)
  - `packages/shared` — shared TypeScript contracts for cross-layer compatibility
- **Infra**
  - Dockerized frontend + backend + PostgreSQL via `docker-compose.yml`
  - Environment-based configuration (`.env.example`)

## Folder Structure

```text
.
├── apps
│   ├── api
│   │   ├── prisma
│   │   │   ├── migrations/20260527140000_init/migration.sql
│   │   │   └── schema.prisma
│   │   └── src
│   │       ├── auth users invitations responses notifications themes prisma
│   │       ├── common (guards/filters/interceptors/decorators/enums)
│   │       └── config
│   └── web
│       └── src
│           ├── app (landing, reveal, response, dashboard, history, settings)
│           ├── components (AnimatedCard, RevealSequence, ResponseButtons, etc.)
│           ├── hooks
│           ├── lib
│           └── providers
└── packages/shared
```

## Database Schema (Prisma)

Core models implemented:
- `User`
- `Invitation`
- `InvitationResponse`
- `Theme`
- `Notification`

Enums:
- `InvitationStatus` (`DRAFT`, `PUBLISHED`, `ARCHIVED`)
- `InvitationResponseType` (`YES`, `MAYBE`, `NO`)
- `NotificationChannel`, `NotificationStatus`

Indexes and relations are included for sender timelines, response analytics, and notification dispatch pipelines.

## API Architecture (REST)

Base prefix: `/api/v1`

- `POST /auth/magic-link`
- `POST /auth/token`
- `GET /users/me`
- `POST /invitations`
- `GET /invitations/public/:slug`
- `GET /invitations`
- `GET /invitations/stats`
- `PATCH /invitations/:id`
- `DELETE /invitations/:id`
- `POST /responses/:slug`
- `GET /themes`
- `POST /notifications/test`

## Authentication Strategy

- JWT guard enabled globally
- Public endpoints marked via `@Public()` metadata
- Google OAuth and magic link placeholders included in environment and auth module for extension

## Frontend MVP Pages

Public:
- `/` landing
- `/invite/[slug]` cinematic reveal flow
- `/response/[slug]` confirmation

Authenticated:
- `/dashboard`
- `/dashboard/invitations/new`
- `/dashboard/invitations`
- `/settings`

## Animation Strategy

Framer Motion powers:
- floating gradient background
- reveal sequence with staged blur-to-clear transitions
- animated card entrances
- CTA/response motion hooks ready for extension

## Notification Architecture

`NotificationsModule` is queue-ready for:
- email
- push
- realtime streams (SSE/WebSocket)

Data model and service seams support BullMQ integration later.

## Environment Variables

See `.env.example` for all required variables.

## Docker Workflow

```bash
docker compose up --build
```

## Engineering Standards

- TypeScript everywhere
- DTO validation with `class-validator`
- global exception filter + logging interceptor
- modular NestJS domains
- React Query for async state and optimistic-ready mutation flow
- reusable UI component architecture

## Implementation Roadmap

1. Wire real auth providers (Google OAuth + passwordless magic links)
2. Add Redis/BullMQ notification workers
3. Add analytics and premium subscription modules
4. Add AI-assisted invitation generation and media invites
5. Add mobile API expansion + websocket fan-out
