import { Elysia, t } from "elysia";
import serverTiming from "@elysiajs/server-timing";

const app = new Elysia()
  .use(serverTiming())
  .guard({
    beforeHandle({ error }) {
        // Hangs when running in dev mode. Works in production mode.
        return error(403, "You should get this error.")
      }
    },
    (app) => app.get("/reject", () => "You shouldn't be here!")
  )
  .listen(3000);

export type AppType = typeof app;
