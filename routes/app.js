import express from 'express'
import getQR from './getQR.js'
import { generateQR } from '../functions/qrGenerator.js'

const app = express()

app.use(express.urlencoded({extended: false}))

app.use(getQR)

app.use('/yourQR', (req, res) => {
    generateQR(req.body.title).then(result => res.send(
        `<img src="${result}" style="display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;">`))
})

app.listen(process.env.PORT)