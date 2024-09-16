import express, {Application, json, urlencoded} from 'express'
import routesCategoty from '../routes/category'
import routesProduct from '../routes/product'
import routesRole from '../routes/role'
import routesUser from '../routes/user'
import routesAuth from '../routes/auth'
import routesEmail from '../routes/email'
import routesBanner from '../routes/banner'
import { Category } from '../models/category'
import { Product } from '../models/product'
import { Role } from '../models/role'
import { User } from '../models/user'
import { Banner } from '../models/banner'
import path from 'path';

import cors from 'cors'
// import multer from 'multer'
// import sharp from 'sharp'  
import { Client } from '../models/client'

class Server {

    private app: Application
    private port: string
    

    constructor(){
        this.app = express()
        this.port = process.env.PORT || '3001'
        this.listen();
        this.midlewares();
        this.router();
        this.DBconnetc();
        
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("La aplicación se esta corriendo exitosamente en el puerto => "+ this.port)           
        })
    }

    router(){
        this.app.use(routesCategoty);
        this.app.use(routesProduct);
        this.app.use(routesRole);
        this.app.use(routesUser);
        this.app.use(routesAuth);
        this.app.use(routesEmail);
        this.app.use(routesBanner);
    }

    midlewares(){
        //Parseo BOdy
        this.app.use('/static', express.static(path.resolve('static')));

        // this.app.use('/static', express.static(path.join(__dirname, 'static')));
        this.app.use(express.json())
        this.app.use(urlencoded({extended: true}))
        this.app.use(json())

        //
        this.app.use(cors())
    }

    async DBconnetc(){
        try {

            await Category.sync(); 
            await Product.sync(); 
            await User.sync(); 
            await Role.sync(); 
            await Banner.sync(); 
            // await UserHasRoles.sync(); 
            // await Product.sync({force: true}); 
            // await Category.sync({alter: true}); 
            // await Category.destroy({where: {}});
            // await Category.destroy({where:{}}); 
            // await Category.sync({ force: true });
            // await Product.destroy({where:{}}); 
            console.log("Conexion de DB exitoso");
        
        } catch (error) {
            console.log("Conexion de DB errorena => "+error);        
        }
    }
}


export default Server