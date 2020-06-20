import Router from "koa-router";
import { ChurchMember } from "../models/index";

const router = new Router();

router.post("/member", async (ctx) => {
    const church_member_info: any = ctx.request.body;
    const member = new ChurchMember(church_member_info);
    await member.save((errorInDbTransaction: Error) => {
        if (errorInDbTransaction) {
            console.error("There Is an error \n");
            console.error(errorInDbTransaction);
            ctx.status = 401;
            ctx.body = {
                errors: {
                    message: "Some Validations In Schema failed",
                },
            };
        } else {
            ctx.status = 201;
            ctx.body = {
                message: "A church Member Has been created successfully",
            };
        }
    });
});

router.get("/member", async (ctx) => {
    try {
        await ChurchMember.find((error: Error, members) => {
            if (error) {
                console.error(
                    "The Following Error Occured While Try To Get Data: ",
                    error,
                );
            } else {
                console.log("We Can Get Our Data\n");
                ctx.body = { members };
            }
        });
    } catch (error) {
        console.error("");
        throw error;
    }
});

export default router;
