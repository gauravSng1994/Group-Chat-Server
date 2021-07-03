import UserController from './User';

const controller = (app) =>{
    app.use('/user',UserController);
}

export default controller;
