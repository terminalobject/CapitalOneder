var mongoose = require('mongoose');
var ApplicationSchema = new mongoose.Schema({
    salutation: {
        type: String,
        enum: ['Mr', 'Mrs', 'Miss', 'Ms']
    },
    name: String,
    country: String,
    gender: {
        type: String,
        enum: ['M','F']
    }
});
mongoose.model('Application', ApplicationSchema);

module.exports = mongoose.model('Application');