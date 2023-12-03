import express from 'express';
import { engine } from 'express-handlebars';
import bodyParser from 'body-parser';
import paymentRoutes from './routes/paymentRoutes.js';
import vendaRoutes from './routes/vendaRoutes.js'
import userRoutes from './routes/userRoutes.js'
import loginRoutes from './routes/loginRoutes.js'
import menuRoutes from './routes/itensRoutes.js'
import indexRoutes from './routes/indexRoutes.js'
import cookieParser from 'cookie-parser';
import { init } from './config/database.js';

init();

import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const app = express();

app.engine('handlebars', engine(
    {
        extname: '.handlebars',
        runtimeOptions: {
            allowProtoMethodsByDefault: true,
            allowProtoPropertiesByDefault: true,
        }
    }));
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
app.use("/venda", menuRoutes);
app.use("/", indexRoutes);



app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor está rodando em http://localhost:3000');
});
