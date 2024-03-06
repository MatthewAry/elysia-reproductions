import { Elysia } from "elysia";
import { nested } from "./nested";

const app = new Elysia()
  .get("/hello", () => "Hello, World!")
  .use(nested)
  .listen(3000);

export type AppType = typeof app;
