const axios = require('axios');
const config = require('../config/config');

const fbApi = `https://graph.facebook.com/${config.fb.apiVersion}`;

exports.searchPages = async (query) => {
    try {
        const url = `${fbApi}/search?type=page&q=${encodeURIComponent(query)}&fields=id,name,website,fan_count&access_token=${config.fb.accessToken}`;
        const response = await axios.get(url);
        return response.data.data;
    } catch (error) {
        console.error('Error in searchPages:', error.response ? error.response.data : error.message);
        throw error;
    }
};

exports.getLatestPost = async (pageId) => {
    try {
        const url = `${fbApi}/${pageId}/posts?limit=1&access_token=${config.fb.accessToken}`;
        const response = await axios.get(url);
        return response.data.data[0];
    } catch (error) {
        console.error('Error in getLatestPost:', error.response ? error.response.data : error.message);
        return null;
    }
};

exports.sendMessage = async (recipientId, messageText) => {
    try {
        const url = `${fbApi}/me/messages?access_token=${config.fb.accessToken}`;
        const messageData = {
            recipient: { id: recipientId },
            message: { text: messageText }
        };
        const response = await axios.post(url, messageData);
        console.log('Message sent:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error sending message:', error.response ? error.response.data : error.message);
        throw error;
    }
};
