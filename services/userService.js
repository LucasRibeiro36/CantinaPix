import User from '../models/userModel.js'; 

// Create a new user
async function createUser(userDetails) {
  try {
    const newUser = await User.create(userDetails);
    return newUser;
  } catch (error) {
    throw error;
  }
}

// Get all users
async function getAllUsers() {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw error;
  }
}

// Get user by ID
async function getUserById(userId) {
  try {
    const user = await User.findByPk(userId);
    return user;
  } catch (error) {
    throw error;
  }
}

// Update user by ID
async function updateUserById(userId, updatedDetails) {
  try {
    await User.update(updatedDetails, { where: { id: userId } });
    const updatedUser = await User.findByPk(userId);
    return updatedUser;
  } catch (error) {
    throw error;
  }
}

async function getUserByLogin(email) {
  try {
    const user = await User.findOne({
      where: { email }
    });

    return user;
  } catch (error) {
    throw error;
  }
}

// Delete user by ID
async function deleteUserById(userId) {
  try {
    const deletedRowCount = await User.destroy({ where: { id: userId } });
    return deletedRowCount;
  } catch (error) {
    throw error;
  }
}

export { createUser, getAllUsers, getUserById, updateUserById, deleteUserById, getUserByLogin };
