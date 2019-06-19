//
// const http = require('http')
// const TelegramBot = require('node-telegram-bot-api')
//
// // require('http').createServer().listen(3000)
//
// const token = process.env['tg_api_key'] || '755380132:AAH326o9uguBRBOC9qpGX_n5TvQug85W8Ys'
// const bot = new TelegramBot(token, { polling: true })
// const url = 'https://test.mudrayaod.now.sh'
//
// bot.setWebHook(`${url}/bot${token}`)
//
// const app = require('express')()
// app.get('*', (req, res) => {
//     res.send('Hello from Express.js!')
//     bot.on('message', function onMessage(msg) {
//         bot.sendMessage(msg.chat.id, 'I am alive on Zeit Now!');
//     });
// })
// app.listen()

const http = require('http');
const request = require('request');

// const TelegramBot = require('node-telegram-bot-api')
const token = process.env['tg_api_key'] || '755380132:AAH326o9uguBRBOC9qpGX_n5TvQug85W8Ys'
// const bot = new TelegramBot(token, { polling: true })
const url = 'https://test.mudrayaod.now.sh'

const sendMessage = (chat_id, text, res) => {
    const sendMessageUrl = `https://api.telegram.org/bot${token}/sendMessage`;

    request.post({
            url: sendMessageUrl,
            method: 'post',
            body: {
                chat_id: chat_id,
                text: text
            },
            json: true
        },
        (error, response, body) => {
            console.log(error);
            console.log(body);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end()
        }
    )
};

http.createServer(function (req, res) {
    let data = '';

    req.on('data', chunk => {
        data += chunk;
    });

    req.on('end', () => {
        const parsedUpdate = data != "" ? JSON.parse(data) : {};
        if (typeof parsedUpdate.message !== 'undefined') {
            const text = parsedUpdate.message.text;
            const chat_id = parsedUpdate.message.chat.id;

            sendMessage(chat_id, 'I am alive on zeit Now!', res);
        }
    });
}).listen(3000);

const setWebHook = () => {
    const setWebhookUrl = `https://api.telegram.org/bot${token}/setWebhook`;

    request.post({
            url: setWebhookUrl,
            method: 'post',
            body: {
                url: url
            },
            json: true
        },
        (error, response, body) => {
            console.log(body);
        })
};

setWebHook()



