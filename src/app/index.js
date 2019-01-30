import dbConnect from './db'
import express from 'express';
import routesConfig from './routes';
import path from 'path';
import bodyParser from 'body-parser';

dbConnect();

const app = express();

app.use(express.static(path.join(__dirname, '/public/')));
app.set('views', './build/app/views')
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

routesConfig(express, app);

export default app;