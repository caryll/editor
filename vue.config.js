var patelPlex = require('patel');

module.exports = {
	customCompilers: {
		ptl: function (content, cb) {
			patelPlex.compile(content, {strict: true}, function(err, result){
				if(err) cb(err);
				else if(result) cb(null, result.code)
			})
		}
	}
}