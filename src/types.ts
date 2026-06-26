// PadmaJS (C) 2026
import type { Context } from "./context.js";

/** Route handler. */
export type Handler = (
  ctx: Context
) => unknown | Promise<unknown>;

/** Supported HTTP methods. */
export const HTTP_METHODS = [
  "GET",
  "POST",
  "PUT",
  "PATCH",
  "DELETE",
  "OPTIONS",
  "HEAD",
] as const;

export type HttpMethod = typeof HTTP_METHODS[number];

/** Registered route. */
export interface Route {
  method: HttpMethod;
  path: string;
  handler: Handler;
}