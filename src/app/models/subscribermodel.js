import mongoose from 'mongoose';
import moment from 'moment';

const SubscriberSchema = new mongoose.Schema({
    name: String,
    email: String,
    dateCreated: {type: Date, default: moment() },
});

export default mongoose.model('Subscriber', SubscriberSchema);