// routes/paymentRoutes.js
import express from 'express';
import cookieJwtAuth from '../middleware/cookieJwtAuth.js'

const router = express.Router();

const menuItems = [
    { id: 1, name: 'Hamburguer', price: 10.99, img: 'https://th.bing.com/th/id/R.28ab6918973d182f2d6a7d668db25120?rik=wnWm9uTcRlQT4g&pid=ImgRaw&r=0' },
    { id: 2, name: 'Pizza', price: 8.99, img: 'https://th.bing.com/th/id/OIP._Tuj6ElUF8jhhcSg41_V_QHaE8?rs=1&pid=ImgDetMain' },
    { id: 3, name: 'Salada', price: 5.99, img: 'https://claudia.abril.com.br/wp-content/uploads/2020/01/salada1-1.jpg' },
];

const cartItems = [];

// Define routes
router.get('/',cookieJwtAuth, (req, res) => {
    res.render('venda', { menuItems, cartItems, layout: 'layout'});
});

router.post('/order',cookieJwtAuth, (req, res) => {
    console.log(req.body);
    const selectedItemId = parseInt(req.body.item_id);
    const quantity = parseInt(req.body.quantity);

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
