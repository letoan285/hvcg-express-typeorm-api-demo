import { Router } from "express";

import userController from '../controllers/user.controller';
class UserRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }
    public config() {
        this.router.get('/', userController.getAll);
        this.router.get('/:id', userController.getOne);
        this.router.post('/', userController.create);
        this.router.put('/:id', userController.update);
        this.router.delete('/:id', userController.delete);
    }
}

export default new UserRoutes().router;