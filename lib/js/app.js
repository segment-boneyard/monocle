'use strict';

/**
 * Segment Monocle App
 *
 * Main module
 */

angular
	.module('app', [
		'ui.router',
    'Simulator'
	])

	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider){

		// Redirect all invalid routes to 
		$urlRouterProvider.otherwise('/');

		// Define states
		$stateProvider

			.state('home', {
				url: '/',
				templateUrl: '../components/home/index.html',
        controller: 'simulatorController',
        controllerAs: 'simulator'
			});
	}])

	.run([function(){
		
		// init app
	}]);
