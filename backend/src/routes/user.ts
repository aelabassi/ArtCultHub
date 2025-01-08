import { Router } from "express";
import { userProfile, updateProfile } from "../handlers/user";

const router = Router();


// @desc Fetch user profile ar update user profile
// @route GET and PUT /api/profile
// acccess Signed users - TDOD: to_do()

router.route('/profile')
       .get(userProfile)
        .put(updateProfile);

export default router;