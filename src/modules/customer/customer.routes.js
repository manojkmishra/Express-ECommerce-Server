import { Router } from 'express';
import { create, getUserInfo } from './customer.controller';
import { customerAuth } from './customer';

const routes = Router();

routes.post('/', create);
routes.get('/hello',customerAuth,(req,res)=>{
    console.log('/customer.route/hello--req.user=',req.user)
    res.send('this is hello route');
})

routes.get('/me', customerAuth, getUserInfo);

export default routes;