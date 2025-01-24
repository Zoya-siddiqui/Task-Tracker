import express from 'express'
import { registerUser , loginUser , createTask ,editTask , fetchProfile} from '../controllers/user.controllers.js'
import { varifyJWT } from '../middlewares/auth.middlewares.js';


const router  = express.Router();

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/profile').get(varifyJWT,fetchProfile);
router.route('/create-task').post(varifyJWT ,createTask);
router.route('/edit-task/:taskid').put(varifyJWT ,editTask);


export default router;