import express from "express";
import chalk from 'chalk';
// import mongoose from "mongoose";
import _db from './db';
const app = express();
import router from './controller';
router(app);
// app.get('/api',(req, res) => {
//     return res.json({success:true,message:"This is gateway for making api calls"});
// });

// app.get('/api/users',(req, res) => {
//   console.log('query',req.query);
//   console.log('params',(req.params));
//   return res.json({success:true});
// });

Object.defineProperty(global,'_db',{
    value:_db,
    writable:false
});

app.listen(3000,()=>{
    console.log(`Server started on http://localhost:3000/api`);
})
