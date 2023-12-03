import express from 'express';
import {
  createItemController,
  getAllItensController,
  getItemByIdController,
  updateItemByIdController,
  deleteItemByIdController
} from '../controllers/itensController.js'; // Update the path accordingly
import cookieJwtAuth from '../middleware/cookieJwtAuth.js';
import { getAllItens } from '../services/itemServices.js';

const router = express.Router();

// Define routes for Iten operations
router.post('/itens', createItemController); // Create a new Iten
router.get('/itens', getAllItensController); // Get all Itens
router.get('/itens/:id', getItemByIdController); // Get Iten by ID
router.put('/itens/:id', updateItemByIdController); // Update Iten by ID
router.delete('/itens/:id', deleteItemByIdController); // Delete Iten by ID
router.get("/gitens",cookieJwtAuth, async (req, res) => {
  const menuItems = await getAllItens();
  res.render("itens",{menuItems, layout: 'layout'});
});

export default router;