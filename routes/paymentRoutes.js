// routes/paymentRoutes.js
import express from 'express';
import { createPayment, checkPayment } from '../controllers/paymentController.js';

const router = express.Router();

// Define routes
router.post('/create', createPayment);
router.get('/check/:paymentId', checkPayment);

export default router;
