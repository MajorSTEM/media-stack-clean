# Media Orchestration Stack

## Overview
A clean, portfolio-ready stack demonstrating media aggregation and API orchestration patterns.

## ASCII Architecture
```
[Client] -> [fauxjf] -> [Jackett]
                   \-> [Cache]
                   \-> [Zurg]
```

## Tech Stack
- Docker Compose
- Node.js (Express)
- Jackett
- Zurg

## Key Features
- Proxy layer (`fauxjf`) for Jackett queries
- Simple caching provider integration
- Example Zurg configuration

## Setup
1. Copy `.env.example` to `.env` and fill in values.
2. `docker-compose up -d` to start services.

## Professional Value
Shows understanding of container orchestration and API composition for media services.

## Security & Ethics
Configuration avoids questionable content sources and promotes responsible automation.

## Next Steps
Expand fauxjf into a full-featured Jellyfin-compatible shim and add automated tests.
