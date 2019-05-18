const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const panelSchema = new Schema({
    name: String,
    keyword: String,
    startTime: String,
    endTime: String
});

const Panel = mongoose.model('panel', panelSchema);

module.exports = Panel;