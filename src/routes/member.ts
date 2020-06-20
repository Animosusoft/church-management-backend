import Router from "koa-router";
import { ChurchMember } from "../models/index";

const router = new Router();

router.post("/member", async (ctx) => {
    const church_member_info: any = ctx.request.body;
    const member = new ChurchMember(church_member_info);
    await member
        .save()
        .then(() => {
            ctx.status = 201;
            ctx.body = {
                message: "A church Member Has been created successfully",
            };
        })
        .catch((reason: Error) => {
            console.error(reason);
            ctx.status = 400;
            ctx.body = {
                message: " Some Validations of the Schema Failed",
                error: reason.message,
            };
        });
});

router.get("/member", async (ctx) => {
    await ChurchMember.find()
        .then((members) => {
            console.log("Data is ready to be retrived ");
            ctx.body = { members };
        })
        .catch((reason: Error) => {
            console.error(reason);
        });
});

export default router;
