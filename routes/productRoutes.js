import express from 'express';
import {
  getAllProducts,
  getProductById,
} from '../controllers/productController.js';

// Create a new Express router instance
const router = express.Router();

/**
 * @route   /products (GET)
 * @desc    Get all products from the database
 * @access  Public (anyone can access this route)
 */
router.get('/', getAllProducts);

/**
 * @route   /products/:id (GET)
 * @desc    Get a specific product by its ID
 * @access  Public (anyone can access this route)
 */
router.get('/:id', getProductById);

export default router;
