import { createItem, getAllItens, getItemById, updateItemById, deleteItemById } from '../services/itemServices.js';

// Controller to handle creating a new Iten
async function createItemController(req, res) {
  try {
    const newIten = await createItem(req.body);
    res.status(201).json(newIten);
  } catch (error) {
    console.log(req.body);
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Controller to handle getting all Itens
async function getAllItensController(req, res) {
  try {
    const Itens = await getAllItens();
    res.status(200).json(Itens);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Controller to handle getting a Iten by ID
async function getItemByIdController(req, res) {
  const ItenId = req.params.id;

  try {
    const Iten = await getItemById(ItenId);

    if (Iten) {
      res.status(200).json(Iten);
    } else {
      res.status(404).json({ error: 'Iten not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Controller to handle updating a Iten by ID
async function updateItemByIdController(req, res) {
  const ItenId = req.params.id;

  try {
    const updatedIten = await updateItemById(ItenId, req.body);

    if (updatedIten) {
      res.status(200).json(updatedIten);
    } else {
      res.status(404).json({ error: 'Iten not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Controller to handle deleting a Iten by ID
async function deleteItemByIdController(req, res) {
  const ItenId = req.params.id;

  try {
    const deletedRowCount = await deleteItemById(ItenId);

    if (deletedRowCount > 0) {
      res.status(204).json({ sucess: 'Item was deleted' });
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export {
  createItemController,
  getAllItensController,
  getItemByIdController,
  updateItemByIdController,
  deleteItemByIdController
};
