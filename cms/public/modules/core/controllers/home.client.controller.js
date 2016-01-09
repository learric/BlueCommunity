'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {

		// This provides Authentication context.
		$scope.authentication = Authentication;

		// *********
		// header section controls
		// *********

		// logo
		$scope.logoLinkTitle = '';
		$scope.logoImage = '';
		$scope.logoImageAlt = '';

		// clean break event logos
		$scope.cbLogoLinkTitle = '';
		$scope.cbLogoImage = '';
		$scope.cbLogoImageAlt = '';

		// blue rock event logo
		$scope.brLogoLinkTitle = '';
		$scope.brLogoImage = '';
		$scope.brLogoImageAlt = '';

		// social - facebook
		$scope.socialLinkFacebook = '';
		$scope.socialTitleFacebook = '';

		// social - twitter
		$scope.socialLinkTwitter = '';
		$scope.socialTitleTwitter = '';

		// social - youtube
		$scope.socialLinkYoutube = '';
		$scope.socialTitleYoutube = '';

		// social - instagram
		$scope.socialLinkInstagram = '';
		$scope.socialTitleInstagram = '';

		// main navigation list
		$scope.mainNavList = '';

		// *********
		// footer controls
		// *********

		// copyright info
		$scope.company = '';
		$scope.addressOne = '';
		$scope.addressTwo = '';
		$scope.locale = '';
		$scope.email = '';

	}
]);