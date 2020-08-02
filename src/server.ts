import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";
import * as Routes from "./routes/index";
import { environment } from "./config/index";
import compress from "koa-compress";
import SwaggerUi from "koa2-swagger-ui";
import yamljs from "yamljs";

const app = new Koa();
const PORT = environment.port;

// .load loads file from root.
const openApiSpec = yamljs.load("./openapi.yaml");

app.use(
    SwaggerUi({
        routePrefix: "/api-docs", // host at /swagger instead of default /docs
        swaggerOptions: {
            openApiSpec,
        },
    }),
);

app.use(bodyParser())
    .use(cors({ origin: "*" }))
    .use(logger())
    .use(compress());

app.use(Routes.Home.routes()).use(Routes.Home.allowedMethods());
app.use(Routes.Login.routes()).use(Routes.Login.allowedMethods());
app.use(Routes.Member.routes()).use(Routes.Member.allowedMethods());
app.use(Routes.Visitor.routes()).use(Routes.Visitor.allowedMethods());
app.use(Routes.Admin.routes()).use(Routes.Admin.allowedMethods());

const server = app
    .listen(PORT, async () => {
        console.log("Server is listening on port : ", PORT);
    })
    .on("error", (error) => console.error(error));

export default server;
