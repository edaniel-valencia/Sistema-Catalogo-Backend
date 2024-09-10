"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteClient = exports.UpdateClient = exports.CreateClientDashboard = exports.ReadClientId = exports.ReadClient = exports.CreateClient = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../models/user");
const CreateClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { Uname, Ulastname, Upassword, Uemail, Ucredential, RoleId } = req.body;
    const userEmail = yield user_1.User.findOne({ where: { Uemail: Uemail } });
    const userCredential = yield user_1.User.findOne({ where: { Ucredential: Ucredential } });
    if (userEmail) {
        return res.status(400).json({
            msg: `Usuario ya existe con el email ${Uemail}`
        });
    }
    if (userCredential) {
        return res.status(400).json({
            msg: `Usuario ya existe con la credencial ${Ucredential}`
        });
    }
    const UpasswordHash = yield bcrypt_1.default.hash(Upassword, 10);
    try {
        user_1.User.create({
            Uname: Uname,
            Ulastname: Ulastname,
            Uemail: Uemail,
            Upassword: UpasswordHash,
            Ucredential: Ucredential,
            RoleId: RoleId,
            Uimagen: (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename, // Imagen guardada con multer
            Ustatus: 1
        });
        res.json({
            msg: `User ${Uname} ${Ulastname} create success.`
        });
    }
    catch (error) {
        res.status(400).json({
            msg: `Existe un error al crear el usuario => `, error
        });
    }
});
exports.CreateClient = CreateClient;
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
const ReadClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listClient = yield user_1.User.findAll();
    res.json(listClient);
});
exports.ReadClient = ReadClient;
const ReadClientId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Uid } = req.params;
    try {
        const client = yield user_1.User.findOne({ where: { Uid: Uid } });
        if (!client) {
            return res.status(404).json({
                msg: `User con ID ${Uid} no encontrada`
            });
        }
        return res.json({
            msg: `User con ID ${Uid} encontrada exitosamente`,
            data: client
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: `Error al buscar la User con ID ${Uid}`
        });
    }
});
exports.ReadClientId = ReadClientId;
const CreateClientDashboard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Uname, Ulastname, Upassword, Uemail, Ucredential } = req.body;
    const userEmail = yield user_1.User.findOne({ where: { Uemail: Uemail } });
    const userCredential = yield user_1.User.findOne({ where: { Ucredential: Ucredential } });
    if (userEmail) {
        return res.status(400).json({
            msg: `Usuario ya existe con el email ${Uemail}`
        });
    }
    if (userCredential) {
        return res.status(400).json({
            msg: `Usuario ya existe con la credencial ${Ucredential}`
        });
    }
    const UpasswordHash = yield bcrypt_1.default.hash(Upassword, 10);
    try {
        user_1.User.create({
            Uname: Uname,
            Ulastname: Ulastname,
            Uemail: Uemail,
            Upassword: UpasswordHash,
            Ucredential: Ucredential,
            Ustatus: 1
        });
        res.json({
            msg: `User ${Uname} ${Ulastname} create success.`
        });
    }
    catch (error) {
        res.status(400).json({
            msg: `Existe un error al crear el usuario => `, error
        });
    }
});
exports.CreateClientDashboard = CreateClientDashboard;
const UpdateClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Uid } = req.params;
    const { Uname, Ulastname, Upassword, Uemail, Ucredential, Ustatus } = req.body;
    try {
        const user = yield user_1.User.findOne({ where: { Uid: Uid } });
        if (!user) {
            return res.status(404).json({
                msg: `User ${Uname} no encontrada`
            });
        }
        console.log("Estoy por aqui ****** =>" + user.Uid);
        console.log("Estoy por aqui ****** =>" + Uname);
        yield user_1.User.update({
            Uname: Uname,
            Ulastname: Ulastname,
            Ucredential: Ucredential,
            Uemail: Uemail,
            Upassword: Upassword,
            Ustatus: Ustatus,
        }, { where: { Uid: Uid } });
        console.log("Estoy por aqui ******");
        return res.json({
            msg: `User ${Uname} actualizada exitosamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: `Error al actualizar la User ${Uname}`
        });
    }
});
exports.UpdateClient = UpdateClient;
const DeleteClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Uid } = req.params;
    try {
        const user = yield user_1.User.findOne({ where: { Uid: Uid } });
        if (!user) {
            return res.status(404).json({
                msg: `User con ID ${Uid} no encontrada`
            });
        }
        yield user_1.User.destroy({ where: { Uid: Uid } });
        return res.json({
            msg: `User con ID ${Uid} eliminada exitosamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: `Error al eliminar la User con ID ${Uid}`
        });
    }
});
exports.DeleteClient = DeleteClient;
