import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";
import { routes } from "./routes/index";
import swaggerFile from "./swagger.json";

import "./database";

import "./shared/container"
import { AppError } from "./errors/AppError";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            message: err.message
        })
    }
    return res.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    })
});

console.log("server running..");
app.listen(3333, () => console.log('liten on 3333 port'));
