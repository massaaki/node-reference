import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.post('/create', userController.create);
router.delete('/:id', userController.delete);

export default router;
