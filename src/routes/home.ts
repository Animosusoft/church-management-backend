import Router from "koa-router";

const router = new Router();
router.get("/koa", async (ctx) => {
    try {
        ctx.body = {
            success: "Koa Success",
            data: "Koa Route is Awesome",
        };
    } catch (error) {
        console.error(error);
    }
});

export default router;
