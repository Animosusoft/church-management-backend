import Router from "koa-router";
import { ChurchMember } from "../models/index";

const router = new Router({ prefix: "/api/v1" });

router.post("/member", async (ctx) => {
    const church_member_info: any = ctx.request.body;
    const member = new ChurchMember(church_member_info);
    try {
        await member.save();
        ctx.status = 201;
        ctx.body = {
            message: "A church Member Has been created successfully",
        };
    } catch (error) {
        ctx.status = 400;
        ctx.body = {
            message: " Some Validations of the Schema Failed",
            error: error.message,
        };
        ctx.throw(error);
    }
});

router.get("/member", async (ctx) => {
    try {
        const All_Church_Members = await ChurchMember.find();
        console.log("Data is ready to be retrived ");
        ctx.body = { All_Church_Members };
    } catch (error) {
        ctx.throw(error);
    }
});

// Named Route member_id
router.get("member_id", "/member/:membership_id", async (ctx) => {
    try {
        const members_id = ctx.params.membership_id;
        console.log("Retrive member by id", members_id);
        const members = await ChurchMember.find({
            "basic_information.membership_id": members_id,
        });
        ctx.response.body = { members };
    } catch (error) {
        ctx.throw(error);
    }
});

export default router;
