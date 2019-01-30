import homeRouter from './homeRouter';
import subscribersRoter from './subscriberRouter';

export default (express, app) => {   

    app.use((req, res, next) => {
        res.renderData = (template, data) => {
            res.render(template, {
                data,
                context: {
                    user: 'Fernando'
                }            
            });
        }
    
        next();
    })

    app.use('/', homeRouter(express));
    app.use('/subscriber', subscribersRoter(express));

    //404 route
    app.get('*', (req, res) => {
        res.send('404')
    });
}