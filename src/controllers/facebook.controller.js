const facebookService = require('../services/facebook.service');

exports.verifyWebhook = (req, res) => {
    const VERIFY_TOKEN = process.env.VERIFY_TOKEN;
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token) {
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {
            console.log('WEBHOOK_VERIFIED');
            return res.status(200).send(challenge);
        } else {
            return res.sendStatus(403);
        }
    }
};

exports.handleWebhook = async (req, res, next) => {
    try {
        const body = req.body;
        console.log('Webhook received:', body);

        // You can trigger your search and messaging logic here if needed.
        // Example: facebookService.processIncomingMessage(body);

        res.sendStatus(200);
    } catch (error) {
        next(error);
    }
};
