const dotenv = require('dotenv')
const Product = require('../model/product.model')

dotenv.config()

const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll()
        res.status(200).json(products)
    } catch (err) {
        res.status(500).json({ msg: "error getting all products" })
    }
}

const getProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByPk(id)

        if (!product) {
            return res.status(404).json({ msg: "product not found" })
        }

        res.status(200).json(product)
    } catch (err) {
        res.status(500).json({ msg: "error getting single product" })
    }
}

const createProduct = async (req, res) => {

    const parseArray = (data) => {
        try {
            return typeof data === "string" ? JSON.parse(data) : data
        } catch {
            return []
        }
    }

    try {

        const desktopImage = req.files.desktopImage?.[0]?.path || null;
        const mobileImage = req.files.mobileImage?.[0]?.path || null;
        const landingImage = req.files.landingImage?.[0]?.path || null;
        const screenShot = req.files.screenshot?.[0]?.path || null;

        const payload = {
            name: req.body.name,
            title: req.body.title,
            project: req.body.project,
            githubLink: req.body.githubLink,
            liveDemo: req.body.liveDemo,
            overview: req.body.overview,

            keyFeatures: parseArray(req.body.keyFeatures),
            projectGoals: parseArray(req.body.projectGoals),
            technologiesUsed: parseArray(req.body.technologiesUsed),
            lessonsLearned: parseArray(req.body.lessonsLearned),
            challengesFaced: parseArray(req.body.challengesFaced),
            achievements: parseArray(req.body.achievements),

            desktopImage,
            mobileImage,
            landingImage,
            screenshot: screenShot
        };

        const newProduct = await Product.create(payload)
        res.status(201).json({ msg: "Product created successfully", newProduct })

    } catch (err) {
        res.status(500).json({ msg: "error creating product", err })
    }
}


const updateProduct = async (req, res) => {

    const parseArray = (data) => {
        try {
            return typeof data === "string" && data.startsWith("[") ? JSON.parse(data) : data || []
        } catch {
            return []
        }
    }

    try {
        const { id } = req.params
        const product = await Product.findByPk(id)

        if (!product) return res.status(404).json({ msg: "product not found" })

        const updatedPayload = {
            ...req.body,

            keyFeatures: parseArray(req.body.keyFeatures),
            projectGoals: parseArray(req.body.projectGoals),
            technologiesUsed: parseArray(req.body.technologiesUsed),
            lessonsLearned: parseArray(req.body.lessonsLearned),
            challengesFaced: parseArray(req.body.challengesFaced),
            achievements: parseArray(req.body.achievements),

            desktopImage: req.files.desktopImage?.[0]?.path || product.desktopImage,
            mobileImage: req.files.mobileImage?.[0]?.path || product.mobileImage,
            landingImage: req.files.landingImage?.[0]?.path || product.landingImage,
            screenshot: req.files.screenshot?.[0]?.path || product.screenshot,
        };

        await product.update(updatedPayload)
        res.status(200).json(product)
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: "error while updating product" })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByPk(id)

        if (!product) {
            return res.status(404).json({ msg: "product not found" })
        }

        await product.destroy()
        res.status(200).json({ msg: "product deleted" })
    } catch (err) {
        res.status(500).json({ msg: "error while deleting product" })
    }
}


module.exports = { getProducts, getProduct, createProduct, updateProduct, deleteProduct }