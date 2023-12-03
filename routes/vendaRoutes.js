// routes/paymentRoutes.js
import express from 'express';
import cookieJwtAuth from '../middleware/cookieJwtAuth.js'
import { getAllItens } from '../services/itenServices.js';

const router = express.Router();


const cartItems = [];

// Define routes
router.get('/',cookieJwtAuth, async (req, res) => {
    const menuItems = await getAllItens();
    console.log(menuItems);
    res.render('venda', { menuItems, cartItems, layout: 'layout'});
});

router.post('/order',cookieJwtAuth, async (req, res) => {
    console.log(req.body);
    const selectedItemId = parseInt(req.body.item_id);
    const quantity = parseInt(req.body.quantity);
    const menuItems = await getAllItens();

    const selectedItem = menuItems.find(item => item.id === selectedItemId);

    const totalCost = selectedItem.price * quantity;

    cartItems.push({
        item: selectedItem,
        quantity: quantity,
        totalCost: totalCost,
    });

    res.redirect('/venda');
});

router.get('/remove/:itemId',cookieJwtAuth, (req, res) => {
    const itemId = parseInt(req.params.itemId);
    const indexToRemove = cartItems.findIndex(item => item.item.id === itemId);

    if (indexToRemove !== -1) {
        cartItems.splice(indexToRemove, 1);
    }

    res.redirect('/venda');
});

router.get('/checkout',cookieJwtAuth, (req, res) => {
    const totalCost = cartItems.reduce((total, item) => total + item.totalCost, 0);
    res.render('checkout', { cartItems, totalCost, layout: 'layout' });
});

export default router;
