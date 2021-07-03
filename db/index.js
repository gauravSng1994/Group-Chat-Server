import mongoose from "mongoose";
import {readdirSync} from 'fs';
import path from 'path';
const DATABASE_INITIALISATION = "DATABASE INITIALISATION";
import {InitialisationEmitter} from '../util/event';

const _db = {};

InitialisationEmitter.emit('processing',DATABASE_INITIALISATION);
readdirSync(path.join(__dirname,'./models')).forEach( schemaFile => {
    const ModelClass = require(path.join(__dirname,`./models/${schemaFile}`)).default;
    const modelObj = new ModelClass();
    const model = modelObj.register();
    _db[modelObj.getName()] = model;
});

mongoose.connect(`mongodb://localhost:27017/chat-app`,{
    useNewUrlParser : true,
    useUnifiedTopology:true,
    useFindAndModify:true
})

InitialisationEmitter.emit('processing',DATABASE_INITIALISATION,true);
export default _db;
