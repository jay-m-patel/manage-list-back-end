const express = require("express")

const {
    uploadCSV,
    getData,
    deleteSelected,
} = require("./Controllers/appControllers")

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({check: true})
})

router.post('/upload-csv', uploadCSV)

router.get('/data-list', getData)

router.delete('/delete-selected', deleteSelected)

module.exports = router