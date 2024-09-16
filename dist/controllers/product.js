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
exports.DeleteProduct = exports.UpdateProduct = exports.CreateProduct = exports.ReadProductId = exports.ReadCaregoryProduct = exports.ReadProduct = void 0;
const product_1 = require("../models/product");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const category_1 = require("../models/category");
const ReadProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listProduct = yield product_1.Product.findAll();
    res.json(listProduct);
});
exports.ReadProduct = ReadProduct;
const ReadCaregoryProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { categoryId } = req.params;
    try {
        const listProduct = yield product_1.Product.findAll({
            where: { CategoryId: categoryId }, // Asegúrate de que sea 'CategoryId', no 'categoryId'
            include: [
                {
                    model: category_1.Category,
                    as: 'categories', // Alias correcto
                    // attributes: ['Cname'], // Atributos que deseas incluir de la categoría (opcional)
                }
            ]
        });
        if (listProduct.length === 0) {
            return res.status(404).json({ message: "No se encontraron productos para esta categoría." });
        }
        res.json(listProduct);
    }
    catch (error) {
        res.status(500).json({ message: "Error al obtener los productos.", error });
    }
});
exports.ReadCaregoryProduct = ReadCaregoryProduct;
const ReadProductId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Pid } = req.params;
    try {
        const product = yield product_1.Product.findOne({ where: { Pid: Pid } });
        if (!product) {
            return res.status(404).json({
                msg: `Product con ID ${Pid} no encontrada`
            });
        }
        return res.json({
            msg: `Product con ID ${Pid} encontrada exitosamente`,
            data: product
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: `Error al buscar la Product con ID ${Pid}`
        });
    }
});
exports.ReadProductId = ReadProductId;
const CreateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Pname, Pdescription, Pprice, CategoryId } = req.body;
    console.log({ Pname, Pdescription, Pprice, CategoryId });
    const file = req.file;
    console.log({ Pname });
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
    const existingProduct = yield product_1.Product.findOne({ where: { Pname: Pname } });
    if (existingProduct) {
        return res.status(400).json({
            msg: `Producto ${Pname}, ya existe`
        });
    }
    const uploadPath = path_1.default.join('./static/product');
    if (!fs_1.default.existsSync(uploadPath)) {
        fs_1.default.mkdirSync(uploadPath, { recursive: true });
    }
    const fileName = `Image-${Date.now()}.${file.mimetype.split('/')[1]}`;
    const filePath = path_1.default.join(uploadPath, fileName);
    fs_1.default.writeFileSync(filePath, file.buffer);
    try {
        product_1.Product.create({
            Pname: Pname,
            Pdescription: Pdescription,
            Pprice: Pprice,
            CategoryId: CategoryId,
            Pimage: fileName, // Save the image file name to the database
            Pstatus: 1
        });
        return res.json({
            msg: `Producto ${Pname}, creada exitosamente`
        });
    }
    catch (error) {
        return res.json({
            msg: `Error al crear la product ${Pname}`
        });
    }
});
exports.CreateProduct = CreateProduct;
const UpdateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Pid } = req.params;
    const { Pname, Pdescription, Pstatus, Pprice, CategoryId } = req.body;
    const file = req.file;
    const product = yield product_1.Product.findOne({ where: { Pid: Pid } });
    if (!product) {
        return res.status(404).json({
            msg: `Producto ${Pname} no encontrada`
        });
    }
    if (!file) {
        try {
            yield product_1.Product.update({
                Pname: Pname,
                Pdescription: Pdescription,
                Pprice: Pprice,
                CategoryId: CategoryId,
                Pstatus: Pstatus
            }, { where: { Pid: Pid } });
            return res.json({
                msg: `Producto ${Pname} actualizada exitosamente`
            });
        }
        catch (error) {
            return res.status(500).json({
                msg: `Error al actualizar la Producto ${Pname}`
            });
        }
    }
    const existingProduct = yield product_1.Product.findOne({ where: { Pname: Pname } });
    if (!existingProduct) {
        return res.status(400).json({
            msg: `Producto ${Pname}, ya existe`
        });
    }
    const uploadPath = path_1.default.join('./static/product');
    if (!fs_1.default.existsSync(uploadPath)) {
        fs_1.default.mkdirSync(uploadPath, { recursive: true });
    }
    const fileName = `Image-${Date.now()}.${file.mimetype.split('/')[1]}`;
    const filePath = path_1.default.join(uploadPath, fileName);
    fs_1.default.writeFileSync(filePath, file.buffer);
    try {
        yield product_1.Product.update({
            Pname: Pname,
            Pdescription: Pdescription,
            Pprice: Pprice,
            CategoryId: CategoryId,
            Pimage: fileName, // Save the image file name to the database
            Pstatus: Pstatus
        }, { where: { Pid: Pid } });
        return res.json({
            msg: `Producto ${Pname} actualizada exitosamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: `Error al actualizar la Producto ${Pname}`
        });
    }
});
exports.UpdateProduct = UpdateProduct;
const DeleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Pid } = req.params;
    try {
        const product = yield product_1.Product.findOne({ where: { Pid: Pid } });
        if (!product) {
            return res.status(404).json({
                msg: `Producto con ID ${Pid} no encontrada`
            });
        }
        yield product_1.Product.destroy({ where: { Pid: Pid } });
        return res.json({
            msg: `Producto con ID ${Pid} eliminada exitosamente`
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: `Error al eliminar la Producto con ID ${Pid}`
        });
    }
});
exports.DeleteProduct = DeleteProduct;
