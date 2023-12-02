// controllers/paymentController.js
import { paymentAPI, generateIdempotencyKey } from '../services/mercadoPagoService.js';

const createPayment = async (req, res) => {
    try {
        console.log('Incoming request payload:', req.body);
        // Create the request object with a dynamically generated idempotencyKey
        const body = {
            transaction_amount: req.body.transaction_amount,
            description: req.body.description,
            payment_method_id: req.body.payment_method_id,
            payer: {
                email: req.body.email
            },
        };

        const idempotencyKey = generateIdempotencyKey();
        
        // Make the request with the dynamically generated idempotencyKey
        const response = await paymentAPI.create({
            body,
            options: { idempotencyKey }
        });

        // Respond with the created payment
        res.status(201).json(response);
    } catch (error) {
        // Handle errors
        console.error('Error creating payment:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const checkPayment = async (req, res) => {
    try {
        const paymentId = req.params.paymentId;

        // Make the request to check payment status
        const response = await paymentAPI.get(paymentId);

        // Respond with the payment status
        res.status(200).json(response);
    } catch (error) {
        // Handle errors
        console.error('Error checking payment:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export { createPayment, checkPayment };
