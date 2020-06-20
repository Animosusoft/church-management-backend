import server from "../../src/server"
import request from "supertest"

describe("test route/login",()=>{
    it("logs a user into our system",async ()=>{
        const responds = await request(server).post("/login").send({response:"you have logged in"});

        expect(responds.status).toBe(201);
        expect(responds.body).toEqual({response:"you are logged in"});
        expect(responds.type).toEqual("application/json")
    })
})
afterEach(
    ()=>{server.close();
    }
)

