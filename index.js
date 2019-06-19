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
const TelegramBot = require('node-telegram-bot-api')
const token = process.env['tg_api_key'] || '755380132:AAH326o9uguBRBOC9qpGX_n5TvQug85W8Ys'
const bot = new TelegramBot(token, { polling: true })
const url = 'https://test.mudrayaod.now.sh'

const server = http.createServer((req, res) => {
    // res.writeHeader(200, { 'Content-Type': 'text/html' });
    bot.setWebHook(`${url}/bot${token}`)

    bot.on('message', function onMessage(msg) {
        bot.sendMessage(msg.chat.id, 'I am alive on Zeit Now!');
    });
})

server.listen()
