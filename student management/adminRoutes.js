import express from 'express';
import adminController from '../controllers/adminController';
import verifyToken from '../middleware/authMiddleware';

const router = express.Router();

router.post('/add-user', (req, res) => verifyToken(req.headers['authorization'], adminSecretKey, req, res, adminController.addUser));
router.post('/assign-task', (req, res) => verifyToken(req.headers['authorization'], adminSecretKey, req, res, adminController.assignTask));

export default router;
