import { Request, Response } from 'express'
import path from 'path';
import fs from 'fs';
import { Banner } from '../models/banner';

export const ReadBanner = async (req: Request, res: Response) => {
    const listBanner = await Banner.findAll();
    res.json(listBanner);
}

export const ReadBannerId = async (req: Request, res: Response) => {
    const { Bid } = req.params;
    try {
        const banner = await Banner.findOne({ where: { Bid: Bid } });

        if (!banner) {
            return res.status(404).json({
                msg: `Categoría con ID ${Bid} no encontrada`
            });
        }
      
        return res.json({
            msg: `Categoría con ID ${Bid} encontrada exitosamente`,
            data: banner
        });


    } catch (error) {
        return res.status(500).json({
            msg: `Error al buscar la categoría con ID ${Bid}`
        });
    }
}

export const CreateBanner = async (req: Request, res: Response) => {
    
    const { Bdescription } = req.body;
    const file = req.file;

    if (!Bdescription) {
        return res.status(400).json({
            msg: "Nombre y descripción son requeridos"
        });
    }

    if (!file) {
        return res.status(400).json({
            msg: "No se subió ninguna imagen"
        });
    }

    const uploadPath = path.join('./static/banner');

    if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, { recursive: true });
    }

    const fileName = `Image-${Date.now()}.${file.mimetype.split('/')[1]}`;
    const filePath = path.join(uploadPath, fileName);

    fs.writeFileSync(filePath, file.buffer);

    try {
        await Banner.create({
             
            Bdescription: Bdescription,
            Bimage: fileName, // Save the image file name to the database
            Bstatus: 1
        });
        return res.json({
            msg: ` creada exitosamente`
        });
    } catch (error) {
        return res.status(500).json({
            msg: `Error al crear la categoria `,
            error: error
        });
    }
};

export const UpdateBanner = async (req: Request, res: Response) => {

    const { Bid } = req.params;
    const {  Bdescription, Bstatus } = req.body;

    const file = req.file;

    if (!file) {
        try {
            await Banner.update(
                {
                    Bdescription: Bdescription,
                    Bstatus: Bstatus
                },
                { where: { Bid: Bid } }
            );    
            return res.json({
                msg: `Banner, actualizada exitosamente`
            });    
        } catch (error) {
            return res.status(400).json({
                msg: "No se subió ninguna imagen"
            });     
        }          
    }

    const banner: any = await Banner.findOne({ where: { Bid: Bid } });

    if (!banner) {
        return res.status(404).json({
            msg: `Categoría no encontrada`
        });
    }

    const uploadPath = path.join('./static/banner');

    if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, { recursive: true });
    }

    const fileName = `Image-${Date.now()}.${file.mimetype.split('/')[1]}`;
    const filePath = path.join(uploadPath, fileName);

    fs.writeFileSync(filePath, file.buffer);

    try {
        await Banner.update(
            {           
                Bdescription: Bdescription,
                Bimage: fileName, // Save the image file name to the database
                Bstatus: Bstatus
            },
            { where: { Bid: Bid } }
        );
        return res.json({
            msg: `Categoría, actualizada exitosamente`
        });
    } catch (error) {
        return res.status(500).json({
            msg: `Error al actualizar la categoría`
        });
    }
};

export const DeleteBanner = async (req: Request, res: Response) => {

    const { Bid } = req.params;
    try {
        const banner: any = await Banner.findOne({ where: { Bid: Bid } });

        if (!banner) {
            return res.status(404).json({
                msg: `Categoría con ID ${Bid} no encontrada`
            });
        }

        await banner.destroy({ where: { Bid: Bid } });

        return res.json({
            msg: `Categoría con ID ${Bid} eliminada exitosamente`
        });

    } catch (error) {
        return res.status(500).json({
            msg: `Error al eliminar la categoría con ID ${Bid}`
        });
    }
};


export const ReadBannerPublic = async (req: Request, res: Response) => {
    
    const listBanner = await Banner.findAll({ where: { Bstatus: 1 } });
    res.json(listBanner);
}

