import { Router, Request, Response} from 'express';
import { uplaodImageMiddleware } from '../middlewares/imageUplaoder';
import { error } from 'console';

const router = Router();

const profiles = uplaodImageMiddleware('profiles');
const products = uplaodImageMiddleware('products');

/**
 * @desc Upload image
 * @route POST /api/upload
 * @access admin and signed users (profile image)
 * 
 */
router.post('/profile', profiles.single('profileImage'), (req: Request, res: Response) => {
    if(!req.file){
        res.status(400).json({
            error: 'No file uploaded'
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
router.post('/product', products.single('file'), (req: Request, res: Response) => {
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