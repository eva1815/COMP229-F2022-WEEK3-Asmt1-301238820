// Index Routes 
import { Router } from 'express';
import {displayHomePage, 
        displayAboutPage, 
        displayServicesPage, 
        displayProjectsPage, 
        displayContactPage} from '../controllers/index.controller.server.js';

const router = Router();

// add middleware to connect application
router.get('/',displayHomePage);
router.get('/home',displayHomePage);
router.get('/about', displayAboutPage);
router.get('/projects', displayProjectsPage);
router.get('/services', displayServicesPage);
router.get('/contact', displayContactPage);


export default router;