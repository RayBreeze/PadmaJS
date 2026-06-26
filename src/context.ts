// PadmaJS (C) 2026
import { Request } from "./request.js";
import { Response } from "./response.js";

/**
 * Request context.
 */
export class Context {
  constructor(
    public readonly request: Request,
    public readonly response: Response
  ) {}

  /** Send plain text. */
  text(body: string): void {
    this.response.text(body);
  }

  /** Send JSON. */
  json(data: unknown): void {
    this.response.json(data);
  }

  /** Set status code. */
  status(code: number): this {
    this.response.status(code);
    return this;
  }
}