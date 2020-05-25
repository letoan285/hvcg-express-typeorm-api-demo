import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Product } from "../entity/Product";


class ProductController {
    public table: string = 'products';
    public model: any;

  constructor() {}
    getAll = async (req: Request, res: Response): Promise<Response> => {
      const products = await getRepository(Product).find();
      return res.json(products);
    };
    

    getOne = async (req: Request, res: Response): Promise<Response> => {
      const results = await getRepository(Product).findOne(req.params.id);
      return res.json(results);
    };

    create = async (req: Request, res: Response): Promise<Response> => {
      const newCategory = await getRepository(Product).create(req.body);
      const results = await getRepository(Product).save(newCategory);
      return res.json(results);
    };

    update = async (req: Request,res: Response): Promise<Response> => {
      const product = await getRepository(Product).findOne(req.params.id);
      if (product) {
        getRepository(Product).merge(product, req.body);
        const results = await getRepository(Product).save(product);
        return res.json(results);
      }
    
      return res.json({msg: 'product Not Found'});
    };

    delete = async (req: Request, res: Response): Promise<Response> => {
      const results = await getRepository(Product).delete(req.params.id);
      return res.json(results);
    };

    
}

const productController = new ProductController;
export default productController;