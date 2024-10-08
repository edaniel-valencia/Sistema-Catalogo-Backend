import { Request, Response } from 'express'
import { Category } from '../models/category'
import path from 'path';
import fs from 'fs';

export const ReadCategory = async (req: Request, res: Response) => {
    const listCategory = await Category.findAll();
    res.json(listCategory);
    // try {
    //     const listCategory = await Category.findAll();
    //     res.json(listCategory);
    //     console.log(listCategory);

    // } catch (error) {
    //     res.status(500).json({ error: 'Error al obtener las categorías' });
    // }

    // res.json({
    //     msg: `List de categoría encontrada exitosamente`,
    //     data: listCategory
    // });


}

export const ReadCategoryId = async (req: Request, res: Response) => {
    const { Cid } = req.params;
    try {
        const category = await Category.findOne({ where: { Cid: Cid } });

        if (!category) {
            return res.status(404).json({
                msg: `Categoría con ID ${Cid} no encontrada`
            });
        }
      
        return res.json({
            msg: `Categoría con ID ${Cid} encontrada exitosamente`,
            data: category
        });


    } catch (error) {
        return res.status(500).json({
            msg: `Error al buscar la categoría con ID ${Cid}`
        });
    }
}

export const CreateCategory = async (req: Request, res: Response) => {
    
    const { Cname, Cdescription } = req.body;
    const file = req.file;

    if (!Cname || !Cdescription) {
        return res.status(400).json({
            msg: "Nombre y descripción son requeridos"
        });
    }

    if (!file) {
        return res.status(400).json({
            msg: "No se subió ninguna imagen"
        });
    }


    // console.log('Request body:', req.body);
    // console.log('File:', req.file);

    const category = await Category.findOne({ where: { Cname: Cname } });

    if (category) {
        return res.status(400).json({
            msg: `Categoria ${Cname}, ya existe`
        });
    }

    const uploadPath = path.join('./static/image');

    if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, { recursive: true });
    }

    const fileName = `Image-${Date.now()}.${file.mimetype.split('/')[1]}`;
    const filePath = path.join(uploadPath, fileName);

    fs.writeFileSync(filePath, file.buffer);

    try {
        await Category.create({
            Cname: Cname,
            Cdescription: Cdescription,
            Cimage: fileName, // Save the image file name to the database
            Cstatus: 1
        });
        return res.json({
            msg: `Categoria ${Cname}, creada exitosamente`
        });
    } catch (error) {
        return res.status(500).json({
            msg: `Error al crear la categoria ${name}`,
            error: error
        });
    }
};



export const UpdateCategory = async (req: Request, res: Response) => {

    const { Cid } = req.params;
    const { Cname, Cdescription, Cstatus } = req.body;

    const file = req.file;

    if (!file) {
        try {
            await Category.update(
                {
                    Cname: Cname,
                    Cdescription: Cdescription,
                    Cstatus: Cstatus
                },
                { where: { Cid: Cid } }
            );
    
            return res.json({
                msg: `Categoría ${Cname} actualizada exitosamente`
            });
    
        } catch (error) {
            return res.status(400).json({
                msg: "No se subió ninguna imagen"
            });     
        }
          
    }

    const category: any = await Category.findOne({ where: { Cid: Cid } });

    if (!category) {
        return res.status(404).json({
            msg: `Categoría ${Cname} no encontrada`
        });
    }

    const uploadPath = path.join('./static/image');

    if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, { recursive: true });
    }

    const fileName = `Image-${Date.now()}.${file.mimetype.split('/')[1]}`;
    const filePath = path.join(uploadPath, fileName);

    fs.writeFileSync(filePath, file.buffer);

    try {

        await Category.update(
            {
                Cname: Cname,
                Cdescription: Cdescription,
                Cimage: fileName, // Save the image file name to the database
                Cstatus: Cstatus
            },
            { where: { Cid: Cid } }
        );


        return res.json({
            msg: `Categoría ${Cname} actualizada exitosamente`
        });

    } catch (error) {
        return res.status(500).json({
            msg: `Error al actualizar la categoría ${Cname}`
        });
    }
};

export const DeleteCategory = async (req: Request, res: Response) => {

    const { Cid } = req.params;
    try {
        const category: any = await Category.findOne({ where: { Cid: Cid } });

        if (!category) {
            return res.status(404).json({
                msg: `Categoría con ID ${Cid} no encontrada`
            });
        }

        await Category.destroy({ where: { Cid: Cid } });

        return res.json({
            msg: `Categoría con ID ${Cid} eliminada exitosamente`
        });

    } catch (error) {
        return res.status(500).json({
            msg: `Error al eliminar la categoría con ID ${Cid}`
        });
    }
};

