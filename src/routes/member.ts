import Router from "koa-router";
import { ChurchMember } from "../models/index";

const router = new Router();

router.post("/member", async (ctx) => {
    const church_member_info: any = ctx.request.body;
    console.log(church_member_info);
    const member = new ChurchMember(church_member_info);
    try {
        await member.save();
        ctx.status = 201;
        ctx.body = {
            message: "A church Member Has been created successfully",
        };
    } catch (error) {
        console.error(error);
        ctx.status = 400;
        ctx.body = {
            message: " Some Validations of the Schema Failed",
            error: error.message,
        };
    }
});

router.get("/member", async (ctx) => {
    try {
        const members = await ChurchMember.find();
        console.log("Data is ready to be retrived ");
        ctx.body = { members };
    } catch (error) {
        console.error(error);
    }
});

export default router;
