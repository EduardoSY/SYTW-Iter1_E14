import {Router} from 'express'
const router = Router();
import * as videoCtrl from './videos.controller'
router.get('/videos',);
router.get('/videos', videoCtrl.getVideos);

export default router