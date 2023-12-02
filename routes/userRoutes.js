import express from 'express';
import {
  createUserController,
  getAllUsersController,
  getUserByIdController,
  updateUserByIdController,
  deleteUserByIdController
} from '../controllers/userController.js'; // Update the path accordingly
import cookieJwtAuth from '../middleware/cookieJwtAuth.js';

const router = express.Router();

// Define routes for user operations
router.post('/users',cookieJwtAuth, createUserController); // Create a new user
router.put('/users/:id',cookieJwtAuth, updateUserByIdController); // Update user by ID
router.delete('/users/:id',cookieJwtAuth, deleteUserByIdController); // Delete user by ID

export default router;