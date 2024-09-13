import multer from 'multer';
import path from 'path';

// Configuración de multer para guardar archivos
export const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../static/image'))
    },
    filename: function(req, file, cb) {
        cb(null, `image${Date.now()}.${file.mimetype.split('/')[1]}`)
    }
});
