import express from 'express';
import {
  createMenuController,
  getAllMenusController,
  getMenuByIdController,
  updateMenuByIdController,
  deleteMenuByIdController
} from '../controllers/menuController.js'; // Update the path accordingly

const router = express.Router();

// Define routes for Menu operations
router.post('/menus', createMenuController); // Create a new Menu
router.get('/menus', getAllMenusController); // Get all Menus
router.get('/menus/:id', getMenuByIdController); // Get Menu by ID
router.put('/menus/:id', updateMenuByIdController); // Update Menu by ID
router.delete('/menus/:id', deleteMenuByIdController); // Delete Menu by ID

export default router;