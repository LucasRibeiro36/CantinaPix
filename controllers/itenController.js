import { createIten, getAllItens, getItenById, updateItenById, deleteItenById } from '../services/itenServices.js';

// Controller to handle creating a new Iten
async function createItenController(req, res) {
  try {
    const newIten = await createIten(req.body);
    res.status(201).json(newIten);
  } catch (error) {
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
async function getItenByIdController(req, res) {
  const ItenId = req.params.id;

  try {
    const Iten = await getItenById(ItenId);

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
async function updateItenByIdController(req, res) {
  const ItenId = req.params.id;

  try {
    const updatedIten = await updateItenById(ItenId, req.body);

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
async function deleteItenByIdController(req, res) {
  const ItenId = req.params.id;

  try {
    const deletedRowCount = await deleteItenById(ItenId);

    if (deletedRowCount > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Iten not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export {
  createItenController,
  getAllItensController,
  getItenByIdController,
  updateItenByIdController,
  deleteItenByIdController
};
