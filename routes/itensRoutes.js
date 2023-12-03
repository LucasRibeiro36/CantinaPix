import express from 'express';
import {
  createItenController,
  getAllItensController,
  getItenByIdController,
  updateItenByIdController,
  deleteItenByIdController
} from '../controllers/itenController.js'; // Update the path accordingly

const router = express.Router();

// Define routes for Iten operations
router.post('/itens', createItenController); // Create a new Iten
router.get('/itens', getAllItensController); // Get all Itens
router.get('/itens/:id', getItenByIdController); // Get Iten by ID
router.put('/itens/:id', updateItenByIdController); // Update Iten by ID
router.delete('/itens/:id', deleteItenByIdController); // Delete Iten by ID

export default router;