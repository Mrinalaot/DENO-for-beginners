import { Application, Router } from "https://deno.land/x/oak@v10.5.1/mod.ts";

const app = new Application();
const router = new Router();

router.get("/api/v1/hello", (context) => {
  context.response.body = {
    success: true,
    msg: "Hello World",
  };
});

router.get("/api/v2/hello", (context) => {
    const name = context.request.url.searchParams.get('name');
    context.response.body = {
      success: true,
      msg: `Hello ${name}`,
    };
  });

app.use(router.routes());
app.use(router.allowedMethods());

const PORT = 3001;
await app.listen({ port: PORT});
console.log(`Server running on port ${PORT}`);
