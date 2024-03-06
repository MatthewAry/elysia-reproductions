import { Elysia, t } from "elysia";

export const nested = new Elysia({ prefix: '/level1/level2' })
  .get('', () => 'Level 2')
  .get("/:id", ({ params: { id }}) => `You are in the identified route! ${id}`);