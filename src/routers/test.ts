import { Router } from 'express';
import { check } from 'express-validator';
import { getTest } from '../controllers/test';
import { validateFields } from '../middlewares/validate-fields';
const router = Router();

router.get('/', [
    check('param', 'param is required').notEmpty(),
    validateFields
], getTest);

export default router;

