'use strict';
const axios = require('axios');
const fs = require('fs');
const SlackService = require('./slackService');
const DEST_PATH = process.env.DEST_PATH;

const download = (url, key, extention) => {
    const requestConfig = {
        method: 'get',
        url: `${url}`,
        responseType: 'stream',
        timeout: 5000
    };
    
    axios(requestConfig)
        .then((response) => {
            response.data.pipe(fs.createWriteStream(`${DEST_PATH}/${key}${extention}`))
        });
}

const isAlias = (target) => {
    return target.match(/alias/);
}

const main = async () => {
    const emojiList = await SlackService.fetchEmojiList();

    for(let key in emojiList.emoji) {
        let url = emojiList.emoji[key];

        if(isAlias(url)) continue;

        let extention = url.match(/\.[^\.]+$/);
        // console.log(`${key}${extention}`);
        download(url, key, extention);
    }
}

main().catch(console.log);