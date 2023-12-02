import { createMenu, getAllMenus, getMenuById, updateMenuById, deleteMenuById } from '../services/menuServices.js';

// Controller to handle creating a new Menu
async function createMenuController(req, res) {
  try {
    const newMenu = await createMenu(req.body);
    res.status(201).json(newMenu);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Controller to handle getting all Menus
async function getAllMenusController(req, res) {
  try {
    const Menus = await getAllMenus();
    res.status(200).json(Menus);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Controller to handle getting a Menu by ID
async function getMenuByIdController(req, res) {
  const MenuId = req.params.id;

  try {
    const Menu = await getMenuById(MenuId);

    if (Menu) {
      res.status(200).json(Menu);
    } else {
      res.status(404).json({ error: 'Menu not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Controller to handle updating a Menu by ID
async function updateMenuByIdController(req, res) {
  const MenuId = req.params.id;

  try {
    const updatedMenu = await updateMenuById(MenuId, req.body);

    if (updatedMenu) {
      res.status(200).json(updatedMenu);
    } else {
      res.status(404).json({ error: 'Menu not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Controller to handle deleting a Menu by ID
async function deleteMenuByIdController(req, res) {
  const MenuId = req.params.id;

  try {
    const deletedRowCount = await deleteMenuById(MenuId);

    if (deletedRowCount > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Menu not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export {
  createMenuController,
  getAllMenusController,
  getMenuByIdController,
  updateMenuByIdController,
  deleteMenuByIdController
};
