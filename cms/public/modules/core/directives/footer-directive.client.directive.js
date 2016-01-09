'use strict';

angular.module('core').directive('footerDirective', [
	function() {
		return {
			templateUrl: 'modules/core/views/footer.partial.view.html',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {

			}
		};
	}
]);