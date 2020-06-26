import Router from "koa-router";
import { ChurchMember } from "../models/index";

const router = new Router({ prefix: "/api/v1" });

router.post("/members", async (ctx) => {
    const church_member_info: any = ctx.request.body;
    const member = new ChurchMember(church_member_info);
    try {
        await member.save();
        ctx.status = 201;
        ctx.body = {
            message: "A church Member Has been created successfully",
        };
    } catch (error) {
        ctx.body = {
            message: " Some Validations of the Schema Failed",
            error: error.message,
        };
        ctx.throw(400, error);
    }
});

router.get("/members", async (ctx) => {
    try {
        const all_church_members = await ChurchMember.find();
        console.log("Data is ready to be retrived ");
        ctx.body = { all_church_members };
    } catch (error) {
        ctx.throw(error);
    }
});

// Named Route member_id
router.get("member_id", "/members/:membership_id", async (ctx) => {
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

router.get("/members/:fathers_name/father", async (ctx) => {
    try {
        const fathers_name = ctx.params.fathers_name;
        console.log(ctx.params);
        const members_father = await ChurchMember.find({
            "family_information.fathers_name": fathers_name,
        });
        ctx.body = { members_father };
    } catch (error) {
        ctx.throw(error);
    }
});

router.get("/members/:mothers_name/mother", async (ctx) => {
    try {
        const mothers_name = ctx.params.mothers_name;
        console.log(ctx.params);
        const members_mother = await ChurchMember.find({
            "family_information.mothers_name": mothers_name,
        });
        ctx.body = { members_mother };
    } catch (error) {
        ctx.throw(error);
    }
});

router.get("/members/gender/males", async (ctx) => {
    try {
        const males = await ChurchMember.find({
            "basic_information.gender": "Male",
        });
        ctx.body = { males };
    } catch (error) {
        ctx.throw(error);
    }
});

router.get("/members/gender/females", async (ctx) => {
    try {
        const females = await ChurchMember.find({
            "basic_information.gender": "Female",
        });
        ctx.body = { females };
    } catch (error) {
        ctx.throw(error);
    }
});

router.get("/members/:profession/professions", async (ctx) => {
    try {
        const profession_name = ctx.params.profession;
        const professions = await ChurchMember.find({
            "educational_and_occupational_infomation.profession": profession_name,
        });
        ctx.body = { professions };
    } catch (error) {
        ctx.throw(error);
    }
});
router.get("/members/:occupation/occupations", async (ctx) => {
    try {
        const occupation_name = ctx.params.occupation;
        const occupations = await ChurchMember.find({
            "educational_and_occupational_infomation.occupation": occupation_name,
        });
        ctx.body = { occupations };
    } catch (error) {
        ctx.throw(error);
    }
});
export default router;
