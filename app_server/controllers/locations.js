module.exports.homelist=function(req,res){
	res.render('locations-list',
		{title:'Loc8r-Find places to work with wifi near you',
		pageHeader:{
			title:'Loc8r',
			strapline:'Find places to work with wifi near you!'
		           }
         });
};

module.exports.locationInfo=function(req,res){
	res.render('location-info',{title:'Location Info'});
};

module.exports.addReview=function(req,res){
	res.render('location-review-form',{title:'Add addReview'});
};