# PadmaJS

[![npm version](https://img.shields.io/npm/v/padmajs)](https://www.npmjs.com/package/padmajs)
[![npm downloads](https://img.shields.io/npm/dm/padmajs)](https://www.npmjs.com/package/padmajs)
[![License](https://img.shields.io/npm/l/padmajs)](LICENSE)

> A lightweight TypeScript backend framework designed with self-describing applications and future agentic systems in mind.

PadmaJS is an open-source backend framework built on top of Node.js with simplicity, extensibility, and developer experience at its core. It provides a clean and minimal API for building HTTP services while serving as a solid foundation for future tooling and intelligent development workflows.

Designed with TypeScript from the ground up, PadmaJS focuses on predictable APIs, clean architecture, and an enjoyable development experience.

---

## Installation

Install PadmaJS using npm:

```bash
npm install padmajs
```

---

## Features

-  Lightweight HTTP server
-  Minimal and intuitive API
-  Built-in routing
-  Request & Response wrappers
-  Unified request context
-  Native async route handlers
-  Built-in 404 and 500 error handling
-  Fully written in TypeScript
-  Easy to learn and extend

---

## Quick Start

```typescript
import { createApp } from "padmajs";

const app = createApp();

app.get("/", (ctx) => {
    ctx.text("Hello World");
});

app.get("/json", (ctx) => {
    ctx.json({
        framework: "PadmaJS",
        version: "0.0.1"
    });
});

app.listen(3000);
```

Start the development server:

```bash
npm run dev
```

Then visit:

```text
http://localhost:3000
```

---

## Contributing

Contributions, discussions, bug reports and feature suggestions are welcome.

---

## License

**MIT License**.

See the [LICENSE](LICENSE) file for more information.
