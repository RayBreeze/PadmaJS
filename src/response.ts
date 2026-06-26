// PadmaJS (C) 2026
import { ServerResponse } from "node:http";

/**
 * HTTP response wrapper.
 */
export class Response {
  constructor(
    private readonly res: ServerResponse
  ) {}

  /** Set status code. */
  status(code: number): this {
    this.res.statusCode = code;
    return this;
  }

  /** Send plain text. */
  text(body: string): void {
    this.res.setHeader("Content-Type", "text/plain");
    this.res.end(body);
  }

  /** Send JSON. */
  json(data: unknown): void {
    this.res.setHeader("Content-Type", "application/json");
    this.res.end(JSON.stringify(data));
  }

  /** Raw Node.js response. */
  get raw(): ServerResponse {
    return this.res;
  }
}