import express from 'express';
import pageController from './controllers/pageController.js';

const router = express.Router();

router.get('/', pageController.acceuil);
router.get('/a-propos', pageController.apropos);
router.get('/contact', pageController.contact);
router.get('/nos-services', pageController.nosServices);
router.get('/les-promos', pageController.lesPromos);
router.get('/mon-compte', pageController.monCompte);
router.get('/plan-du-site', pageController.planDuSite);

export default router;