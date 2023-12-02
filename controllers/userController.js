import { createUser, getAllUsers, getUserById, updateUserById, deleteUserById } from '../services/userService.js'; // Update the path accordingly

// Controller to handle creating a new user
async function createUserController(req, res) {
  try {
    const newUser = await createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Controller to handle getting all users
async function getAllUsersController(req, res) {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Controller to handle getting a user by ID
async function getUserByIdController(req, res) {
  const userId = req.params.id;

  try {
    const user = await getUserById(userId);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Controller to handle updating a user by ID
async function updateUserByIdController(req, res) {
  const userId = req.params.id;

  try {
    const updatedUser = await updateUserById(userId, req.body);

    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Controller to handle deleting a user by ID
async function deleteUserByIdController(req, res) {
  const userId = req.params.id;

  try {
    const deletedRowCount = await deleteUserById(userId);

    if (deletedRowCount > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export {
  createUserController,
  getAllUsersController,
  getUserByIdController,
  updateUserByIdController,
  deleteUserByIdController
};
