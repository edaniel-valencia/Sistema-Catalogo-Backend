"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = void 0;
const multer_1 = __importDefault(require("multer"));
exports.storage = multer_1.default.memoryStorage();
// // Configuración de multer para guardar archivos
// export const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         const uploadPath = path.join('./static/image');
//         // Check if directory exists, if not, create it
//         if (!fs.existsSync(uploadPath)) {
//             fs.mkdirSync(uploadPath, { recursive: true });
//         }
//         cb(null, uploadPath);
//     },
//     filename: function (req, file, cb) {
//         cb(null, `Image-${Date.now()}.${file.mimetype.split('/')[1]}`);
//     }
// });
// import multer from 'multer';
// import path from 'path';
// import fs from 'fs';
// // Function to generate a random alphanumeric string of a given length
// const generateRandomString = (length: number) => {
//     const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let result = '';
//     for (let i = 0; i < length; i++) {
//         result += chars.charAt(Math.floor(Math.random() * chars.length));
//     }
//     return result;
// };
// // Configuración de multer para guardar archivos
// export const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         const uploadPath = path.join('./static/image');
//         // Check if directory exists, if not, create it
//         if (!fs.existsSync(uploadPath)) {
//             fs.mkdirSync(uploadPath, { recursive: true });
//         }
//         cb(null, uploadPath);
//     },
//     filename: function (req, file, cb) {
//         const randomString = generateRandomString(10); // Generate a 10-character random string
//         const timestamp = Date.now(); // Current timestamp
//         const fileExtension = file.mimetype.split('/')[1]; // Extract file extension
//         const newFilename = `Image-${randomString}-${timestamp}.${fileExtension}`;
//         console.log("Generated filename:", newFilename);
//         cb(null, newFilename);
//     }
// });
