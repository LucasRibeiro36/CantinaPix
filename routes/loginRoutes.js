import express from 'express';
import { getUserByLogin } from '../services/userService.js';
import jwt from "jsonwebtoken";

const router = express.Router();

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/checkPassword', async (req, res) => {
    try {
                // Assuming you have login and password in the request body
        const { login, password } = req.body;

        // Get the user by login from the database
        const user = await getUserByLogin(login);

        // Check if the user exists and the password matches
        if (!login || !password) {
            res.render('login', { error: 'Empty login or password' });
        } else if (!user) {
            res.render('login', { error: 'User not found' });
        } else if (user.password === password) {
            // Sign the JWT with only the necessary information (e.g., user ID)
            const token = jwt.sign({ userId: user.id }, process.env.MY_SECRET, { expiresIn: "1h" });
            res.cookie("token", token);
            res.locals.user = user;
            res.redirect('venda');
        } else {
            res.render('login', { error: 'Invalid login or password' });
        }
    } catch (error) {
        console.error(error);
        res.render('login', { error: 'Internal Server Error' });
    }
});

export default router;
