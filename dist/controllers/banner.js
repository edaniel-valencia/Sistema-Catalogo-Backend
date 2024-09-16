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
exports.ReadBannerPublic = exports.DeleteBanner = exports.UpdateBanner = exports.CreateBanner = exports.ReadBannerId = exports.ReadBanner = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const banner_1 = require("../models/banner");
const ReadBanner = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listBanner = yield banner_1.Banner.findAll();
    res.json(listBanner);
});
exports.ReadBanner = ReadBanner;
const ReadBannerId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Bid } = req.params;
    try {
        const banner = yield banner_1.Banner.findOne({ where: { Bid: Bid } });
        if (!banner) {
            return res.status(404).json({
                msg: `Categoría con ID ${Bid} no encontrada`
            });
        }
        return res.json({
            msg: `Categoría con ID ${Bid} encontrada exitosamente`,
            data: banner
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: `Error al buscar la categoría con ID ${Bid}`
        });
    }
});
exports.ReadBannerId = ReadBannerId;
const CreateBanner = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
    const uploadPath = path_1.default.join('./static/banner');
    if (!fs_1.default.existsSync(uploadPath)) {
        fs_1.default.mkdirSync(uploadPath, { recursive: true });
    }
    const fileName = `Image-${Date.now()}.${file.mimetype.split('/')[1]}`;
    const filePath = path_1.default.join(uploadPath, fileName);
    fs_1.default.writeFileSync(filePath, file.buffer);
    try {
        yield banner_1.Banner.create({
            Bdescription: Bdescription,
            Bimage: fileName, // Save the image file name to the database
            Bstatus: 1
        });
        return res.json({
            msg: ` creada exitosamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: `Error al crear la categoria `,
            error: error
        });
    }
});
exports.CreateBanner = CreateBanner;
const UpdateBanner = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Bid } = req.params;
    const { Bdescription, Bstatus } = req.body;
    const file = req.file;
    if (!file) {
        try {
            yield banner_1.Banner.update({
                Bdescription: Bdescription,
                Bstatus: Bstatus
            }, { where: { Bid: Bid } });
            return res.json({
                msg: `Banner, actualizada exitosamente`
            });
        }
        catch (error) {
            return res.status(400).json({
                msg: "No se subió ninguna imagen"
            });
        }
    }
    const banner = yield banner_1.Banner.findOne({ where: { Bid: Bid } });
    if (!banner) {
        return res.status(404).json({
            msg: `Categoría no encontrada`
        });
    }
    const uploadPath = path_1.default.join('./static/banner');
    if (!fs_1.default.existsSync(uploadPath)) {
        fs_1.default.mkdirSync(uploadPath, { recursive: true });
    }
    const fileName = `Image-${Date.now()}.${file.mimetype.split('/')[1]}`;
    const filePath = path_1.default.join(uploadPath, fileName);
    fs_1.default.writeFileSync(filePath, file.buffer);
    try {
        yield banner_1.Banner.update({
            Bdescription: Bdescription,
            Bimage: fileName, // Save the image file name to the database
            Bstatus: Bstatus
        }, { where: { Bid: Bid } });
        return res.json({
            msg: `Categoría, actualizada exitosamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: `Error al actualizar la categoría`
        });
    }
});
exports.UpdateBanner = UpdateBanner;
const DeleteBanner = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Bid } = req.params;
    try {
        const banner = yield banner_1.Banner.findOne({ where: { Bid: Bid } });
        if (!banner) {
            return res.status(404).json({
                msg: `Categoría con ID ${Bid} no encontrada`
            });
        }
        yield banner.destroy({ where: { Bid: Bid } });
        return res.json({
            msg: `Categoría con ID ${Bid} eliminada exitosamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: `Error al eliminar la categoría con ID ${Bid}`
        });
    }
});
exports.DeleteBanner = DeleteBanner;
const ReadBannerPublic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listBanner = yield banner_1.Banner.findAll({ where: { Bstatus: 1 } });
    res.json(listBanner);
});
exports.ReadBannerPublic = ReadBannerPublic;
