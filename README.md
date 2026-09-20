# ScribeNotes

```text
  ___           _ _          _  _     _           
 / __| __ _ _ (_) |__  ___ _| \| |___| |_ ___ ___ 
 \__ \/ _| '_|| | '_ \/ -_) | .` / _ \  _/ -_|_-< 
 |___/\__|_|  |_|_.__/\___|_|_|\_\___/\__\___/__/ 
```

> A digital scrapbook desk engineered with physical paper textures, botanical ephemera, and freeform canvas physics.

ScribeNotes replaces rigid grid-based note apps with the tactile freedom of a physical journal. It combines a vintage kraft-paper desk, draggable keepsakes, pressed florals, and single-stroke cursive calligraphy with a lightweight, containerized full-stack architecture.

---

## Highlights

### Physical Scrapbook Aesthetic
- **Craft Graph Desk**: 28px graph paper grid textured with diagonal deckled tears, antique Latin florilegium prints, and watercolor tea roses.
- **Pinned Keepsakes**: Notes styled as aging parchment cards anchored by rendered 3D brass and silver thumbtacks.
- **Curated Ephemera**: Side-drawer containing postal stamps, dried hydrangea clusters, olive branches, washi tapes, and wax seals.
- **Continuous Baseline Tabs**: Board navigation tabs that flow seamlessly into the desk's border without disjointed gaps.
- **Dark Leather Study Mode**: Instant toggle between warm daylight kraft and an evening leatherbound aesthetic.



### Hybrid Persistence Engine
- **Live Cloud Sync**: Automatically syncs boards, notes, positions, and stickers to MongoDB.
- **Graceful Local Failover**: If the database is unreachable, the client operates seamlessly on browser `localStorage` with zero UI interruptions.
- **Seed Migration**: Automatically seeds initial boards and keepsakes on first connection if the database is empty.

---

## Architecture

```text
[ React 18 + Vite + Tailwind ]
            |
      (HTTP / JSON)
            v
[ Express 5 Single-Container Host ] ---> [ MongoDB 7.0 / Atlas ]
            |
  (Static Fallback SPA)
```

The entire stack compiles into a single **66 MB Alpine Linux container**:
- Stage 1 compiles the Vite React client into optimized static assets.
- Stage 2 compiles the TypeScript Express server.
- Stage 3 runs the production server, serving both the REST API and the static frontend with an unprivileged non-root user (`node`).

---

## DevOps & Cloud Infrastructure

### 1. Multi-Stage Containerization (Docker)
- **Three-Stage Architecture**: Compiles both frontend and backend into a single minimal image using `node:22-alpine`:
  - `client-builder`: Compiles the Vite React SPA into optimized static production assets.
  - `server-builder`: Compiles the TypeScript Express server code with strict type verification.
  - `runner`: Lightweight production runtime (~66 MB) with development dependencies purged.
- **Container Hardening**:
  - Enforces least privilege by executing under an unprivileged user (`node`, `UID 1000`).
  - Native container `HEALTHCHECK` periodically validating service uptime via `/api/health`.

### 2. Continuous Integration (GitHub Actions)
- **Automated Quality Gate**: Triggers on every push and pull request targeting the `main` branch.
- **Parallel Compilation**: Validates TypeScript integrity and builds both frontend and backend independently.
- **Container Verification**: Executes automated Docker Buildx test builds to guarantee image reproducibility before any release.

### 3. Registry & Versioning (AWS ECR)
- Production images are tagged and pushed to private Amazon Elastic Container Registry (ECR).
- Serves as the central immutable artifact store for cloud deployment, backed by AWS IAM authentication.

### 4. Cloud Host Deployment (AWS EC2 & MongoDB Atlas)
- **Container Runtime**: Deployed on an AWS EC2 instance running Docker with auto-restart policies for fault recovery.
- **Traffic Routing**: External HTTP traffic on port 80 is forwarded directly to the internal Express server on port 5000.
- **State Decoupling**: Database state is separated into a managed MongoDB Atlas cluster, ensuring zero data loss during container redeployments or host updates.

### 5. Multi-Service Orchestration (Docker Compose)
- Manages the local full-stack topology linking the application container, MongoDB 7.0 (with volume persistence), and the Mongo Express administration console with healthcheck-based dependency chaining.

---

## License

MIT

