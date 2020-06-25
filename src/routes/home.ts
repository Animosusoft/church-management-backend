import Router from "koa-router";

const router = new Router({ prefix: "/api/v1" });
router.get("/", async (ctx) => {
    try {
        ctx.body = {
            success: "Koa Success",
            data: "Koa Route is Awesome",
            message: "I am Still Working On Developing the homepage",
        };
    } catch (error) {
        ctx.throw(error);
    }
});

export default router;
