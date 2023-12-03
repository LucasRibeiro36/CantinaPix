// services/mercadoPagoService.js
import { MercadoPagoConfig, Payment } from 'mercadopago';
import { v4 as uuidv4 } from 'uuid';

// Function to generate a unique idempotency key
const generateIdempotencyKey = () => {
    return uuidv4();
};

// Create and configure the MercadoPagoConfig object
const mercadopagoConfig = new MercadoPagoConfig({
    accessToken: process.env.ACCESS_TOKEN,
    options: { timeout: 5000 }
});

// Create the Payment object with the configured MercadoPagoConfig
const paymentAPI = new Payment(mercadopagoConfig);


export { paymentAPI, generateIdempotencyKey };