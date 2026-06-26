// PadmaJS (C) 2026
import { Router } from "./router.js";
import { Server } from "./server.js";
import type { Handler } from "./types.js";

/**
 * PadmaJS application.
 */
export class Application {
  private readonly router = new Router();
  private readonly server = new Server(this.router);

  /**
   * Register a GET route.
   */
  get(path: string, handler: Handler): void {
    this.router.register("GET", path, handler);
  }

  /**
   * Register a POST route.
   */
  post(path: string, handler: Handler): void {
    this.router.register("POST", path, handler);
  }

  /**
   * Start the HTTP server.
   */
  listen(port: number): void {
    this.server.listen(port);
  }
}

/**
 * Create a PadmaJS application.
 */
export function createApp(): Application {
  return new Application();
}