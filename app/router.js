import express from 'express';
import pageController from './controllers/pageController.js';

const router = express.Router();

router.get('/', pageController.acceuil);
router.get('/a-propos', pageController.apropos);

export default router;