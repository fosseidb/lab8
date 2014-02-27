var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){

	projects.grid = false;
	console.log("noGrid" + projects[1]);
  	res.render('index', projects);
};

exports.viewGrid = function(req, res){
	projects.grid = true;
	console.log("grid" + projects[1]);
	res.render('index', projects);
}