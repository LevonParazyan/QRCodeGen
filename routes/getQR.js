import express from 'express'
import path from 'path'

const router = express.Router()
export const products = []

router.post('/', (req, res, next) => {
    products.push({title: req.body.title})
})

router.get('/', (req, res, next) => {
    res.sendFile(path.resolve('views/index.html'))
})

export default router