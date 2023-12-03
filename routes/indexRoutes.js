import express from 'express';
import cookieJwtAuth from '../middleware/cookieJwtAuth.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/logout', cookieJwtAuth, (req, res) => {
    res.clearCookie("token");
    req.session.cartItems = [];
    res.redirect('/');
});


export default router;