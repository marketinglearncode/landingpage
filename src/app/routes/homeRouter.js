export default (express) => {
    const router = express.Router();

    router.get('/', (req, res) => {
        res.renderData('index', {title: 'Index', end: {city: 'bh'}});
    })

    return router;
}