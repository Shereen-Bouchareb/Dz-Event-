const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const authenticateToken = require('../middleware/authenticateToken');
const authorizeRole = require('../middleware/authorizeRole');

// prestataire Routes

router.get('/', authenticateToken, authorizeRole(['prestataire']), serviceController.getPrestataireServices);
router.post('/', authenticateToken, authorizeRole(['prestataire']), serviceController.addPrestataireService);
router.delete('/:serviceId', authenticateToken, authorizeRole(['prestataire']), serviceController. deletePrestataireService);



module.exports = router;
