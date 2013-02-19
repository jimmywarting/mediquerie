// creates modules
angular.module('ui.directives', []);
angular.module('ui', ['ui.directives']);


// angular.module(appName, [dependencies]);
var app = angular.module('plunker', ['ui']);

app.controller('MainCtrl', function($scope) {

	// This is all the products wich it sould populate into a template
	$scope.productList = [
		{name: "skruvdragare", price: 88.99, inStock: 23},
		{name: "spik", price: 81.99, inStock: 0},
		{name: "hammare", price: 84.99, inStock: 13},
		{name: "plankor", price: 88.99, inStock: 23},
		{name: "madras", price: 81.99, inStock: 33},
		{name: "sovsäck", price: 84.99, inStock: 123},
		{name: "altan", price: 88.99, inStock: 23},
		{name: "soffor", price: 81.99, inStock: 321},
		{name: "mattor", price: 84.99, inStock: 13},
		{name: "bord", price: 88.99, inStock: 23},
		{name: "tv", price: 81.99, inStock: 0},
		{name: "dator", price: 84.99, inStock: 13}
	];

});
