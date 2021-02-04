const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    contactNumber: String,
    timeZone: String,
}, {
    timestamps: true
})

schema.index({createdAt: 1})

const Data = new mongoose.model('data-list-entries', schema)

Data.on('index', function(err) {
    if (err) {
        console.error('Data model index error', err);
    } else {
        console.info('Data model indexing complete');
    }
});

module.exports = Data