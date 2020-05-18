import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";

const app = new Koa();

const PORT = 9000;

app.use(bodyParser());
app.use(cors({ origin: "*" }));
app.use(logger());

const server = app
  .listen(PORT, "Malpha", async () => {
    console.log("Server is listening on port : ", PORT);
  })
  .on("error", (error) => console.error(error));

export default server;
