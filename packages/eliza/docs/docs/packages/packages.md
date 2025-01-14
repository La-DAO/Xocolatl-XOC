---
sidebar_position: 1
---

# 📖 Package Overview

## Core Components

- **@elizaos/core**: Central framework and shared functionality
- **@elizaos/agent**: Agent runtime and management
- **@elizaos/adapters**: Database implementations (PostgreSQL, SQLite, etc.)
- **@elizaos/clients**: Platform integrations (Discord, Telegram, etc.)
- **@elizaos/plugins**: Extension modules for additional functionality

## Package Architecture

The Eliza framework is built on a modular architecture where each package serves a specific purpose:

1. **Core Package**: Provides the fundamental building blocks
2. **Agent Package**: Handles agent lifecycle and runtime
3. **Adapters**: Enable different storage backends
4. **Clients**: Connect to various platforms
5. **Plugins**: Add specialized capabilities

## Package Dependencies

```mermaid
graph TD
    A[Core Package] --> B[Agent Package]
    A --> C[Database Adapters]
    A --> D[Client Packages]
    A --> E[Plugin System]
    B --> C
    B --> D
    B --> E
```

## Getting Started

```
# Install core package
pnpm add @elizaos/core

# Install specific adapters
pnpm add @elizaos/adapter-postgres
pnpm add @elizaos/adapter-sqlite

# Install clients
pnpm add @elizaos/client-discord
pnpm add @elizaos/client-Telegram
```
