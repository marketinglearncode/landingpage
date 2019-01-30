
// const mongoose = require('mongoose');

// var Schema = mongoose.Schema;

// var SomeModelSchema = new Schema({
//   name: String
// });
// var SomeModel = mongoose.model('SomeModel', SomeModelSchema );







// const urlDb = process.env.URLDB || 'mongodb://localhost:27017/mylanding';

// mongoose.connect(urlDb, {
//     useNewUrlParser: true,
//     autoReconnect: true,
//     reconnectInterval: 2000,
//     reconnectTries: Number.MAX_VALUE
// }, () => {

// });

// mongoose.connection.on('error', function(err) {
//     console.log('Erro ao conectar no server de banco de dados');

//     if(err.message.indexOf('on first connect') > -1){
//         setTimeout(() => {
//             mongoose.connection.openUri(urlDb);
//         }, 2000)
//     }
// });

// mongoose.connection.on('connected', () => {
//     console.log('conectado no server de banco de dados');
// })

// mongoose.connection.on('reconnected', () => {
//     console.log('reconectado no server de banco de dados');
// })







// const express = require('express');
// const http = require('http')
// const app = express();

// app.get('/', (req, res) => {

    

//     const model = SomeModel.create({name: 'Fernando'});
//     model.then(() => {
//         console.log('criado!')
//     }).catch(e => console.log(e))
    

//     res.send('get');
// })

// const server = http.createServer(app);
// server.listen(3001, () => {
//     console.log('listen')
// })



// const moment = require('moment');

// console.log(moment().);


