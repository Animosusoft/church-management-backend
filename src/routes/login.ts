import Router from "koa-router";

const router = new Router({ prefix: "/api/v1" });

router.post("/login", async (ctx) => {
    try {
        ctx.status = 201;
        ctx.body = {
            response: "you are logged in",
        };
    } catch (error) {
        console.error(error);
    }
});

export default router;
