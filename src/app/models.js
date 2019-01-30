import {Schema} from 'mongoose';

const SubscriberModel = new Schema({
    name: String,
    email: String,
    dateCreated: Date,
});