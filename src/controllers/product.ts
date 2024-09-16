import { Request, Response } from 'express'
import { Product } from '../models/product';
import path from 'path';
import fs from 'fs';
import { Category } from '../models/category';

export const ReadProduct = async (req: Request, res: Response) => {
    const listProduct = await Product.findAll();
    res.json(
        listProduct
    );
}

export const ReadCaregoryProduct = async (req: Request, res: Response) => {
    const { categoryId } = req.params;
    try {
        const listProduct = await Product.findAll({
            where: { CategoryId: categoryId }, // Asegúrate de que sea 'CategoryId', no 'categoryId'
            include: [
                {
                    model: Category,
                    as: 'categories', // Alias correcto
                    // attributes: ['Cname'], // Atributos que deseas incluir de la categoría (opcional)
                }
            ]
        });

        if (listProduct.length === 0) {
            return res.status(404).json({ message: "No se encontraron productos para esta categoría." });
        }

        res.json(listProduct);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los productos.", error });
    }
};



export const ReadProductId = async (req: Request, res: Response) => {
    const { Pid } = req.params;
    try {
        const product = await Product.findOne({ where: { Pid: Pid } });

        if (!product) {
            return res.status(404).json({
                msg: `Product con ID ${Pid} no encontrada`
            });
        }
        return res.json({
            msg: `Product con ID ${Pid} encontrada exitosamente`,
            data: product
        });

    } catch (error) {
        return res.status(500).json({
            msg: `Error al buscar la Product con ID ${Pid}`
        });
    }
}

export const CreateProduct = async (req: Request, res: Response) => {

    const { Pname, Pdescription, Pprice, CategoryId } = req.body
    console.log({ Pname, Pdescription, Pprice, CategoryId });

    const file = req.file;

    console.log({Pname});
    

    if (!Pname || !Pdescription || !Pprice) {
        return res.status(400).json({
            msg: "Nombre y descripción son requeridos"
        });
    }

    if (!file) {
        return res.status(400).json({
            msg: "No se subió ninguna imagen"
        });
    }
   

    const existingProduct = await Product.findOne({ where: { Pname: Pname } });

    if (existingProduct) {
        return res.status(400).json({
            msg: `Producto ${Pname}, ya existe`
        })
    }

    const uploadPath = path.join('./static/product');

    if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, { recursive: true });
    }

    const fileName = `Image-${Date.now()}.${file.mimetype.split('/')[1]}`;
    const filePath = path.join(uploadPath, fileName);

    fs.writeFileSync(filePath, file.buffer);

    try {
        Product.create({
            Pname: Pname,
            Pdescription: Pdescription,
            Pprice: Pprice,
            CategoryId: CategoryId,
            Pimage: fileName, // Save the image file name to the database
            Pstatus: 1
        })

        return res.json({
            msg: `Producto ${Pname}, creada exitosamente`
        })

    } catch (error) {

        return res.json({
            msg: `Error al crear la product ${Pname}`
        })
    }


}

export const UpdateProduct = async (req: Request, res: Response) => {

    const { Pid } = req.params;
    const { Pname, Pdescription, Pstatus, Pprice, CategoryId } = req.body;
    const file = req.file;

    const product: any = await Product.findOne({ where: { Pid: Pid } });

        if (!product) {
            return res.status(404).json({
                msg: `Producto ${Pname} no encontrada`
            });
        }
       
        


        if (!file) {
            try {
        

                await Product.update(
                    {
                        Pname: Pname,
                        Pdescription: Pdescription,
                        Pprice: Pprice,
                        CategoryId: CategoryId,
                        Pstatus: Pstatus
                    },
                    { where: { Pid: Pid } }
                );
        
        
                return res.json({
                    msg: `Producto ${Pname} actualizada exitosamente`
                });
        
            } catch (error) {
                return res.status(500).json({
                    msg: `Error al actualizar la Producto ${Pname}`
                });
            }
          
        }
       
    
        const existingProduct = await Product.findOne({ where: { Pname: Pname } });
    
        if (!existingProduct) {
            return res.status(400).json({
                msg: `Producto ${Pname}, ya existe`
            })
        }

    
        const uploadPath = path.join('./static/product');
    
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
    
        const fileName = `Image-${Date.now()}.${file.mimetype.split('/')[1]}`;
        const filePath = path.join(uploadPath, fileName);
    
        fs.writeFileSync(filePath, file.buffer);
    
    try {
        

        await Product.update(
            {
                Pname: Pname,
                Pdescription: Pdescription,
                Pprice: Pprice,
                CategoryId: CategoryId,
                Pimage: fileName, // Save the image file name to the database
                Pstatus: Pstatus
            },
            { where: { Pid: Pid } }
        );


        return res.json({
            msg: `Producto ${Pname} actualizada exitosamente`
        });

    } catch (error) {
        return res.status(500).json({
            msg: `Error al actualizar la Producto ${Pname}`
        });
    }
};

export const DeleteProduct = async (req: Request, res: Response) => {

    const { Pid } = req.params;
    try {
        const product: any = await Product.findOne({ where: { Pid: Pid } });

        if (!product) {
            return res.status(404).json({
                msg: `Producto con ID ${Pid} no encontrada`
            });
        }

        await Product.destroy({ where: { Pid: Pid } });

        return res.json({
            msg: `Producto con ID ${Pid} eliminada exitosamente`
        });

    } catch (error) {
        return res.status(500).json({
            msg: `Error al eliminar la Producto con ID ${Pid}`
        });
    }
};

