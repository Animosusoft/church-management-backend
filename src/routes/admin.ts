import Router from "koa-router";
import { Administrator } from "../models/index";

const router = new Router({ prefix: "/api/v1" });

router.post("/admins", async (ctx) => {
    const admins_info = ctx.request.body;
    const admin = new Administrator(admins_info);
    try {
        admin.save();
        ctx.status = 201;
        ctx.body = {
            success: "True",
            message: "A new administrator have been added into the system",
        };
    } catch (error) {
        ctx.body = {
            message: "Some validations failed for the Administrator model",
            error: error.message,
        };
        ctx.throw(401, error);
    }
});
