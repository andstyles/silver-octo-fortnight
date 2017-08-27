var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/grocery', {
    useMongoClient: true
})
.then(function () {
    console.log('connected.');
});