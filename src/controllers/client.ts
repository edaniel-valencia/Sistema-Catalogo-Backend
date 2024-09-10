import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { User } from '../models/user'
import { Op } from 'sequelize'
import jwt from 'jsonwebtoken'



export const CreateClient = async (req: Request, res: Response) => {

    const { Uname, Ulastname, Upassword, Uemail, Ucredential, RoleId } = req.body  
    const userEmail = await User.findOne({ where: {  Uemail: Uemail  }})
    const userCredential = await User.findOne({ where: {  Ucredential: Ucredential  }})

    if (userEmail) {
        return res.status(400).json({
            msg: `Usuario ya existe con el email ${Uemail}`
        })
    }

    if (userCredential) {
        return res.status(400).json({
            msg: `Usuario ya existe con la credencial ${Ucredential}`
        })
    }

    const UpasswordHash = await bcrypt.hash(Upassword, 10);
  

    try {
        User.create({
            Uname: Uname,
            Ulastname: Ulastname,
            Uemail: Uemail,
            Upassword: UpasswordHash,
            Ucredential: Ucredential,
            RoleId: RoleId,
            Uimagen: req.file?.filename, // Imagen guardada con multer
            Ustatus: 1
        })

        res.json({
            msg: `User ${Uname} ${Ulastname} create success.`
        })

    } catch (error) {
        res.status(400).json({
            msg: `Existe un error al crear el usuario => `, error
        })
    }
}

// export const LoginClient = async (req: Request, res: Response) => {
//     const { Uemail, Upassword } = req.body;

//     console.log(req.body);

//     const user: any = await User.findOne({ where: { Uemail: Uemail } })
//     if (!user) {
//         return res.status(400).json({
//             msg: `Usuario no existe con el email ${Uemail}`
//         })
//     }

    
//     const passwordValid = await bcrypt.compare(Upassword, user.Upassword)

//     if (!passwordValid) {
//         return res.status(400).json({
//             msg: `Password Incorrecto => ${Upassword}`
//         })
//     }

//     const token = jwt.sign({
//         Uemail: Uemail
//     }, process.env.SECRET_KEY || 'TSE-Edaniel-Valencia',
//         // { expiresIn: '10000' }
//     );
//     res.json({ token })
// }

export const ReadClient = async (req: Request, res: Response) => {
    const listClient = await User.findAll();
    res.json(
        listClient
    );
}

export const ReadClientId = async (req: Request, res: Response) => {

    const { Uid } = req.params;
    try {
        const client = await User.findOne({ where: { Uid: Uid } });

        if (!client) {
            return res.status(404).json({
                msg: `User con ID ${Uid} no encontrada`
            });
        }
        return res.json({
            msg: `User con ID ${Uid} encontrada exitosamente`,
            data: client
        });

    } catch (error) {
        return res.status(500).json({
            msg: `Error al buscar la User con ID ${Uid}`
        });
    }
}

export const CreateClientDashboard = async (req: Request, res: Response) => {

    const { Uname, Ulastname, Upassword, Uemail, Ucredential } = req.body  
    const userEmail = await User.findOne({ where: {  Uemail: Uemail  }})
    const userCredential = await User.findOne({ where: {  Ucredential: Ucredential  }})

    if (userEmail) {
        return res.status(400).json({
            msg: `Usuario ya existe con el email ${Uemail}`
        })
    }
 

    if (userCredential) {
        return res.status(400).json({
            msg: `Usuario ya existe con la credencial ${Ucredential}`
        })
    }

    const UpasswordHash = await bcrypt.hash(Upassword, 10)
    try {
        User.create({
            Uname: Uname,
            Ulastname: Ulastname,
            Uemail: Uemail,
            Upassword: UpasswordHash,
            Ucredential: Ucredential,
            Ustatus: 1
        })

        res.json({
            msg: `User ${Uname} ${Ulastname} create success.`
        })

    } catch (error) {
        res.status(400).json({
            msg: `Existe un error al crear el usuario => `, error
        })
    }

}

export const UpdateClient = async (req: Request, res: Response) => {

    const { Uid } = req.params;
    const { Uname, Ulastname, Upassword, Uemail, Ucredential, Ustatus } = req.body;
    
    try {
        const user: any = await User.findOne({ where: { Uid: Uid } });
        
        if (!user) {
            return res.status(404).json({
                msg: `User ${Uname} no encontrada`
            });
        }
        console.log("Estoy por aqui ****** =>" + user.Uid);
        console.log("Estoy por aqui ****** =>" + Uname);

        await User.update(
            {
                Uname: Uname,
                Ulastname: Ulastname,
                Ucredential: Ucredential,
                Uemail: Uemail,
                Upassword: Upassword,
                Ustatus: Ustatus,
            },
            { where: { Uid: Uid } }
        );

        console.log("Estoy por aqui ******");
        

        return res.json({
            msg: `User ${Uname} actualizada exitosamente`
        });

    } catch (error) {
        return res.status(500).json({
            msg: `Error al actualizar la User ${Uname}`
        });
    }
};

export const DeleteClient = async (req: Request, res: Response) => {

    const { Uid } = req.params;
    try {
        const user: any = await User.findOne({ where: { Uid: Uid } });

        if (!user) {
            return res.status(404).json({
                msg: `User con ID ${Uid} no encontrada`
            });
        }

        await User.destroy({ where: { Uid: Uid } });

        return res.json({
            msg: `User con ID ${Uid} eliminada exitosamente`
        });

    } catch (error) {
        return res.status(500).json({
            msg: `Error al eliminar la User con ID ${Uid}`
        });
    }
};

