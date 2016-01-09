'use strict';

angular.module('core').directive('heroDirective', [
	function() {
		return {
			templateUrl: 'modules/core/views/hero.partial.view.html',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {

			}
		};
	}
]);