'use strict';

/**
 * Angular App
 *
 * Main module
 */

angular
	.module('app', [
		'ui.router'
	])

	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider){

		// Redirect all invalid routes to 
		$urlRouterProvider.otherwise('/');

		// Define states
		$stateProvider

			.state('home', {
				url: '/',
				templateUrl: '../components/home/index.html'
			});
	}])

	.run([function(){
		
		// init app
	}]);
