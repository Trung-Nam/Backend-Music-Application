import { Router } from "express";

const router = Router();


router.get('/', (req, res) => {
    res.send('Stats with GET method');
})

export default router;