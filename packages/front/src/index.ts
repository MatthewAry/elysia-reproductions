// This file is to help demonstrate Eden Treaty's type signatures
import { treaty } from "@elysiajs/eden";
import { AppType } from "@back/index";

const app = treaty<AppType>("http://localhost:3000");

app.level1.level2({ id: "123" }).get() // This kind of behavior used to work with edenTreaty1
app.level1.level2.get()
