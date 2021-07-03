import express from "express";
import chalk from 'chalk';
import bodyParser from "body-parser";
// import mongoose from "mongoose";
import _db from './db';
const app = express();
import router from './controller';

/** body parser */
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

/** setting routing */
router(app);

/** Setting variables in global object */
Object.defineProperty(global,'_db',{
    value:_db,
    writable:false
});

app.listen(3000,()=>{
    console.log(`Server started on http://localhost:3000/api`);
})
