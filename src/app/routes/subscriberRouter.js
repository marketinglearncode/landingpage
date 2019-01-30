import subscriberModel from '../models/subscribermodel';

export default (express) => {
    const router = express.Router();

    router.post('/', (req, res) => {
        console.log(req.body);
        const model = subscriberModel.create(req.body)
        .then(docs => res.send(docs))
    })

    router.get('/', (req, res) => {
        const model = subscriberModel.create({
            name: 'Fernando',
            email: 'fernandosotam@gmail.com'
        }).then(docs => res.send(docs))

        //res.send(model);
    })

    return router;
}