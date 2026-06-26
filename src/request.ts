// PadmaJS (C) 2026
import type { IncomingMessage, IncomingHttpHeaders } from "node:http";

/**
 * HTTP request wrapper.
 */
export class Request {
  constructor(
    private readonly req: IncomingMessage
  ) {}

  /** HTTP method. */
  get method(): string {
    return this.req.method ?? "GET";
  }

  /** Request URL. */
  get url(): string {
    return this.req.url ?? "/";
  }

  /** Request headers. */
 get headers(): IncomingHttpHeaders {
    return this.req.headers;
}

  /** Raw Node.js request. */
  get raw(): IncomingMessage {
    return this.req;
  }
}