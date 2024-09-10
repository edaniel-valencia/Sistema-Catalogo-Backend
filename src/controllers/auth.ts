import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { User } from '../models/user'
import jwt from 'jsonwebtoken'




export const Login = async (req: Request, res: Response) => {
    const { Uemail, Upassword } = req.body;

    console.log(req.body);

    const user: any = await User.findOne({ where: { Uemail: Uemail } })
    if (!user) {
        return res.status(400).json({
            msg: `Usuario no existe con el email ${Uemail}`
        })
    }
    
    const passwordValid = await bcrypt.compare(Upassword, user.Upassword)

    if (!passwordValid) {
        return res.status(400).json({
            msg: `Password Incorrecto => ${Upassword}`
        })
    }

    const token = jwt.sign({
        Uemail: Uemail
    }, process.env.SECRET_KEY || 'TSE-Edaniel-Valencia',
        // { expiresIn: '10000' }
    );
    res.json({ token })
}


