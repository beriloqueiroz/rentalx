import express from "express";
import swaggerUi from "swagger-ui-express";
import { routes } from "./routes/index";
import swaggerFile from "./swagger.json";

import "./database";

import "./shared/container"

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routes);

console.log("server running..");
app.listen(3333, () => console.log('liten on 3333 port'));
