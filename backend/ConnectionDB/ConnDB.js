const mongoose = require('mongoose'); 

//Se recomienda utilizar process.env.DATABASE_URI

mongoose.connect ("mongodb+srv://DBPizzaYa:XG0cfegZ0w5Z7jaf@cluster0.mxjuj.mongodb.net/PizzaYa?retryWrites=true&w=majority", function(err, res) {
	if(err) {
		console.log('ERROR: connecting to Database. ' + err);
	} else {
		console.log('Connected to Database');
	}
});

module.exports = mongoose;

