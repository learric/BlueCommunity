'use strict';

angular.module('core').directive('headerDirective', [
	function() {
		return {
			templateUrl: 'modules/core/views/header.partial.view.html',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {

			}
		};
	}
]);