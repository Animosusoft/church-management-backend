import server from "../../src/server"
import request from "supertest"

afterEach(
    (done)=>{
    server.close();
    done();
    }
)

describe("route/home" ,()=>{
    it("it pings our home route",async ()=>{
        const responds = await request(server).get("/koa");
        expect(responds.status).toBe(200);
        expect(responds.type).toEqual("application/json")
    })
})
