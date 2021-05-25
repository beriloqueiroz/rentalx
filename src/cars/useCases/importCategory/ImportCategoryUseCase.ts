import csvParse from "csv-parse";
import fs from "fs";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IImportCategory {
    name: string;
    description: string;
}

class ImportCategoryUseCase {
    constructor(private importCategoriesRepository: ICategoriesRepository) {
        console.log("");
    }
    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const categories: IImportCategory[] = [];
            const parseFile = csvParse();
            stream.pipe(parseFile);
            parseFile
                .on("data", async (line) => {
                    const [name, description] = line;
                    categories.push({
                        name,
                        description,
                    });
                })
                .on("end", () => {
                    fs.promises.unlink(file.path);
                    resolve(categories);
                })
                .on("error", (err) => reject(err));
        });
    }
    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);
        // eslint-disable-next-line no-restricted-syntax
        for (const category of categories) {
            const { name, description } = category;
            const existCategory =
                this.importCategoriesRepository.findByName(name);
            if (!existCategory) {
                this.importCategoriesRepository.create({ name, description });
            }
        }
        console.log(categories);
    }
}
export { ImportCategoryUseCase };
