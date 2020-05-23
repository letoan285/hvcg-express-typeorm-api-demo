import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";


class UserController {
  getAll = async (req: Request,res: Response): Promise<Response> => {
    const users = await getRepository(User).find();
    return res.json(users);
  };
  
  getOne = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(User).findOne(req.params.id);
    return res.json(results);
  };
  
  create = async (req: Request, res: Response): Promise<Response> => {
    const newUser = await getRepository(User).create(req.body);
    const results = await getRepository(User).save(newUser);
    return res.json(results);
  };

  static userLogin = async (req: Request, res: Response) => {
    //Check if username and password are set
    let { username, password } = req.body;
    if (!(username && password)) {
      res.status(400).send();
    }
  }

  login = async (req: Request, res: Response): Promise<Response> => {
    const newUser = await getRepository(User).create(req.body);
    const results = await getRepository(User).save(newUser);
    return res.json(results);
  };
  
  update = async (req: Request, res: Response): Promise<Response> => {
    const user = await getRepository(User).findOne(req.params.id);
    if (user) {
      getRepository(User).merge(user, req.body);
      const results = await getRepository(User).save(user);
      return res.json(results);
    }
  
    return res.json({msg: 'Not user found'});
  };
  
  delete = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(User).delete(req.params.id);
    return res.json(results);
  };
}


const userController = new UserController;
export default userController;