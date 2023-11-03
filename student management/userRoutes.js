import express from 'express';
import userController from '../controllers/userController';
import verifyToken from '../middleware/authMiddleware';

const router = express.Router();

router.get('/tasks', (req, res) => verifyToken(req.headers['authorization'], studentSecretKey, req, res, userController.getTasks));
router.put('/done/:taskId', (req, res) => verifyToken(req.headers['authorization'], studentSecretKey, req, res, userController.markTaskDone));

export default router;
