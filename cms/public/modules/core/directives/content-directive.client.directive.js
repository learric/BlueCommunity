'use strict';

angular.module('core').directive('contentDirective', [
	function() {
		return {
			templateUrl: 'modules/core/views/content.partial.view.html',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {

			}
		};
	}
]);