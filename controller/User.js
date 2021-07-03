import express from "express";
const router = express.Router();

import {createUser, getUserById} from '../api/User';

router.get('/:id',getUserById);
router.post('/',createUser);

export default router;
