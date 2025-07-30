import express from 'express';
import { sql } from '../config/db.js';
import {getSummarybyUserID,deleteTransaction,createTransaction, getTransactionsbyUserId} from '../controller/transactionsController.js';  

export const router = express.Router();

router.get('/:userId', getTransactionsbyUserId);
router.post('/', createTransaction);
router.delete('/:id', deleteTransaction);
router.get('/summary/:userID', getSummarybyUserID);


export default router;