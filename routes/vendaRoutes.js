// routes/paymentRoutes.js
import express from 'express';
import cookieJwtAuth from '../middleware/cookieJwtAuth.js'
import { getAllItens } from '../services/itemServices.js';

const router = express.Router();

// Define routes
router.get('/',cookieJwtAuth, async (req, res) => {
    const menuItems = await getAllItens();
    console.log(menuItems);
    const cartItems = req.session.cartItems || [];
    res.render('venda', { menuItems, cartItems, layout: 'layout'});
});

router.post('/order',cookieJwtAuth, async (req, res) => {
    console.log(req.body);
    const selectedItemId = parseInt(req.body.item_id);
    const quantity = parseInt(req.body.quantity);
    const menuItems = await getAllItens();
    let cartItems = req.session.cartItems || [];
    

    const selectedItem = menuItems.find(item => item.id === selectedItemId);

    const totalCost = selectedItem.price * quantity;

    cartItems.push({
        item: selectedItem,
        quantity: quantity,
        totalCost: totalCost,
    });
    req.session.cartItems = cartItems;

    res.redirect('/venda');
});

router.get('/remove/:itemId',cookieJwtAuth, (req, res) => {
    const itemId = parseInt(req.params.itemId);
    let cartItems = req.session.cartItems || [];
    const indexToRemove = cartItems.findIndex(item => item.item.id === itemId);

    if (indexToRemove !== -1) {
        cartItems.splice(indexToRemove, 1);
    }
    req.session.cartItems = cartItems;
    res.redirect('/venda');
});

router.get('/checkout',cookieJwtAuth, (req, res) => {
    let cartItems = req.session.cartItems || [];
    const totalCost = cartItems.reduce((total, item) => total + item.totalCost, 0);
    req.session.cartItems = cartItems;
    res.render('checkout', { cartItems, totalCost, layout: 'layout' });
});


export default router;
