import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Category } from "../entity/Category";


class ProductController {
    public table: string = 'categories';
    public model: any;

  constructor() {}
    getAll = async (req: Request, res: Response): Promise<Response> => {
      const categories = await getRepository(Category).find();
      return res.json(categories);
    };
    

    getOne = async (req: Request, res: Response): Promise<Response> => {
      const results = await getRepository(Category).findOne(req.params.id);
      return res.json(results);
    };

    create = async (req: Request, res: Response): Promise<Response> => {
      const newCategory = await getRepository(Category).create(req.body);
      const results = await getRepository(Category).save(newCategory);
      return res.json(results);
    };

    update = async (req: Request,res: Response): Promise<Response> => {
      const category = await getRepository(Category).findOne(req.params.id);
      if (category) {
        getRepository(Category).merge(category, req.body);
        const results = await getRepository(Category).save(category);
        return res.json(results);
      }
    
      return res.json({msg: 'Category Not Found'});
    };

    delete = async (req: Request, res: Response): Promise<Response> => {
      const results = await getRepository(Category).delete(req.params.id);
      return res.json(results);
    };

    
}

const productController = new ProductController;
export default productController;