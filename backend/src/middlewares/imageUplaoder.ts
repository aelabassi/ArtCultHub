import { cloudinaryConfig }   from "../config/cloudinary";
import { Request, Response } from 'express';
import { CloudinaryStorage } from "multer-storage-cloudinary/lib";
import multer from 'multer';


export const uplaodImageMiddleware = (folderName : string) => {
    const storage = new CloudinaryStorage({
        cloudinary: cloudinaryConfig,
        params:(req: Request, file) => {
            const folderPath = `${folderName.trim()}`;
            const fileExtension = file.originalname.split('.').pop();
            const publicId = `${folderPath}${Date.now()}.${fileExtension}`;

            return {
                folder: folderPath,
                public_id: publicId,
                format: fileExtension
            }
        }
    })

    return multer({ storage: storage, limits: { fileSize: 1024 * 1024 * 5 } });
}