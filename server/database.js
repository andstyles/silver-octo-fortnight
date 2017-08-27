var mongoose = require('mongoose');
var GroceryItem = require('./models/GroceryItem.js');

mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/grocery', {
    useMongoClient: true
})
.then(function () {
    console.log('connected.');

    mongoose.connection.db.dropDatabase();

    var items = [{
        name: 'Ice Cream'
    }, {
        name: 'Waffles'
    }, {
        name: 'Candy',
        purchased: true
    }, {
        name: 'Snarks'
    }];

    items.forEach(function (item) {
        console.log('Adding item...', item);
        new GroceryItem(item).save();
    });
});