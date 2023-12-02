import Menu from '../models/menuModel.js'; 

// Create a new Menu
async function createMenu(MenuDetails) {
  try {
    const newMenu = await Menu.create(MenuDetails);
    return newMenu;
  } catch (error) {
    throw error;
  }
}

// Get all Menus
async function getAllMenus() {
  try {
    const Menus = await Menu.findAll();
    return Menus;
  } catch (error) {
    throw error;
  }
}

// Get Menu by ID
async function getMenuById(MenuId) {
  try {
    const Menu = await Menu.findByPk(MenuId);
    return Menu;
  } catch (error) {
    throw error;
  }
}

// Update Menu by ID
async function updateMenuById(MenuId, updatedDetails) {
  try {
    await Menu.update(updatedDetails, { where: { id: MenuId } });
    const updatedMenu = await Menu.findByPk(MenuId);
    return updatedMenu;
  } catch (error) {
    throw error;
  }
}


// Delete Menu by ID
async function deleteMenuById(MenuId) {
  try {
    const deletedRowCount = await Menu.destroy({ where: { id: MenuId } });
    return deletedRowCount;
  } catch (error) {
    throw error;
  }
}

export { createMenu, getAllMenus, getMenuById, updateMenuById, deleteMenuById};
