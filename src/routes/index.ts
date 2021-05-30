import { Router } from "express";
import { authenticateRouts } from "./authenticate.routes";
import { categoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./specifications.routes";
import { usersRouts } from "./users.routes";
const routes = Router();

routes.use("/categories", categoriesRoutes);
routes.use("/specifications", specificationRoutes);
routes.use("/users", usersRouts);
routes.use(authenticateRouts);
export { routes };
