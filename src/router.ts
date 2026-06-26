// PadmaJS (C) 2026
import type { Handler, HttpMethod, Route } from "./types.js";

/**
 * Route manager.
 */
export class Router {
  private readonly routes: Route[] = [];

  /**
   * Register a route.
   */
  register(
    method: HttpMethod,
    path: string,
    handler: Handler
  ): void {
    this.routes.push({
      method,
      path,
      handler,
    });
  }

   /**
    * Get all registered routes.
    */
    getRoutes(): readonly Route[] {
        return this.routes;
    }

  /**
   * Find a matching route.
   */
  match(
    method: string,
    path: string
  ): Route | undefined {
    return this.routes.find(
      (route) =>
        route.method === method &&
        route.path === path
    );
  }
}

