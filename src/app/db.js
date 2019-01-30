import mongoose from 'mongoose';

const urlDb = process.env.URLDB || 'mongodb://localhost:27017/mylanding';

export default () => {
    mongoose.connect(urlDb, {
        useNewUrlParser: true,
        autoReconnect: true,
        reconnectInterval: 2000,
        reconnectTries: Number.MAX_VALUE
    }, () => {    
    });    
}

mongoose.connection.on('error', function(err) {
    console.log('Erro ao conectar no server de banco de dados');

    if(err.message.indexOf('on first connect') > -1){
        setTimeout(() => {
            mongoose.connection.openUri(urlDb);
        }, 2000)
    }
});

mongoose.connection.on('connected', () => {
    console.log('conectado no server de banco de dados');
})

mongoose.connection.on('reconnected', () => {
    console.log('reconectado no server de banco de dados');
})