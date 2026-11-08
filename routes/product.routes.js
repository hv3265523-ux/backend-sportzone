
const express = require('express');
const router = express.Router();

const Product = require('../models/product.model');

// GET: Lấy danh sách sản phẩm
router.get('/', async (req, res) => {
    try {
        const products = await Product.find({
            status: 'active'
        }).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            total: products.length,
            data: products
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Lỗi lấy danh sách sản phẩm',
            error: error.message
        });
    }
});

// GET: Lấy chi tiết sản phẩm theo ID
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy sản phẩm'
            });
        }

        res.status(200).json({
            success: true,
            data: product
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Lỗi lấy chi tiết sản phẩm',
            error: error.message
        });
    }
});

module.exports = router;
