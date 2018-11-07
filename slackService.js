'use strict';
const axios = require('axios');
const SLACK_TOKEN = process.env.SLACK_TOKEN;

const slackApiInstance = axios.create({
    baseURL: 'https://slack.com/api/',
    timeout: 5000
});

module.exports = class SlackSercice{
    static async fetchEmojiList() {
        const config = {
            params: {
                token: SLACK_TOKEN
            }
        };
        const response = await slackApiInstance.get('/emoji.list', config);
        return response.data;
    }
};