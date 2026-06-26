// PadmaJS (C) 2026
import http, {
  type IncomingMessage,
  type ServerResponse,
} from "node:http";

import { Context } from "./context";
import { Request } from "./request";
import { Response } from "./response";
import { Router } from "./router";
import type { HttpMethod } from "./types";

/**
 * HTTP server.
 */
export class Server {
  constructor(
    private readonly router: Router
  ) {}

  /**
   * Start the HTTP server.
   */
  listen(
    port: number,
    host = "localhost"
  ): void {
    const server = http.createServer((req, res) => {
      this.handleRequest(req, res);
    });

    server.listen(port, host, () => {
      console.log("");
      console.log("PadmaJS v0.0.1");
      console.log(`Local: http://${host}:${port}`);
      console.log("");
    });
  }

  /**
   * Handles every incoming request.
   */
  private async handleRequest(
    req: IncomingMessage,
    res: ServerResponse
  ): Promise<void> {
    const method = (req.method ?? "GET") as HttpMethod;
    const path = req.url ?? "/";

    const route = this.router.match(method, path);

    if (!route) {
      this.notFound(res);
      return;
    }

    const context = new Context(
      new Request(req),
      new Response(res)
    );

    try {
      await route.handler(context);
    } catch (error) {
      this.handleError(error, res);
    }
  }

  /**
   * Sends a 404 response.
   */
  private notFound(
    res: ServerResponse
  ): void {
    if (res.headersSent) {
      return;
    }

    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 Not Found");
  }

  /**
   * Handles unexpected errors.
   */
  private handleError(
    error: unknown,
    res: ServerResponse
  ): void {
    console.error(error);

    if (res.headersSent) {
      return;
    }

    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("500 Internal Server Error");
  }
}