'use strict';

angular.module('core').directive('testimonialsDirective', [
	function() {
		return {
			templateUrl: 'modules/core/views/testimonials.partial.view.html',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {

			}
		};
	}
]);