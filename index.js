import express from 'express';
import { engine } from 'express-handlebars';
import bodyParser from 'body-parser';
import paymentRoutes from './routes/paymentRoutes.js';
import vendaRoutes from './routes/vendaRoutes.js'
import userRoutes from './routes/userRoutes.js'
import loginRoutes from './routes/loginRoutes.js'
import menuRoutes from './routes/menuRoutes.js'
import indexRoutes from './routes/indexRoutes.js'
import cookieJwtAuth from './middleware/cookieJwtAuth.js';
import cookieParser from 'cookie-parser';

const app = express(); 

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static('public'));
// Use cookie-parser middleware to parse cookies
app.use(cookieParser());


app.use('/payments', paymentRoutes);
app.use("/venda", vendaRoutes);
app.use("/", userRoutes);
app.use("/", loginRoutes);
app.use("/", userRoutes);
app.use("/", menuRoutes);
app.use("/", indexRoutes);



app.listen(3000, () => {
    console.log('Servidor está rodando em http://localhost:3000');
});
