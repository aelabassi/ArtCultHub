import { Router, Request, Response} from 'express';
import { uplaodImageMiddleware } from '../middlewares/imageUplaoder';

const router = Router();

const profiles = uplaodImageMiddleware('profiles');
const products = uplaodImageMiddleware('products');

/**
 * @desc Upload image
 * @route POST /api/upload
 * @access admin and signed users (profile image)
 * 
 */
router.post('/upload/profile', profiles.single('image'), (req: Request, res: Response) => {
    if(req.file){
        res.status(201).json({
            imageUrl: req.file.path
        })
    }

    const fileUrl = req.file!.path;
    res.status(200).json({ success: true, fileUrl: fileUrl });
});

/**
 * @desc Upload image
 * @route POST /api/upload
 * @access admin and signed users (product image)
 * 
 */
router.post('/upload/product', products.single('image'), (req: Request, res: Response) => {
    if(req.file){
        res.status(201).json({
            imageUrl: req.file.path
        })
    }

    const fileUrl = req.file!.path;
    res.status(200).json({ success: true, fileUrl: fileUrl });
}
);



export default router;