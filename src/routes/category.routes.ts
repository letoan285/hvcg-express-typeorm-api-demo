import { Router } from "express";

import categoryController from '../controllers/category.controller';
class CategoryRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }
    public config() {
        this.router.get('/', categoryController.getAll);
        this.router.get('/:id', categoryController.getOne);
        this.router.post('/', categoryController.create);
        this.router.put('/:id', categoryController.update);
        this.router.delete('/:id', categoryController.delete);
    }
}

export default new CategoryRoutes().router;