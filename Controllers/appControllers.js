const {
    isEmpty: _isEmpty,
    map: _map,
    get: _get,
} = require("lodash")
const mongoose = require("mongoose")
const Data = require("./../models/Data")

module.exports.uploadCSV = async (req, res) => {
    try {
        const dataList = req.body
        // console.log(dataList)
        const response = await Data.insertMany(dataList)
    
        // if(response) {
            console.log('uploaded successfully', response)
            res.status(201).json({uploaded: true})
        // }
    
    } catch(err) {
        console.log(err)
        res.status(500).json({
            errorName: err.name,
            errorMsg: err.message
        })
    }
}

module.exports.getData = async (req, res) => {
    try {
        
        const aggregation = [
            {"$match": {}},
            {"$sort": {"createdAt": -1}}
        ]
        console.log(aggregation)
        const response = await Data.aggregate(aggregation)
    
        // if(response) {
            // console.log('found successfully', response)
            res.status(200).json({dataList: response})
        // }
    
    } catch(err) {
        console.log(err)
        res.status(500).json({
            errorName: err.name,
            errorMsg: err.message
        })
    }
}

module.exports.deleteSelected = async (req, res) => {
    try {
        console.log(req.query)
        const _idArr = _map(
            _get(req, 'query.selectedRowsIdStr', []),
            _idStr => mongoose.Types.ObjectId(_idStr)
        )
        console.log(_idArr)
        const response = await Data.deleteMany({_id: {$in: _idArr}})
    
        if(response) {
            console.log('deleted successfully', response)
            res.status(200).json({deleted: true})
        }
    
    } catch(err) {
        console.log(err)
        res.status(500).json({
            errorName: err.name,
            errorMsg: err.message
        })
    }
}
