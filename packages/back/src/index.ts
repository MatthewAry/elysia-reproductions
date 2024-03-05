import { Elysia, t } from "elysia";
import serverTiming from "@elysiajs/server-timing";

const app = new Elysia()
  .use(serverTiming())
  .guard({
    beforeHandle: async ({ error }) => {
      // Add Synthetic delay
      const result = await new Promise((resolve) => {
        setTimeout(resolve, 1000)
        resolve(true)
      });
      if (result) {
        return error(403, "You should get this error.");
      }
      // Hangs when running in dev mode. Works in production mode.
    }
  },
    (app) => app.get("/reject", () => "You shouldn't be here!")
  )
  .listen(3000);

export type AppType = typeof app;
