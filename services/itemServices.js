import Iten from '../models/itensModel.js'; 

// Create a new Iten
async function createItem(ItenDetails) {
  try {
    const newIten = await Iten.create(ItenDetails);
    return newIten;
  } catch (error) {
    throw error;
  }
}

// Get all Itens
async function getAllItens() {
  try {
    const Itens = await Iten.findAll();
    return Itens;
  } catch (error) {
    throw error;
  }
}

// Get Iten by ID
async function getItemById(ItenId) {
  try {
    const Iten = await Iten.findByPk(ItenId);
    return Iten;
  } catch (error) {
    throw error;
  }
}

// Update Iten by ID
async function updateItemById(ItenId, updatedDetails) {
  try {
    await Iten.update(updatedDetails, { where: { id: ItenId } });
    const updatedIten = await Iten.findByPk(ItenId);
    return updatedIten;
  } catch (error) {
    throw error;
  }
}


// Delete Iten by ID
async function deleteItemById(ItenId) {
  try {
    const deletedRowCount = await Iten.destroy({ where: { id: ItenId } });
    return deletedRowCount;
  } catch (error) {
    throw error;
  }
}

export { createItem, getAllItens, getItemById, updateItemById, deleteItemById};
