import express from "express";
const router = express.Router();

import {getUserById} from '../api/User';

router.get('/:id',getUserById);

export default router;
