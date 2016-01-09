'use strict';

angular.module('core').directive('featuresDirective', [
	function() {
		return {
			templateUrl: 'modules/core/views/features.partial.view.html',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {

			}
		};
	}
]);