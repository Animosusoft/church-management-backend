import Router from "koa-router";
import { ChurchVisitor } from "../models/index";

const router = new Router({ prefix: "/api/v1" });

router.post("/visitors", async (ctx) => {
    const visitor_details = ctx.request.body;
    const visitors = new ChurchVisitor(visitor_details);
    try {
        await visitors.save();
        ctx.status = 201;
        ctx.body = {
            success: "True",
            message: "Visitor Created Successfully",
        };
    } catch (error) {
        ctx.body = {
            message: " Some Validations of the Schema Failed",
            error: error.message,
        };
        ctx.throw(400, error);
    }
});

router.get("/visitors", async (ctx) => {
    try {
        const visitors = await ChurchVisitor.find();
        ctx.body = { visitors };
    } catch (error) {
        ctx.throw(error);
    }
});

router.get("/visitors/:name", async (ctx) => {
    try {
        const visitor_name = ctx.params.name;
        const visitor = await ChurchVisitor.find({
            name: visitor_name,
        });
        ctx.body = { visitor };
    } catch (error) {
        ctx.throw(error);
    }
});

export default router;
