import { Router } from "express";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";
import { createSong, deleteSong, createAlbum, deleteAlbum, checkAdmin } from "../controller/admin.controller.js";

const router = Router();


/**
 * slightly optimize clean code
 * router.get("/check", protectRoute, requireAdmin, checkAdmin);
*/

router.use(protectRoute, requireAdmin);

router.get("/check", checkAdmin);

router.post('/songs', createSong);
router.delete('/songs/:id', deleteSong);

router.post('/albums', createAlbum);
router.post('/albums/:id', deleteAlbum);



export default router;