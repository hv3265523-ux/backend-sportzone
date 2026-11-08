
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        required: true
    },
    salePrice: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        default: 0
    },
    categoryId: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    brand: {
        type: String,
        default: ''
    },
    sizes: {
        type: [String],
        default: []
    },
    colors: {
        type: [mongoose.Schema.Types.Mixed],
        default: []
    },
    rating: {
        type: Number,
        default: 0
    },
    reviewCount: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: 'active'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false,
    collection: 'products'
});

module.exports = mongoose.model('Product', productSchema);
