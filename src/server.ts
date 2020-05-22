import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";
import manage from "./routes/manage";
import { config } from "./config";

const app = new Koa();

const PORT = config.port;

app.use(bodyParser());
app.use(cors({ origin: "*" }));
app.use(logger());

app.use(manage.routes());

const server = app
  .listen(PORT, async () => {
    console.log("Server is listening on port : ", PORT);
  })
  .on("error", (error) => console.error(error));

export default server;
