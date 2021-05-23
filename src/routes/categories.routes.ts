import { Router } from "express";
import { CategoryRepositories } from "../repositories/CategoryRepositories";

const categoriesRoutes = Router();
const categoryRepositories = new CategoryRepositories();

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;
    const categoryAlreadyExists = categoryRepositories.findByName(name);
    if (categoryAlreadyExists) {
        return res.status(400).send({ message: "Category already exists" });
    }
    categoryRepositories.create({ name, description });
    return res.status(201).send({ name, description });
});

categoriesRoutes.get("/", (req, res) => {
    const categories = categoryRepositories.list();
    return res.status(200).json(categories);
});

export { categoriesRoutes };
