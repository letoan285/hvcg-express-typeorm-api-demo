import { Router } from "express";

import productController from '../controllers/product.controller';
class ProductRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }
    public config() {
        this.router.get('/', productController.getAll);
        this.router.get('/:id', productController.getOne);
        this.router.post('/', productController.create);
        this.router.put('/:id', productController.update);
        this.router.delete('/:id', productController.delete);
    }
}

export default new ProductRoutes().router;